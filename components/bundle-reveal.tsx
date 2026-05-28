"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, Package, Gift } from "lucide-react"
import Link from "next/link"

export function BundleReveal() {
  const [isSpinning, setIsSpinning] = useState(false)
  const [revealedBundle, setRevealedBundle] = useState<number | null>(null)
  const wheelRef = useRef<HTMLDivElement>(null)

  const bundles = [
    {
      name: "STREET HUSTLER",
      items: ["Vice City Tee", "Neon Shades", "Digital Soundtrack"],
      price: 99,
      color: "#ff2a88",
    },
    {
      name: "KINGPIN",
      items: ["Luxury Jacket", "Gold Chain", "Limited Edition Poster"],
      price: 199,
      color: "#ffd700",
    },
    {
      name: "BEACH PARTY",
      items: ["Hawaiian Shirt", "Beach Towel", "Flip Flops"],
      price: 79,
      color: "#00f7f7",
    },
    {
      name: "NIGHT RIDER",
      items: ["Leather Jacket", "Driving Gloves", "Car Decal Set"],
      price: 149,
      color: "#9945FF",
    },
  ]

  const spinWheel = () => {
    if (isSpinning) return

    setIsSpinning(true)
    setRevealedBundle(null)

    const randomBundle = Math.floor(Math.random() * bundles.length)
    const rotations = 3 + Math.floor(Math.random() * 3)
    const finalRotation = rotations * 360 + randomBundle * (360 / bundles.length)

    if (wheelRef.current) {
      wheelRef.current.style.transition = "transform 4s cubic-bezier(0.17, 0.67, 0.83, 0.67)"
      wheelRef.current.style.transform = `rotate(${finalRotation}deg)`
    }

    setTimeout(() => {
      setIsSpinning(false)
      setRevealedBundle(randomBundle)
    }, 4000)
  }

  return (
    <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 items-center">
      {/* Roulette Wheel */}
      <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[400px] aspect-square mx-auto lg:mx-0">
        <div className="absolute inset-0 rounded-full border-4 sm:border-6 md:border-8 border-[#ffd700] overflow-hidden">
          <div ref={wheelRef} className="w-full h-full" style={{ transformOrigin: "center center" }}>
            {bundles.map((bundle, index) => {
              const rotation = index * (360 / bundles.length)
              return (
                <div
                  key={index}
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    transform: `rotate(${rotation}deg)`,
                    clipPath: `polygon(50% 50%, 50% 0%, ${50 + 50 * Math.cos(((360 / bundles.length) * Math.PI) / 180)}% ${50 + 50 * Math.sin(((360 / bundles.length) * Math.PI) / 180)}%, 50% 50%)`,
                    backgroundColor: bundle.color,
                  }}
                >
                  <div
                    className="absolute top-[20%] left-1/2 -translate-x-1/2 rotate-180 text-white font-bold text-xs sm:text-sm md:text-base lg:text-lg"
                    style={{ transform: `translateX(-50%) rotate(${-rotation - 90}deg)` }}
                  >
                    {bundle.name}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Center Spinner */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full bg-[#0a0a0a] border-2 sm:border-4 border-[#ffd700] z-10 flex items-center justify-center">
          <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-[#ffd700]" />
        </div>

        {/* Indicator */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 -mt-1 sm:-mt-2 z-20">
          <div className="w-0 h-0 border-l-[10px] sm:border-l-[12px] border-r-[10px] sm:border-r-[12px] border-b-[14px] sm:border-b-[16px] border-l-transparent border-r-transparent border-b-[#ff2a88]" />
        </div>
      </div>

      {/* Bundle Info */}
      <div className="flex-1 flex flex-col gap-4 sm:gap-6 w-full">
        {revealedBundle !== null ? (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Card className="overflow-hidden border-2" style={{ borderColor: bundles[revealedBundle].color }}>
              <CardContent className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                <div className="flex items-center gap-2 sm:gap-3">
                  <Gift className="h-5 w-5 sm:h-6 sm:w-6" style={{ color: bundles[revealedBundle].color }} />
                  <h3 className="text-xl sm:text-2xl gta-font">{bundles[revealedBundle].name} BUNDLE</h3>
                </div>

                <ul className="space-y-2">
                  {bundles[revealedBundle].items.map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm sm:text-base">
                      <Package className="h-4 w-4 text-[#00f7f7] flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-4 border-t border-gray-800">
                  <div className="text-xl sm:text-2xl font-bold" style={{ color: bundles[revealedBundle].color }}>
                    ${bundles[revealedBundle].price}
                  </div>
                  <Link
                    href="/collection"
                    className="bg-[#ffd700] hover:bg-[#ffd700]/80 text-black font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-md w-full sm:w-auto text-center min-h-[44px] flex items-center justify-center"
                  >
                    CLAIM BUNDLE
                  </Link>
                </div>
              </CardContent>
            </Card>

            <div className="mt-4 flex justify-center">
              <Button
                variant="outline"
                className="border-[#ff2a88] text-[#ff2a88] hover:bg-[#ff2a88]/10 min-h-[44px]"
                onClick={spinWheel}
              >
                SPIN AGAIN
              </Button>
            </div>
          </motion.div>
        ) : (
          <div className="flex flex-col items-center gap-4 sm:gap-6 text-center px-4">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl gta-font">
              SPIN THE WHEEL TO REVEAL YOUR EXCLUSIVE BUNDLE
            </h3>
            <p className="text-sm sm:text-base text-gray-400 max-w-md">
              Try your luck and discover one of our premium Vice City-inspired bundles at special prices.
            </p>
            <Button
              className="bg-[#ffd700] hover:bg-[#ffd700]/80 text-black px-6 sm:px-8 py-4 sm:py-6 rounded-md font-bold w-full sm:w-auto min-h-[52px] text-sm sm:text-base md:text-lg"
              onClick={spinWheel}
              disabled={isSpinning}
            >
              <Sparkles className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              {isSpinning ? "SPINNING..." : "SPIN THE WHEEL"}
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
