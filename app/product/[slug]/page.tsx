import { ProductDetail } from "@/components/product-detail"
import { ProductStory } from "@/components/product-story"
import { ProductContents } from "@/components/product-contents"
import { ProductReviews } from "@/components/product-reviews"
import { ProductUpsells } from "@/components/product-upsells"
import { ProductGuarantee } from "@/components/product-guarantee"
import { ProductFooter } from "@/components/product-footer"
import { ExitIntent } from "@/components/exit-intent"
import { StickyAddToCart } from "@/components/sticky-add-to-cart"

export default function ProductPage({ params }: { params: { slug: string } }) {
  // In a real app, you would fetch product data based on the slug
  // For now, we'll use mock data
  const product = {
    id: "heist-briefcase",
    name: "The Heist Loadout Briefcase",
    tagline: "Built for digital outlaws. Pre-order before the sirens hit.",
    price: 79.0,
    installmentPrice: 19.75,
    stock: 14,
    shipping: "Ships May 16 – arrives before GTA 6 drops",
    description:
      "This isn't merch. It's gear built for Vice. Whether you're rolling into Lucia's world or prepping for online domination, this kit gives you the mindset, the visuals, and the tools to show up like a boss.",
    features: [
      {
        icon: "🔒",
        title: "Locked-case delivery",
        description: "Secure packaging with combination lock, just like in the game",
      },
      {
        icon: "🎧",
        title: "Audio-synced secret bonus",
        description: "Exclusive soundtrack that syncs with your unboxing experience",
      },
      {
        icon: "💼",
        title: 'Story insert inside: "You\'ve been selected for a job..."',
        description: "Immersive storyline that puts you in the heart of Vice City",
      },
    ],
    contents: [
      {
        name: "Vice Card",
        description: "Metal, Numbered 1-500",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        name: "Burner Phone Prop",
        description: "Realistic prop with secret compartment",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        name: "Wasted Mug",
        description: "Heat Reactive - reveals message when hot",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        name: "QR Code to Digital Mix",
        description: "Exclusive Vice City-inspired soundtrack",
        image: "/placeholder.svg?height=100&width=100",
      },
    ],
    deluxeUpgrade: {
      price: 29,
      items: ["Exclusive neon sign", "2 mystery items"],
    },
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    rating: 4.8,
    reviewCount: 156,
    badges: ["Limited Drop", "Trending in Vice Mode", "14 Left in Stock"],
    variants: [
      {
        name: "Style",
        options: ["Standard", "Deluxe", "Collector's Edition"],
      },
      {
        name: "Bundle Size",
        options: ["Solo", "Duo Pack (+$59)", "Squad Pack (+$149)"],
      },
      {
        name: "Add Digital Pack",
        options: ["None", "Basic (+$19)", "Premium (+$39)"],
      },
    ],
    relatedProducts: [
      {
        id: "neon-sign",
        name: "Neon 'WASTED' Sign",
        price: 49.0,
        bundlePrice: 39.2,
        image: "/placeholder.svg?height=200&width=200",
        savingsPercent: 20,
      },
      {
        id: "energy-booster",
        name: "Vice Energy Booster",
        price: 29.0,
        bundlePrice: 23.2,
        image: "/placeholder.svg?height=200&width=200",
        savingsPercent: 20,
      },
      {
        id: "art-pack",
        name: "Vice Girls Art Pack",
        price: 19.0,
        bundlePrice: 15.2,
        image: "/placeholder.svg?height=200&width=200",
        savingsPercent: 20,
        digital: true,
      },
    ],
  }

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      {/* Urgency Bar */}
      <div className="w-full py-2 bg-[#ff2a88] text-white text-center animate-pulse">
        <p className="text-sm md:text-base font-bold">
          🔥 Orders placed today ship 48h before GTA 6 Launch. Limited stock available!
        </p>
      </div>

      <main className="flex-1">
        {/* Product Detail Hero Section */}
        <ProductDetail product={product} />

        {/* Product Story Section */}
        <ProductStory product={product} />

        {/* What's Inside Section */}
        <ProductContents product={product} />

        {/* Reviews Section */}
        <ProductReviews product={product} />

        {/* Upsells Section */}
        <ProductUpsells product={product} />

        {/* Guarantee Section */}
        <ProductGuarantee />

        {/* Footer CTA Section */}
        <ProductFooter product={product} />
      </main>

      {/* Sticky Add to Cart */}
      <StickyAddToCart product={product} />

      {/* Exit Intent */}
      <ExitIntent productSpecific={true} />
    </div>
  )
}
