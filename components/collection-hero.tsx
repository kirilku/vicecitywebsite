import Image from "next/image"
import { ShoppingBag, ChevronRight } from "lucide-react"

export function CollectionHero() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chrome_qIVmcAYIEt.jpg-P0NDwY7LKVL2tAtP1HQPMnCx3XkIC9.jpeg"
          alt="Vice City Collection"
          fill
          className="object-cover opacity-60"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container">
        <div className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-6">
          <h1 className="hero-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white">
            THE LOADOUT YOU DESERVE.
            <span className="block text-gradient-pink-blue mt-1 sm:mt-2">NO CODES. NO RESPAWNS.</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4 leading-relaxed">
            Browse drops built for outlaws, digital bosses, and Vice City die-hards. Every piece is limited. Every item
            has a story.
          </p>

          <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4">
            <button className="btn-shop-now w-full sm:w-auto justify-center">
              <ShoppingBag className="mr-2 h-4 w-4 sm:h-5 sm:w-5" /> SHOP ALL DROPS
            </button>
            <button className="btn-view-collections w-full sm:w-auto justify-center">
              VIEW COLLECTIONS <ChevronRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Animated Neon Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ff2a88] via-[#00f7f7] to-[#ff2a88] animate-gradient" />
    </section>
  )
}
