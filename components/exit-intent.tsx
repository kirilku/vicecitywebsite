"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Mail, Percent } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ExitIntentProps {
  productSpecific?: boolean
}

export function ExitIntent({ productSpecific = false }: ExitIntentProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasShown, setHasShown] = useState(false)
  const [email, setEmail] = useState("")
  const [code, setCode] = useState("")
  const [isCodeVisible, setIsCodeVisible] = useState(false)

  useEffect(() => {
    if (hasShown) return

    let timeout: NodeJS.Timeout

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        timeout = setTimeout(() => {
          setIsVisible(true)
          setHasShown(true)
        }, 500)
      }
    }

    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight
      const scrollTop = document.documentElement.scrollTop
      const clientHeight = document.documentElement.clientHeight

      if (scrollTop + clientHeight >= scrollHeight - 300 && !hasShown) {
        setIsVisible(true)
        setHasShown(true)
      }
    }

    if (productSpecific) {
      timeout = setTimeout(() => {
        if (!hasShown) {
          setIsVisible(true)
          setHasShown(true)
        }
      }, 20000)
    }

    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("scroll", handleScroll)
      clearTimeout(timeout)
    }
  }, [hasShown, productSpecific])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setCode(
      `VICE${Math.floor(Math.random() * 10000)
        .toString()
        .padStart(4, "0")}`
    )
    setIsCodeVisible(true)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={() => setIsVisible(false)}
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 500 }}
            className="w-full max-w-md bg-gray-900 border border-[#ff2a88] rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative p-5 sm:p-6 md:p-8">
              <button
                className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-400 hover:text-white p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
                onClick={() => setIsVisible(false)}
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>

              {isCodeVisible ? (
                <div className="text-center pt-4">
                  <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-[#00f7f7]/20 flex items-center justify-center mx-auto mb-4">
                    <Percent className="h-6 w-6 sm:h-8 sm:w-8 text-[#00f7f7]" />
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl gta-font mb-4">Your Discount Code</h3>
                  <div className="bg-black border-2 border-[#ff2a88] rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
                    <p className="text-xl sm:text-2xl font-mono font-bold tracking-wider text-[#ff2a88]">{code}</p>
                  </div>
                  <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6">
                    Use this code at checkout to get 10% off your order. Valid for 24 hours.
                  </p>
                  <Button
                    className="bg-[#00f7f7] hover:bg-[#00f7f7]/80 text-black font-bold w-full min-h-[48px]"
                    onClick={() => setIsVisible(false)}
                  >
                    Continue Shopping
                  </Button>
                </div>
              ) : (
                <div className="pt-4">
                  <h3 className="text-xl sm:text-2xl md:text-3xl gta-font mb-3 sm:mb-4 text-center">
                    {productSpecific ? "Still on the fence?" : "Still Scoping the Streets?"}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 text-center">
                    {productSpecific
                      ? "Here's 10% off. Complete your setup before the next mission starts."
                      : "Drop your email and we'll text you the next drop before anyone else."}
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex flex-col sm:flex-row gap-2">
                      <input
                        type="email"
                        placeholder="Your email"
                        className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff2a88] min-h-[48px] text-sm sm:text-base"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <Button
                        type="submit"
                        className="bg-[#ff2a88] hover:bg-[#ff2a88]/80 px-4 sm:px-6 min-h-[48px] w-full sm:w-auto"
                      >
                        <Mail className="mr-2 h-4 w-4" />
                        {productSpecific ? "Get 10% Off" : "Notify Me"}
                      </Button>
                    </div>
                    <p className="text-xs text-gray-500 text-center">
                      We respect your privacy. Unsubscribe at any time.
                    </p>
                  </form>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
