"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ShoppingBag, Clock } from "lucide-react"

interface StickyAddToCartProps {
  product: any
}

export function StickyAddToCart({ product }: StickyAddToCartProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsVisible(scrollY > 600)
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
            <div className="flex items-center justify-between gap-3">
              {/* Product Info - Desktop only */}
              <div className="hidden sm:flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                <div className="min-w-0">
                  <h3 className="font-bold text-white text-sm sm:text-base truncate">{product.name}</h3>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[#ffd700] font-bold text-sm sm:text-base">
                      ${product.price.toFixed(2)}
                    </span>
                    <div className="flex items-center gap-1 text-[#ff2a88]">
                      <Clock className="h-3 w-3 flex-shrink-0" />
                      <span className="text-xs font-bold">Only {product.stock} left</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#ff2a88] hover:bg-[#ff2a88]/90 text-white font-bold py-3 px-4 sm:px-6 rounded-md flex items-center justify-center gap-2 tracking-wider shadow-[0_0_15px_rgba(255,42,136,0.3)] hover:shadow-[0_0_20px_rgba(255,42,136,0.5)] transition-all duration-300 min-h-[48px] text-sm sm:text-base flex-1 sm:flex-none"
              >
                <ShoppingBag className="h-5 w-5" />
                <span className="sm:hidden">ADD TO CART</span>
                <span className="hidden sm:inline">UNLOCK THIS LOADOUT</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
