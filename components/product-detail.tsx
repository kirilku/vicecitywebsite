"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ShoppingBag, Star, Clock, Check, ChevronDown, ChevronUp } from "lucide-react"

interface ProductDetailProps {
  product: any
}

export function ProductDetail({ product }: ProductDetailProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [selectedVariants, setSelectedVariants] = useState<Record<string, string>>({})
  const [isVariantOpen, setIsVariantOpen] = useState<Record<string, boolean>>({})

  const handleVariantChange = (variantName: string, option: string) => {
    setSelectedVariants((prev) => ({
      ...prev,
      [variantName]: option,
    }))
    setIsVariantOpen((prev) => ({
      ...prev,
      [variantName]: false,
    }))
  }

  const toggleVariantDropdown = (variantName: string) => {
    setIsVariantOpen((prev) => ({
      ...prev,
      [variantName]: !prev[variantName],
    }))
  }

  return (
    <section className="container py-6 sm:py-8 md:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
        {/* Left Column - Product Images */}
        <div className="space-y-3 sm:space-y-4">
          {/* Main Image */}
          <div className="relative aspect-square overflow-hidden rounded-lg border-2 border-[#00f7f7]/30 bg-black">
            <Image
              src={product.images[selectedImage] || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Overlay Tags */}
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex flex-col gap-1.5 sm:gap-2">
              {product.badges.map((badge: string, index: number) => (
                <div
                  key={index}
                  className="px-2 py-0.5 sm:px-3 sm:py-1 bg-black/70 backdrop-blur-sm border border-[#ff2a88] rounded-md text-white text-xs sm:text-sm font-bold"
                >
                  {badge}
                </div>
              ))}
            </div>
          </div>

          {/* Thumbnail Gallery */}
          <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
            {product.images.map((image: string, index: number) => (
              <button
                key={index}
                className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-md overflow-hidden border-2 transition-all flex-shrink-0 ${
                  selectedImage === index
                    ? "border-[#ff2a88] shadow-[0_0_10px_rgba(255,42,136,0.5)]"
                    : "border-gray-800 opacity-70"
                }`}
                onClick={() => setSelectedImage(index)}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right Column - Product Info */}
        <div className="space-y-4 sm:space-y-6">
          {/* Title */}
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl gta-font text-white mb-1 sm:mb-2">{product.name}</h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300">{product.tagline}</p>
          </div>

          {/* Price */}
          <div className="flex flex-wrap items-baseline gap-2 sm:gap-3">
            <span className="text-2xl sm:text-3xl font-bold text-white">${product.price.toFixed(2)}</span>
            <span className="text-xs sm:text-sm text-gray-400">
              Or 4x ${product.installmentPrice.toFixed(2)} with ShopPay / Klarna
            </span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2 flex-wrap">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(product.rating) ? "text-[#ffd700] fill-[#ffd700]" : "text-gray-400"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-300">
              {product.rating} ({product.reviewCount} reviews)
            </span>
          </div>

          {/* Shipping Info */}
          <div className="text-sm sm:text-base text-gray-300">{product.shipping}</div>

          {/* Countdown Timer */}
          <div className="bg-gray-900 border border-[#ff2a88]/30 rounded-md p-3 sm:p-4">
            <div className="flex items-center gap-2 text-[#ff2a88] font-bold text-sm sm:text-base">
              <Clock className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
              <span>Order in the next 01:37:58 to secure launch drop access</span>
            </div>
          </div>

          {/* Variants */}
          <div className="space-y-3 sm:space-y-4">
            {product.variants.map((variant: any, index: number) => (
              <div key={index} className="relative">
                <button
                  className="w-full flex items-center justify-between bg-gray-900 border border-gray-800 rounded-md p-3 text-left min-h-[48px]"
                  onClick={() => toggleVariantDropdown(variant.name)}
                >
                  <span className="text-sm sm:text-base">
                    {variant.name}:{" "}
                    <span className="font-bold">{selectedVariants[variant.name] || variant.options[0]}</span>
                  </span>
                  {isVariantOpen[variant.name] ? (
                    <ChevronUp className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {isVariantOpen[variant.name] && (
                  <div className="absolute z-10 mt-1 w-full bg-gray-900 border border-gray-800 rounded-md shadow-lg overflow-hidden">
                    {variant.options.map((option: string, optIndex: number) => (
                      <button
                        key={optIndex}
                        className="w-full text-left px-4 py-3 hover:bg-gray-800 transition-colors text-sm sm:text-base min-h-[44px]"
                        onClick={() => handleVariantChange(variant.name, option)}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center gap-3 sm:gap-4">
            <span className="text-sm sm:text-base text-gray-300">Quantity:</span>
            <div className="flex border border-gray-800 rounded-md overflow-hidden">
              <button
                className="px-3 sm:px-4 py-2 bg-gray-900 hover:bg-gray-800 transition-colors min-h-[44px] min-w-[44px]"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </button>
              <div className="px-4 py-2 bg-black flex items-center justify-center min-w-[44px]">{quantity}</div>
              <button
                className="px-3 sm:px-4 py-2 bg-gray-900 hover:bg-gray-800 transition-colors min-h-[44px] min-w-[44px]"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-[#ff2a88] hover:bg-[#ff2a88]/90 text-white font-bold py-4 rounded-md flex items-center justify-center gap-2 text-base sm:text-lg tracking-wider shadow-[0_0_15px_rgba(255,42,136,0.3)] hover:shadow-[0_0_20px_rgba(255,42,136,0.5)] transition-all duration-300 min-h-[56px]"
          >
            <ShoppingBag className="h-5 w-5" />
            UNLOCK THIS LOADOUT
          </motion.button>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-gray-800">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-[#00f7f7] flex-shrink-0" />
              <span className="text-xs sm:text-sm text-gray-400">Secure Checkout</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-[#00f7f7] flex-shrink-0" />
              <span className="text-xs sm:text-sm text-gray-400">48h Dispatch</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-[#00f7f7] flex-shrink-0" />
              <span className="text-xs sm:text-sm text-gray-400">1,500+ Sold</span>
            </div>
          </div>

          {/* Stock Warning */}
          <div className="flex items-center gap-2 text-[#ff2a88]">
            <Clock className="h-4 w-4 flex-shrink-0" />
            <span className="text-sm font-bold">Only {product.stock} left in stock</span>
          </div>
        </div>
      </div>
    </section>
  )
}
