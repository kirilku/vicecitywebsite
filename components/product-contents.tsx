"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface ProductContentsProps {
  product: any
}

export function ProductContents({ product }: ProductContentsProps) {
  const [isDeluxe, setIsDeluxe] = useState(false)

  return (
    <section className="py-12 bg-gradient-to-b from-black to-gray-900">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl gta-font text-center mb-8">📦 What's Inside</h2>

          <div className="bg-black border-2 border-[#ff2a88]/30 rounded-lg p-6 md:p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {product.contents.map((item: any, index: number) => (
                <TooltipProvider key={index}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="flex items-center gap-4 bg-gray-900 border border-gray-800 rounded-lg p-4 hover:border-[#00f7f7]/30 transition-colors cursor-pointer">
                        <div className="relative w-16 h-16 rounded-md overflow-hidden flex-shrink-0 border border-gray-700">
                          <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                        </div>
                        <div>
                          <h3 className="font-bold text-white">{item.name}</h3>
                          <p className="text-sm text-gray-400">{item.description}</p>
                        </div>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent side="top" className="bg-black border border-[#ff2a88] p-4 max-w-xs">
                      <div className="text-center">
                        <h4 className="font-bold mb-2">{item.name}</h4>
                        <p className="text-sm">{item.description}</p>
                        <p className="text-xs text-[#00f7f7] mt-2">Click to view details</p>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>

            {/* Deluxe Upgrade Toggle */}
            <div className="mt-8 border-t border-gray-800 pt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-12 h-6 rounded-full relative cursor-pointer transition-colors ${
                      isDeluxe ? "bg-[#ff2a88]" : "bg-gray-700"
                    }`}
                    onClick={() => setIsDeluxe(!isDeluxe)}
                  >
                    <div
                      className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${
                        isDeluxe ? "left-7" : "left-1"
                      }`}
                    ></div>
                  </div>
                  <div>
                    <h3 className="font-bold flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-[#ffd700]" /> Upgrade to Deluxe Pack (+$
                      {product.deluxeUpgrade.price})
                    </h3>
                    <p className="text-sm text-gray-400">{product.deluxeUpgrade.items.join(" + ")}</p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  className={`border-[#ff2a88] text-[#ff2a88] hover:bg-[#ff2a88]/10 ${
                    isDeluxe ? "opacity-100" : "opacity-50"
                  }`}
                  onClick={() => setIsDeluxe(true)}
                  disabled={isDeluxe}
                >
                  {isDeluxe ? "Added" : "Add Upgrade"}
                </Button>
              </div>
            </div>
          </div>

          {/* Visual Showcase */}
          <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
            <Image src="/placeholder.svg?height=400&width=1200" alt="Product showcase" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
              <p className="text-xl md:text-2xl font-bold text-white">Unbox the experience. Join the crew.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
