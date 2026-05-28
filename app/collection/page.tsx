import { Filter, TrendingUp } from "lucide-react"
import { ProductCard } from "@/components/product-card"
import { CollectionHero } from "@/components/collection-hero"
import { StickyBar } from "@/components/sticky-bar"
import { MidScrollCta } from "@/components/mid-scroll-cta"
import { SocialProof } from "@/components/social-proof"
import { ExitIntent } from "@/components/exit-intent"

export default function CollectionPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white overflow-x-hidden">
      {/* Urgency Bar */}
      <div className="w-full py-2 sm:py-3 bg-[#ff2a88] text-white text-center animate-pulse px-4">
        <p className="text-xs sm:text-sm md:text-base font-bold">
          Orders placed today ship 48h before GTA 6 Launch.
        </p>
      </div>

      {/* Collection Hero */}
      <CollectionHero />

      <main className="flex-1 container py-6 sm:py-8 md:py-12">
        {/* Filter Bar */}
        <div className="flex flex-col gap-4 mb-6 sm:mb-8">
          {/* Mobile: Stack vertically */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-4">
            {/* Filter Buttons */}
            <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0">
              <button className="btn-shop-now text-xs sm:text-sm whitespace-nowrap flex-shrink-0">
                Filter by Drop Type <Filter className="ml-2 h-4 w-4" />
              </button>
              <button className="btn-view-collections text-xs sm:text-sm whitespace-nowrap flex-shrink-0">
                View Top Picks <TrendingUp className="ml-2 h-4 w-4" />
              </button>
            </div>
            
            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-400">Sort by:</span>
              <select className="flex-1 sm:flex-none bg-gray-900 border border-gray-700 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#ff2a88] min-h-[44px]">
                <option value="vice-verified">Vice Verified</option>
                <option value="newest">Newest</option>
                <option value="limited">Limited Quantity</option>
                <option value="fan-faves">Fan Faves</option>
              </select>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          <ProductCard
            name="Vice City Jacket"
            price={120}
            image="/placeholder.svg?height=400&width=400"
            badge="BESTSELLER"
            rating={5}
            microcopy="Used by over 1,200 Vice Insiders"
            stock={24}
          />
          <ProductCard
            name="Neon Shades"
            price={85}
            image="/placeholder.svg?height=400&width=400"
            badge="ONLY 6 LEFT"
            rating={5}
            microcopy="Inspired by Lucia's first heist"
            stock={6}
          />
          <ProductCard
            name="Heist Loadout Briefcase"
            price={79}
            image="/placeholder.svg?height=400&width=400"
            badge="LIMITED DROP"
            rating={4.8}
            microcopy="Built for digital outlaws"
            stock={14}
          />
          <ProductCard
            name="Vice City Hoodie"
            price={95}
            image="/placeholder.svg?height=400&width=400"
            badge="BESTSELLER"
            rating={5}
            microcopy="Used by over 1,200 Vice Insiders"
            stock={32}
          />
          <ProductCard
            name="Digital Heist Pack"
            price={65}
            image="/placeholder.svg?height=400&width=400"
            badge="ONLY 3 LEFT"
            rating={4.5}
            microcopy="Inspired by Lucia's first heist"
            stock={3}
          />
          <ProductCard
            name="Vice Bandana"
            price={35}
            image="/placeholder.svg?height=400&width=400"
            badge="VIP-ONLY"
            rating={5}
            microcopy="Seen in the Setup of @ViceTokerX"
            stock={15}
          />
        </div>

        {/* Mid-Scroll Interruption */}
        <MidScrollCta />

        {/* More Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-12 sm:mt-16 mb-12 sm:mb-16">
          <ProductCard
            name="Vice City Cap"
            price={40}
            image="/placeholder.svg?height=400&width=400"
            badge="BESTSELLER"
            rating={4.5}
            microcopy="Used by over 1,200 Vice Insiders"
            stock={28}
          />
          <ProductCard
            name="Heist Gloves"
            price={55}
            image="/placeholder.svg?height=400&width=400"
            badge="ONLY 8 LEFT"
            rating={5}
            microcopy="Inspired by Lucia's first heist"
            stock={8}
          />
          <ProductCard
            name="Vice City Poster"
            price={25}
            image="/placeholder.svg?height=400&width=400"
            badge="VIP-ONLY"
            rating={4.5}
            microcopy="Seen in the Setup of @ViceTokerX"
            stock={42}
          />
        </div>

        {/* Social Proof Strip */}
        <SocialProof />
      </main>

      {/* Sticky Bar */}
      <StickyBar totalItems={9} />

      {/* Exit Intent */}
      <ExitIntent />
    </div>
  )
}
