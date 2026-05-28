"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ShoppingBag, ArrowUp, Filter, TrendingUp } from "lucide-react"

interface StickyBarProps {
  totalItems: number
}

export function StickyBar({ totalItems }: StickyBarProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsVisible(scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-t border-[#ff2a88]/30 safe-area-inset-bottom"
        >
          <div className="container py-3 sm:py-4">
            <div className="flex justify-between items-center gap-3">
              {/* Desktop: Full info */}
              <div className="hidden md:flex items-center gap-4">
                <span className="text-sm text-gray-300">Total Items: {totalItems}</span>
                <div className="h-4 w-px bg-gray-700" />
                <div className="flex items-center gap-2">
                  <span className="text-gray-400 text-sm">Sort by:</span>
                  <select className="bg-gray-900 border border-gray-700 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-[#ff2a88] min-h-[36px]">
                    <option value="vice-verified">Vice Verified</option>
                    <option value="newest">Newest</option>
                    <option value="limited">Limited Quantity</option>
                    <option value="fan-faves">Fan Faves</option>
                  </select>
                </div>
              </div>

              {/* Mobile: Filter buttons */}
              <div className="flex md:hidden items-center gap-2">
                <button className="p-2.5 bg-gray-900 rounded-md min-h-[44px] min-w-[44px] flex items-center justify-center">
                  <Filter className="h-5 w-5 text-[#00f7f7]" />
                </button>
                <button className="p-2.5 bg-gray-900 rounded-md min-h-[44px] min-w-[44px] flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-[#00f7f7]" />
                </button>
              </div>

              {/* CTA Buttons */}
              <div className="flex items-center gap-2 sm:gap-3">
                <button className="btn-shop-now text-sm sm:text-base">
                  <ShoppingBag className="mr-1.5 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="hidden sm:inline">ADD TO HEIST BAG</span>
                  <span className="sm:hidden">ADD</span>
                </button>
                <button
                  className="p-2.5 bg-gray-900 rounded-md hover:bg-gray-800 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  aria-label="Back to top"
                >
                  <ArrowUp className="h-5 w-5 text-[#ff2a88]" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
