"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function MidScrollCta() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="w-full"
    >
      <Card className="overflow-hidden border-2 border-[#ff2a88] bg-gradient-to-r from-black to-[#0a0a0a]">
        <CardContent className="p-4 sm:p-6 md:p-8">
          <div className="flex flex-col gap-4 sm:gap-6 md:flex-row md:items-center md:justify-between">
            <div className="text-center md:text-left">
              <h3 className="text-xl sm:text-2xl md:text-3xl gta-font mb-2">NOT SURE WHAT FITS YOUR MISSION?</h3>
              <p className="text-sm sm:text-base text-gray-300">
                Take the 45-Second Vice Personality Quiz and unlock a secret item + custom loadout recommendation
              </p>
            </div>
            <Button className="bg-[#ffd700] hover:bg-[#ffd700]/80 text-black px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 rounded-md font-bold whitespace-nowrap w-full md:w-auto min-h-[52px] text-sm sm:text-base md:text-lg">
              GET MY VICE PLAN <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
