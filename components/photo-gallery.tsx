"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Camera } from "lucide-react"

export function PhotoGallery() {
  const [activeIndex, setActiveIndex] = useState(0)

  const images = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chrome_GjaC9TSiAt.jpg-GGlqZVgiIkQs8gWCXZCVbzfj3L5XGb.jpeg",
      caption: "Night Drive",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/outro-ugWLvYulZ1t9gAyvi0srQ9Uwb0T7pB.webp",
      caption: "Sunset Lounge",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chrome_B0ZvuKPv2o.jpg-0GBJ69AYnoUuNNxqp108XN3NHiTy4V.jpeg",
      caption: "Neon Nights",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chrome_U4uA4P4ihP.jpg-DmzAmoLU5b2IR1Z9U5kSRT2giYuMOX.jpeg",
      caption: "Convenience Store",
    },
  ]

  return (
    <section className="container py-8 sm:py-12 md:py-16 lg:py-24">
      <div className="flex flex-col gap-6 sm:gap-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl gta-font bg-gradient-to-r from-[#ff2a88] to-[#ffd700] text-transparent bg-clip-text text-center">
          VICE CITY PHOTO DUMP
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className={`relative overflow-hidden rounded-lg border-2 ${
                activeIndex === index ? "border-[#ff2a88]" : "border-transparent"
              } cursor-pointer group`}
              whileHover={{ scale: 1.02 }}
              onClick={() => setActiveIndex(index)}
            >
              <div className="relative aspect-[4/5]">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.caption}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Polaroid Effect */}
                <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-white/10 backdrop-blur-sm">
                  <p className="text-white font-bold text-xs sm:text-sm">{image.caption}</p>
                </div>

                {/* Camera Icon */}
                <div className="absolute top-2 right-2 sm:top-3 sm:right-3 h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Camera className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
