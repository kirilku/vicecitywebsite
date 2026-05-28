"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ShoppingBag, ChevronRight } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 z-0" 
        style={{ transform: `translateY(${scrollY * 0.15}px)` }}
      >
        <Image
          src="/hero-banner.png"
          alt="Vice City Night Scene"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end pb-8 sm:pb-12 md:pb-16 min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh]">
        <div className="container">
          <div className="max-w-3xl space-y-4 sm:space-y-6">
            {/* Badge */}
            <div className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 bg-[#ff2a88] text-white text-xs sm:text-sm font-bold rounded-full animate-pulse">
              GTA 6 INSPIRED COLLECTION
            </div>

            {/* Headline */}
            <div className="space-y-1 sm:space-y-2">
              <h1 className="hero-text text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-white">
                THE CITY&apos;S YOURS —
              </h1>
              <div className="hero-text text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-gradient-pink-blue">
                GEAR UP LIKE A BOSS
              </div>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed">
              Exclusive merch inspired by Vice City. Limited drops, premium quality, and street cred guaranteed.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
              <Link 
                href="/collection" 
                className="btn-shop-now w-full sm:w-auto justify-center"
              >
                <ShoppingBag className="mr-2 h-4 w-4 sm:h-5 sm:w-5" /> SHOP NOW
              </Link>
              <Link 
                href="/collection" 
                className="btn-view-collections w-full sm:w-auto justify-center"
              >
                VIEW COLLECTIONS <ChevronRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Neon Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ff2a88] via-[#00f7f7] to-[#ff2a88] animate-gradient" />
    </section>
  )
}
