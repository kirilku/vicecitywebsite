"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { DollarSign } from "lucide-react"

interface CashCounterProps {
  amount: number
  small?: boolean
}

export function CashCounter({ amount, small = false }: CashCounterProps) {
  const [displayAmount, setDisplayAmount] = useState(amount)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (amount !== displayAmount) {
      setIsAnimating(true)
      const timer = setTimeout(() => {
        setDisplayAmount(amount)
        setIsAnimating(false)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [amount, displayAmount])

  return (
    <div className={`flex items-center ${small ? "gap-1" : "gap-2"} font-mono`}>
      {!small && <DollarSign className="h-4 w-4 text-[#ffd700]" />}
      <div className="flex overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={displayAmount}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`${small ? "text-base" : "text-lg"} font-bold ${small ? "text-[#ffd700]" : "text-white"}`}
          >
            {displayAmount.toLocaleString()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
