"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface CountdownTimerProps {
  targetDate: string
}

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [isExpired, setIsExpired] = useState(false)
  const [prevTimeLeft, setPrevTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const target = new Date(targetDate).getTime()
      const now = new Date().getTime()
      const difference = target - now

      if (difference > 0) {
        setPrevTimeLeft(timeLeft)

        const newTimeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        }

        setTimeLeft(newTimeLeft)
        setIsExpired(false)
      } else {
        setIsExpired(true)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  const TimeUnit = ({ value, label, isChanging }: { value: number; label: string; isChanging: boolean }) => (
    <div className="flex flex-col items-center">
      <div
        className={`relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-black border ${
          isChanging ? "border-[#ff2a88]" : "border-[#ff2a88]/50"
        } rounded-md flex items-center justify-center overflow-hidden ${isChanging ? "animate-pulse" : ""}`}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={value}
            initial={{ y: -15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 15, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-mono font-bold ${
              isChanging ? "text-[#00f7f7]" : "text-[#00f7f7]/90"
            }`}
          >
            {value.toString().padStart(2, "0")}
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-[#ff2a88]/20 to-transparent pointer-events-none" />
      </div>
      <span className="text-[10px] sm:text-xs mt-1 text-gray-400">{label}</span>
    </div>
  )

  return (
    <div className="flex flex-col items-center">
      {isExpired ? (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: [1, 1.2, 1], opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-xl sm:text-2xl font-bold text-[#ff2a88] uppercase tracking-wider"
        >
          WASTED
        </motion.div>
      ) : (
        <div className="flex gap-1.5 sm:gap-2 md:gap-3 lg:gap-4">
          <TimeUnit value={timeLeft.days} label="DAYS" isChanging={timeLeft.days !== prevTimeLeft.days} />
          <TimeUnit value={timeLeft.hours} label="HRS" isChanging={timeLeft.hours !== prevTimeLeft.hours} />
          <TimeUnit value={timeLeft.minutes} label="MINS" isChanging={timeLeft.minutes !== prevTimeLeft.minutes} />
          <TimeUnit value={timeLeft.seconds} label="SECS" isChanging={timeLeft.seconds !== prevTimeLeft.seconds} />
        </div>
      )}
    </div>
  )
}
