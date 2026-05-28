"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Star, MessageSquare, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface ProductReviewsProps {
  product: any
}

export function ProductReviews({ product }: ProductReviewsProps) {
  const [activeTab, setActiveTab] = useState("recent")

  const reviews = [
    {
      id: 1,
      username: "ViceKing93",
      rating: 5,
      date: "2 weeks ago",
      title: "Absolutely incredible quality",
      text: "Felt like I was opening a real GTA drop. Everything from the packaging to the smell of the faux leather screamed quality.",
      hasImage: true,
      verified: true,
    },
    {
      id: 2,
      username: "LuciaFan2025",
      rating: 5,
      date: "1 month ago",
      title: "Worth every penny",
      text: "The attention to detail is insane. The metal card feels premium and the burner phone prop is a conversation starter.",
      hasImage: false,
      verified: true,
    },
    {
      id: 3,
      username: "GTAObsessed",
      rating: 4,
      date: "3 weeks ago",
      title: "Almost perfect",
      text: "Love everything about it except I wish the mug was slightly bigger. Otherwise, amazing product that makes me even more hyped for GTA 6.",
      hasImage: true,
      verified: false,
    },
  ]

  const ReviewCard = ({ review }: { review: typeof reviews[0] }) => (
    <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-3 mb-3">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-[#ff2a88]/20 flex items-center justify-center flex-shrink-0">
            <MessageSquare className="h-4 w-4 sm:h-5 sm:w-5 text-[#ff2a88]" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-bold text-sm sm:text-base">{review.username}</span>
              {review.verified && (
                <span className="text-[10px] sm:text-xs bg-[#00f7f7]/20 text-[#00f7f7] px-2 py-0.5 rounded-full">
                  Vice Verified
                </span>
              )}
            </div>
            <span className="text-xs sm:text-sm text-gray-400">{review.date}</span>
          </div>
        </div>
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-3 w-3 sm:h-4 sm:w-4 ${
                i < review.rating ? "text-[#ffd700] fill-[#ffd700]" : "text-gray-400"
              }`}
            />
          ))}
        </div>
      </div>

      <h3 className="font-bold text-sm sm:text-base mb-2">{review.title}</h3>
      <p className="text-sm sm:text-base text-gray-300 mb-4">{review.text}</p>

      {review.hasImage && (
        <div className="flex gap-2 mt-4">
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-md overflow-hidden border border-gray-700">
            <Image
              src="/placeholder.svg?height=100&width=100"
              alt="Review image"
              fill
              className="object-cover"
              sizes="80px"
            />
          </div>
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-md overflow-hidden border border-gray-700">
            <Image
              src="/placeholder.svg?height=100&width=100"
              alt="Review image"
              fill
              className="object-cover"
              sizes="80px"
            />
          </div>
        </div>
      )}
    </div>
  )

  return (
    <section className="container py-8 sm:py-12 border-t border-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl gta-font">Customer Reviews</h2>
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 sm:h-5 sm:w-5 ${
                    i < Math.floor(product.rating) ? "text-[#ffd700] fill-[#ffd700]" : "text-gray-400"
                  }`}
                />
              ))}
            </div>
            <span className="text-lg sm:text-xl font-bold">{product.rating}</span>
            <span className="text-sm text-gray-400">({product.reviewCount})</span>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="recent" className="mb-6 sm:mb-8">
          <TabsList className="bg-gray-900 border border-gray-800 p-1 rounded-lg w-full sm:w-auto flex">
            <TabsTrigger
              value="recent"
              className="flex-1 sm:flex-none text-xs sm:text-sm data-[state=active]:bg-[#ff2a88] data-[state=active]:text-white min-h-[40px]"
              onClick={() => setActiveTab("recent")}
            >
              Most Recent
            </TabsTrigger>
            <TabsTrigger
              value="photos"
              className="flex-1 sm:flex-none text-xs sm:text-sm data-[state=active]:bg-[#ff2a88] data-[state=active]:text-white min-h-[40px]"
              onClick={() => setActiveTab("photos")}
            >
              With Photos
            </TabsTrigger>
            <TabsTrigger
              value="verified"
              className="flex-1 sm:flex-none text-xs sm:text-sm data-[state=active]:bg-[#ff2a88] data-[state=active]:text-white min-h-[40px]"
              onClick={() => setActiveTab("verified")}
            >
              Vice Verified
            </TabsTrigger>
          </TabsList>

          <TabsContent value="recent" className="mt-4 sm:mt-6 space-y-4 sm:space-y-6">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}

            <Button
              variant="outline"
              className="w-full border-[#00f7f7] text-[#00f7f7] hover:bg-[#00f7f7]/10 min-h-[48px]"
            >
              Load More Reviews <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </TabsContent>

          <TabsContent value="photos" className="mt-4 sm:mt-6">
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 sm:p-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                {reviews
                  .filter((r) => r.hasImage)
                  .map((review) => (
                    <div key={review.id} className="space-y-2 sm:space-y-4">
                      <div className="relative aspect-square rounded-md overflow-hidden border border-gray-700">
                        <Image
                          src="/placeholder.svg?height=300&width=300"
                          alt="Review image"
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 50vw, 33vw"
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <span className="font-bold text-xs sm:text-sm">{review.username}</span>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-2.5 w-2.5 sm:h-3 sm:w-3 ${
                                  i < review.rating ? "text-[#ffd700] fill-[#ffd700]" : "text-gray-400"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-400 line-clamp-2">{review.text}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="verified" className="mt-4 sm:mt-6 space-y-4 sm:space-y-6">
            {reviews
              .filter((r) => r.verified)
              .map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
          </TabsContent>
        </Tabs>
      </motion.div>
    </section>
  )
}
