"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Heart, Eye, Star, Clock } from "lucide-react"
import { CashCounter } from "./cash-counter"
import Link from "next/link"

interface ProductCardProps {
  name: string
  price: number
  image: string
  badge?: string
  rating?: number
  microcopy?: string
  stock?: number
}

export function ProductCard({ 
  name, 
  price, 
  image, 
  badge, 
  rating = 5, 
  microcopy = "", 
  stock = 20 
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const lowStock = stock <= 10
  const productSlug = name.toLowerCase().replace(/\s+/g, "-")

  return (
    <motion.div
      className="group w-full"
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 },
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card className="overflow-hidden bg-black border border-[#00f7f7]/30 rounded-lg shadow-[0_0_15px_rgba(0,247,247,0.2)] h-full flex flex-col">
        <CardContent className="p-0 relative">
          {/* Badge */}
          {badge && (
            <div className="absolute top-2 right-2 sm:top-3 sm:right-3 z-10 px-2 py-0.5 sm:px-3 sm:py-1 bg-[#ff2a88] text-white text-xs sm:text-sm font-bold rounded-full">
              {badge}
            </div>
          )}
          
          {/* Product Image */}
          <Link href={`/product/${productSlug}`} className="block">
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={image || "/placeholder.svg"}
                alt={name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </Link>

          {/* Quick Actions - Hidden on mobile, shown on hover for desktop */}
          <div className="hidden sm:flex absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <div className="flex justify-between items-center w-full">
              <Button
                variant="ghost"
                size="icon"
                className="text-[#ff2a88] hover:text-[#ff2a88]/80 hover:bg-transparent min-h-[44px] min-w-[44px]"
              >
                <Heart className="h-5 w-5" />
              </Button>
              <Link
                href={`/product/${productSlug}`}
                className="bg-[#00f7f7] hover:bg-[#00f7f7]/80 text-black font-bold px-4 py-2 rounded flex items-center justify-center transition-all duration-300 text-sm min-h-[44px]"
              >
                <ShoppingCart className="mr-2 h-4 w-4" />
                <span className="uppercase">Add to Cart</span>
              </Link>
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex flex-col p-3 sm:p-4 bg-gradient-to-r from-[#0a0a0a] to-[#0a0a0a]/90 flex-1">
          {/* Product Info */}
          <div className="flex justify-between items-start w-full gap-2">
            <div className="flex-1 min-w-0">
              <h3 className="gta-font text-sm sm:text-base md:text-lg text-white truncate">
                <Link
                  href={`/product/${productSlug}`}
                  className="hover:text-[#00f7f7] transition-colors"
                >
                  {name}
                </Link>
              </h3>
              <div className="flex items-center gap-1 mt-1">
                <span className="text-[#ffd700] font-bold text-sm">$</span>
                <CashCounter amount={price} small />
              </div>
            </div>
            
            {/* Rating */}
            <div className="flex items-center flex-shrink-0">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-3 w-3 sm:h-4 sm:w-4 ${
                    i < Math.floor(rating) ? "text-[#ffd700] fill-[#ffd700]" : "text-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Microcopy */}
          {microcopy && (
            <p className="mt-2 text-xs sm:text-sm text-gray-400 line-clamp-2">{microcopy}</p>
          )}

          {/* Stock Warning */}
          {lowStock && (
            <div className="flex items-center mt-2 text-xs sm:text-sm text-[#ff2a88]">
              <Clock className="h-3 w-3 mr-1 flex-shrink-0" />
              <span>Only {stock} left in stock</span>
            </div>
          )}

          {/* Mobile CTA */}
          <Link
            href={`/product/${productSlug}`}
            className="sm:hidden w-full mt-3 bg-[#00f7f7] hover:bg-[#00f7f7]/80 text-black font-bold py-3 rounded flex items-center justify-center transition-all duration-300 text-sm min-h-[44px]"
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            <span className="uppercase">View Product</span>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
