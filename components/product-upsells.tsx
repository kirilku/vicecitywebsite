"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Plus, Check, Target } from "lucide-react"

interface ProductUpsellsProps {
  product: any
}

export function ProductUpsells({ product }: ProductUpsellsProps) {
  const [selectedUpsells, setSelectedUpsells] = useState<string[]>([])

  const toggleUpsell = (id: string) => {
    if (selectedUpsells.includes(id)) {
      setSelectedUpsells(selectedUpsells.filter((item) => item !== id))
    } else {
      setSelectedUpsells([...selectedUpsells, id])
    }
  }

  return (
    <section className="py-12 bg-gradient-to-b from-gray-900 to-black">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-8">
            <Target className="h-6 w-6 text-[#ff2a88]" />
            <h2 className="text-3xl md:text-4xl gta-font">Complete Your Loadout</h2>
          </div>
          <p className="text-xl text-gray-300 mb-8">You've got the briefcase — now add the tools.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {product.relatedProducts.map((item: any) => (
              <div
                key={item.id}
                className={`bg-black border-2 rounded-lg overflow-hidden transition-all duration-300 ${
                  selectedUpsells.includes(item.id)
                    ? "border-[#00f7f7] shadow-[0_0_15px_rgba(0,247,247,0.3)]"
                    : "border-gray-800"
                }`}
              >
                <div className="relative aspect-square">
                  <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                  {item.digital && (
                    <div className="absolute top-3 right-3 bg-[#ff2a88] text-white text-xs font-bold px-2 py-1 rounded-full">
                      DIGITAL
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-1">{item.name}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[#ffd700] font-bold">${item.bundlePrice.toFixed(2)}</span>
                    <span className="text-gray-400 line-through">${item.price.toFixed(2)}</span>
                    <span className="text-[#00f7f7] text-sm">Save {item.savingsPercent}%</span>
                  </div>
                  <button
                    className={`w-full flex items-center justify-center gap-2 py-2 rounded transition-colors ${
                      selectedUpsells.includes(item.id)
                        ? "bg-[#00f7f7] text-black font-bold"
                        : "bg-gray-900 text-white border border-gray-800"
                    }`}
                    onClick={() => toggleUpsell(item.id)}
                  >
                    {selectedUpsells.includes(item.id) ? (
                      <>
                        <Check className="h-4 w-4" /> Added
                      </>
                    ) : (
                      <>
                        <Plus className="h-4 w-4" /> Add to Cart
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
