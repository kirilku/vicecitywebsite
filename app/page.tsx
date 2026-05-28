import Image from "next/image"
import Link from "next/link"
import { ShoppingCart, Sparkles, Zap, Clock, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CountdownTimer } from "@/components/countdown-timer"
import { ProductCard } from "@/components/product-card"
import { HeroSection } from "@/components/hero-section"
import { PhotoGallery } from "@/components/photo-gallery"
import { BundleReveal } from "@/components/bundle-reveal"
import { CashCounter } from "@/components/cash-counter"
import { MobileNav } from "@/components/mobile-nav"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-[#ff2a88]/20 backdrop-blur-lg bg-black/80">
        <div className="container flex h-14 sm:h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <span className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-gradient-pink-teal">
              VICECART
            </span>
          </Link>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-6">
            <Link href="/collection" className="text-sm lg:text-base font-medium hover:text-[#ff2a88] transition-colors">
              Outlaw Picks
            </Link>
            <Link href="/product/heist-loadout-briefcase" className="text-sm lg:text-base font-medium hover:text-[#ff2a88] transition-colors">
              Heist Loadout
            </Link>
            <Link href="#" className="text-sm lg:text-base font-medium hover:text-[#ff2a88] transition-colors">
              Heist Kits
            </Link>
            <Link href="#" className="text-sm lg:text-base font-medium hover:text-[#ff2a88] transition-colors">
              Limited Drops
            </Link>
          </nav>
          
          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            <Button variant="ghost" size="icon" className="relative min-h-[44px] min-w-[44px]">
              <ShoppingCart className="h-5 w-5 sm:h-6 sm:w-6 text-[#00f7f7]" />
              <span className="absolute -top-1 -right-1 flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center rounded-full bg-[#ff2a88] text-[10px] sm:text-xs font-bold">
                3
              </span>
            </Button>
            <div className="hidden sm:block">
              <CashCounter amount={1500} />
            </div>
            <MobileNav />
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />

        {/* Countdown Timer */}
        <section className="w-full py-3 sm:py-4 bg-gradient-to-r from-[#0a0a0a] via-[#ff2a88]/20 to-[#0a0a0a] border-y border-[#00f7f7]/30">
          <div className="container">
            <div className="flex flex-col items-center gap-3 sm:gap-4 md:flex-row md:justify-between">
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold tracking-tight text-center md:text-left">
                UNTIL GTA 6 DROPS:
              </h2>
              <CountdownTimer targetDate="2025-10-01T00:00:00" />
              <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold tracking-tight text-center md:text-right">
                STAY LACED UNTIL THEN
              </span>
            </div>
          </div>
        </section>

        {/* Featured Product */}
        <section className="container py-8 sm:py-12">
          <div className="flex flex-col gap-4 sm:gap-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl gta-font bg-gradient-to-r from-[#ffd700] to-[#ff2a88] text-transparent bg-clip-text">
                FEATURED DROP
              </h2>
              <Link
                href="/product/heist-loadout-briefcase"
                className="bg-[#ff2a88] hover:bg-[#ff2a88]/80 text-white px-4 py-2 rounded text-sm sm:text-base min-h-[44px] flex items-center justify-center w-full sm:w-auto"
              >
                VIEW DETAILS
              </Link>
            </div>
            
            <div className="bg-gray-900 border border-[#00f7f7]/30 rounded-lg p-4 sm:p-6 flex flex-col md:flex-row gap-6 md:gap-8">
              {/* Product Image */}
              <div className="relative aspect-square w-full md:w-2/5 lg:w-1/3 rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Heist Loadout Briefcase"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className="absolute top-2 right-2 sm:top-3 sm:right-3 px-2 py-1 sm:px-3 bg-[#ff2a88] text-white text-xs sm:text-sm font-bold rounded-full">
                  LIMITED DROP
                </div>
              </div>
              
              {/* Product Info */}
              <div className="flex-1 space-y-3 sm:space-y-4">
                <h3 className="text-xl sm:text-2xl md:text-3xl gta-font">The Heist Loadout Briefcase</h3>
                <p className="text-sm sm:text-base text-gray-300">Built for digital outlaws. Pre-order before the sirens hit.</p>
                
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xl sm:text-2xl font-bold text-white">$79.00</span>
                  <span className="text-xs sm:text-sm text-gray-400">Or 4x $19.75 with ShopPay</span>
                </div>
                
                <p className="text-sm sm:text-base text-[#00f7f7]">Ships May 16 – arrives before GTA 6 drops</p>
                
                <div className="flex items-center gap-2 text-[#ff2a88]">
                  <Clock className="h-4 w-4 flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-bold">Only 14 left in stock</span>
                </div>
                
                <Link
                  href="/product/heist-loadout-briefcase"
                  className="inline-flex items-center justify-center w-full sm:w-auto bg-[#ff2a88] hover:bg-[#ff2a88]/90 text-white font-bold py-3 px-6 rounded-md gap-2 tracking-wider shadow-[0_0_15px_rgba(255,42,136,0.3)] hover:shadow-[0_0_20px_rgba(255,42,136,0.5)] transition-all duration-300 mt-2 min-h-[48px] text-sm sm:text-base"
                >
                  <ShoppingBag className="h-5 w-5" />
                  UNLOCK THIS LOADOUT
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="container py-8 sm:py-12 md:py-16 lg:py-24">
          <div className="flex flex-col gap-4 sm:gap-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl gta-font bg-gradient-to-r from-[#ffd700] to-[#ff2a88] text-transparent bg-clip-text">
                OUTLAW PICKS
              </h2>
              <Button className="bg-[#ff2a88] hover:bg-[#ff2a88]/80 text-white min-h-[44px] w-full sm:w-auto">
                VIEW ALL
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <ProductCard
                name="Vice City Jacket"
                price={120}
                image="/placeholder.svg?height=400&width=400"
                badge="HOT ITEM"
              />
              <ProductCard
                name="Neon Shades"
                price={85}
                image="/placeholder.svg?height=400&width=400"
                badge="LIMITED"
              />
              <ProductCard
                name="Palm Beach Tank"
                price={45}
                image="/placeholder.svg?height=400&width=400"
                badge="TRENDING"
              />
            </div>
          </div>
        </section>

        {/* CTA Strip */}
        <section className="w-full py-8 sm:py-12 bg-gradient-to-r from-[#0a0a0a] via-[#ff2a88]/20 to-[#0a0a0a] border-y border-[#00f7f7]/30">
          <div className="container">
            <div className="flex flex-col items-center text-center gap-4 sm:gap-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl gta-font">YOUR HEIST KIT STARTS HERE</h2>
              <p className="text-base sm:text-lg md:text-xl text-[#00f7f7] max-w-xl">
                Limited drops. Exclusive gear. Be ready when it counts.
              </p>
              <Link
                href="/collection"
                className="bg-[#ffd700] hover:bg-[#ffd700]/80 text-black px-6 sm:px-8 py-4 sm:py-5 rounded-md font-bold flex items-center justify-center gap-2 w-full sm:w-auto min-h-[52px] text-sm sm:text-base md:text-lg"
              >
                <Sparkles className="h-5 w-5" /> CLAIM YOUR KIT
              </Link>
            </div>
          </div>
        </section>

        {/* Vice Girls Gallery */}
        <PhotoGallery />

        {/* Bundle Reveal Section */}
        <section className="container py-8 sm:py-12 md:py-16 lg:py-24">
          <div className="flex flex-col gap-6 sm:gap-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl gta-font bg-gradient-to-r from-[#00f7f7] to-[#ffd700] text-transparent bg-clip-text text-center">
              SPIN TO WIN - EXCLUSIVE BUNDLES
            </h2>
            <BundleReveal />
          </div>
        </section>

        {/* Quote Section */}
        <section className="relative w-full py-12 sm:py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chrome_GjaC9TSiAt.jpg-GGlqZVgiIkQs8gWCXZCVbzfj3L5XGb.jpeg"
              alt="Vice City Night Scene"
              fill
              className="object-cover opacity-40"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
          </div>
          <div className="container relative z-10">
            <blockquote className="hero-text text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-center max-w-5xl mx-auto px-4 neon-glow-pink leading-tight">
              &quot;THE ONLY THING THAT MATTERS IS WHO YOU KNOW AND WHAT YOU GOT.&quot;
            </blockquote>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-8 sm:py-10 md:py-12 border-t border-[#ff2a88]/20">
        <div className="container grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="text-xl sm:text-2xl font-extrabold tracking-tighter bg-gradient-to-r from-[#ff2a88] to-[#00f7f7] text-transparent bg-clip-text"
            >
              VICECART
            </Link>
            <p className="text-sm sm:text-base text-gray-400">The ultimate GTA 6-inspired gear for true fans.</p>
          </div>
          
          {/* Links */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <h3 className="text-base sm:text-lg font-bold text-[#00f7f7]">Shop</h3>
              <Link href="#" className="text-sm text-gray-400 hover:text-white py-1">New Arrivals</Link>
              <Link href="#" className="text-sm text-gray-400 hover:text-white py-1">Best Sellers</Link>
              <Link href="#" className="text-sm text-gray-400 hover:text-white py-1">Limited Editions</Link>
              <Link href="#" className="text-sm text-gray-400 hover:text-white py-1">Sale</Link>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-base sm:text-lg font-bold text-[#00f7f7]">Info</h3>
              <Link href="#" className="text-sm text-gray-400 hover:text-white py-1">About</Link>
              <Link href="#" className="text-sm text-gray-400 hover:text-white py-1">Contact</Link>
              <Link href="#" className="text-sm text-gray-400 hover:text-white py-1">Shipping</Link>
              <Link href="#" className="text-sm text-gray-400 hover:text-white py-1">Returns</Link>
            </div>
          </div>
          
          {/* Newsletter */}
          <div className="flex flex-col gap-4 sm:col-span-2 md:col-span-1">
            <h3 className="text-base sm:text-lg font-bold text-[#00f7f7]">Newsletter</h3>
            <p className="text-sm text-gray-400">Subscribe for exclusive drops and early access.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 sm:px-4 py-2 bg-gray-900 border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff2a88] text-sm min-h-[44px]"
              />
              <Button className="bg-[#ff2a88] hover:bg-[#ff2a88]/80 min-h-[44px] min-w-[44px]">
                <Zap className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="container mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-xs sm:text-sm text-gray-400">
            © 2025 ViceCart. This is a fan project. Not affiliated with Rockstar Games.
          </p>
        </div>
      </footer>
    </div>
  )
}
