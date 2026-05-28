"use client"

import { motion } from "framer-motion"
import { ShoppingBag, Star, Check } from "lucide-react"
import Link from "next/link"

interface ProductFooterProps {
  product: any
}

export function ProductFooter({ product }: ProductFooterProps) {
  return (
    <section className="py-12 bg-gradient-to-b from-black to-gray-900">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl gta-font mb-6">You're one step away from the life you deserve.</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of Vice City fans who've already secured their loadout.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#ff2a88] hover:bg-[#ff2a88]/90 text-white font-bold py-4 px-8 rounded-md flex items-center justify-center gap-2 text-xl tracking-wider shadow-[0_0_15px_rgba(255,42,136,0.3)] hover:shadow-[0_0_20px_rgba(255,42,136,0.5)] transition-all duration-300 mx-auto"
          >
            <ShoppingBag className="h-5 w-5" />
            UNLOCK NOW
          </motion.button>

          <div className="flex items-center justify-center gap-4 mt-8">
            <Link href="#reviews" className="text-[#00f7f7] hover:underline">
              Read Reviews
            </Link>
            <div className="h-4 w-px bg-gray-700"></div>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 text-[#ffd700] fill-[#ffd700]" />
              <span>
                {product.rating} ({product.reviewCount})
              </span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-6 mt-8">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-[#00f7f7]" />
              <span className="text-sm text-gray-400">Secure Checkout</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-[#00f7f7]" />
              <span className="text-sm text-gray-400">48h Dispatch</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-[#00f7f7]" />
              <span className="text-sm text-gray-400">1,500+ Sold</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
