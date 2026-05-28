"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: "Outlaw Picks", href: "/collection" },
    { label: "Heist Loadout", href: "/product/heist-loadout-briefcase" },
    { label: "Heist Kits", href: "#" },
    { label: "Limited Drops", href: "#" },
  ]

  return (
    <div className="md:hidden">
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={() => setIsOpen(true)}
        className="min-h-[44px] min-w-[44px]"
        aria-label="Open menu"
      >
        <Menu className="h-6 w-6 text-[#00f7f7]" />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md"
          >
            <div className="flex flex-col h-full safe-area-inset">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-[#ff2a88]/20">
                <Link
                  href="/"
                  className="text-xl sm:text-2xl font-extrabold tracking-tighter bg-gradient-to-r from-[#ff2a88] to-[#00f7f7] text-transparent bg-clip-text"
                  onClick={() => setIsOpen(false)}
                >
                  VICECART
                </Link>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => setIsOpen(false)}
                  className="min-h-[44px] min-w-[44px]"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6 text-[#ff2a88]" />
                </Button>
              </div>

              {/* Navigation Links */}
              <motion.nav
                className="flex flex-col gap-1 p-4 flex-1"
                initial="closed"
                animate="open"
                variants={{
                  open: { transition: { staggerChildren: 0.08 } },
                  closed: {},
                }}
              >
                {navItems.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={{
                      open: { opacity: 1, y: 0 },
                      closed: { opacity: 0, y: 20 },
                    }}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center py-4 px-4 text-lg font-bold border-b border-[#00f7f7]/20 hover:bg-[#ff2a88]/10 rounded-md transition-colors min-h-[56px]"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </motion.nav>

              {/* Footer CTA */}
              <div className="p-4 border-t border-[#ff2a88]/20">
                <Link
                  href="/collection"
                  className="btn-shop-now w-full justify-center"
                  onClick={() => setIsOpen(false)}
                >
                  Shop All Drops
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
