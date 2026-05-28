"use client"

import { motion } from "framer-motion"
import { Shield, RefreshCw, CreditCard } from "lucide-react"

export function ProductGuarantee() {
  return (
    <section className="container py-12 border-t border-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl gta-font mb-8">Vice-Backed Guarantee</h2>
        <p className="text-xl text-gray-300 mb-10">If you don't feel like a boss unboxing this, we'll make it right.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <div className="h-16 w-16 rounded-full bg-[#ff2a88]/20 flex items-center justify-center mb-4">
              <RefreshCw className="h-8 w-8 text-[#ff2a88]" />
            </div>
            <h3 className="font-bold text-lg mb-2">30-Day Return</h3>
            <p className="text-gray-400 text-sm">Not satisfied? Return within 30 days for a full refund.</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="h-16 w-16 rounded-full bg-[#00f7f7]/20 flex items-center justify-center mb-4">
              <CreditCard className="h-8 w-8 text-[#00f7f7]" />
            </div>
            <h3 className="font-bold text-lg mb-2">Safe Checkout</h3>
            <p className="text-gray-400 text-sm">Your payment information is processed securely.</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="h-16 w-16 rounded-full bg-[#ffd700]/20 flex items-center justify-center mb-4">
              <Shield className="h-8 w-8 text-[#ffd700]" />
            </div>
            <h3 className="font-bold text-lg mb-2">Anonymous Packaging</h3>
            <p className="text-gray-400 text-sm">Discreet packaging with no external branding.</p>
          </div>
        </div>

        <p className="text-xs text-gray-500 mt-10">Not affiliated with Rockstar Games. This is a fan-made product.</p>
      </motion.div>
    </section>
  )
}
