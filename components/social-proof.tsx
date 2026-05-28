"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Star, MessageSquare, TrendingUp, Package } from "lucide-react"

const reviews = [
  {
    id: 1,
    name: "ViceKing93",
    rating: 5,
    text: "The Vice City Jacket is exactly what I needed for my streaming setup. Quality is insane!",
  },
  {
    id: 2,
    name: "LuciaFan2025",
    rating: 5,
    text: "Got the Neon Shades and they're perfect. Already getting comments on my socials about them.",
  },
  {
    id: 3,
    name: "GTAObsessed",
    rating: 4,
    text: "The Digital Heist Pack is worth every penny. Can't wait for the next drop!",
  },
  {
    id: 4,
    name: "MiamiViceGamer",
    rating: 5,
    text: "Best merch I've ever bought. The attention to detail matches the game perfectly.",
  },
  {
    id: 5,
    name: "HeistMaster",
    rating: 5,
    text: "Fast shipping and the quality exceeded my expectations. Will definitely buy more.",
  },
]

export function SocialProof() {
  const [activeReviews, setActiveReviews] = useState(reviews.slice(0, 3))

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveReviews((prevReviews) => {
        const firstReview = reviews.find((r) => r.id === prevReviews[0].id)
        const currentIds = prevReviews.map((r) => r.id)
        const availableReviews = reviews.filter((r) => !currentIds.includes(r.id))

        if (availableReviews.length > 0) {
          const newReviews = [...prevReviews.slice(1), availableReviews[0]]
          return newReviews
        }

        if (firstReview) {
          return [...prevReviews.slice(1), firstReview]
        }

        return prevReviews
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="w-full py-8 sm:py-12 border-t border-[#ff2a88]/20"
    >
      <div className="text-center mb-6 sm:mb-8">
        <h3 className="text-xl sm:text-2xl md:text-3xl gta-font">WHAT THE CREW SAYS</h3>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
        {activeReviews.map((review, index) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card className="bg-gray-900 border-gray-800 h-full">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-3 w-3 sm:h-4 sm:w-4 ${
                        i < review.rating ? "text-[#ffd700] fill-[#ffd700]" : "text-gray-400"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-gray-300 mb-4 line-clamp-3">&quot;{review.text}&quot;</p>
                <div className="flex items-center gap-2">
                  <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-[#ff2a88]/20 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="h-3 w-3 sm:h-4 sm:w-4 text-[#ff2a88]" />
                  </div>
                  <span className="font-bold text-sm sm:text-base text-white">{review.name}</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
        <div className="flex flex-col items-center text-center p-4">
          <TrendingUp className="h-8 w-8 sm:h-10 sm:w-10 text-[#00f7f7] mb-2 sm:mb-3" />
          <h4 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2">2.3M+ TikTok Views</h4>
          <p className="text-sm text-gray-400">Our Drop Kits are going viral across social media</p>
        </div>

        <div className="flex flex-col items-center text-center p-4">
          <Package className="h-8 w-8 sm:h-10 sm:w-10 text-[#00f7f7] mb-2 sm:mb-3" />
          <h4 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2">Shipped to 18 Countries</h4>
          <p className="text-sm text-gray-400">In the Last 30 Days</p>
        </div>

        <div className="flex flex-col items-center text-center p-4">
          <Star className="h-8 w-8 sm:h-10 sm:w-10 text-[#00f7f7] mb-2 sm:mb-3" />
          <h4 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2">4.9 Average Rating</h4>
          <p className="text-sm text-gray-400">From over 1,200+ Vice Insiders</p>
        </div>
      </div>
    </motion.div>
  )
}
