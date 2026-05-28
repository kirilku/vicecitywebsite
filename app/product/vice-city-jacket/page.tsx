import { ProductDetail } from "@/components/product-detail"
import { ProductStory } from "@/components/product-story"
import { ProductContents } from "@/components/product-contents"
import { ProductReviews } from "@/components/product-reviews"
import { ProductUpsells } from "@/components/product-upsells"
import { ProductGuarantee } from "@/components/product-guarantee"
import { ProductFooter } from "@/components/product-footer"
import { ExitIntent } from "@/components/exit-intent"
import { StickyAddToCart } from "@/components/sticky-add-to-cart"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Vice City Jacket | The Ultimate Miami-Inspired Outerwear",
  description:
    "Step into Vice City with this premium bomber jacket. Neon-accented, retro-futuristic design inspired by 80s Miami. Limited edition drop - only 500 made.",
}

export default function ViceCityJacketPage() {
  const product = {
    id: "vice-city-jacket",
    name: "The Vice City Jacket",
    tagline: "Sunset strip style. Neon-lit nights. Own the streets.",
    price: 149.0,
    installmentPrice: 37.25,
    stock: 23,
    shipping: "Ships within 72 hours - Express delivery available",
    description:
      "This isn't just a jacket. It's a statement. Inspired by the neon-soaked streets of 80s Miami, the Vice City Jacket blends retro aesthetics with modern streetwear construction. Premium materials, bold accents, and that unmistakable Vice attitude - this is what you wear when you're ready to take over.",
    features: [
      {
        icon: "🌴",
        title: "Miami Vice DNA",
        description:
          "Every stitch channels the sun-drenched, danger-laced energy of Vice City's golden era",
      },
      {
        icon: "✨",
        title: "Reflective Neon Accents",
        description:
          "Hidden reflective piping glows under streetlights - you'll turn heads after dark",
      },
      {
        icon: "🔢",
        title: "Limited Edition Serial Number",
        description:
          "Each jacket is individually numbered 1-500. Once they're gone, they're gone forever",
      },
    ],
    contents: [
      {
        name: "Vice City Bomber Jacket",
        description: "Premium heavyweight satin with quilted lining",
        image: "/products/vice-jacket-item.jpg",
      },
      {
        name: "Numbered Authentication Card",
        description: "Metal card with your unique serial number",
        image: "/products/vice-auth-card.jpg",
      },
      {
        name: "Collector's Dust Bag",
        description: "Custom Vice City branded storage bag",
        image: "/products/vice-dust-bag.jpg",
      },
      {
        name: "Hidden Pocket Surprise",
        description: "A secret item tucked inside - we won't spoil it",
        image: "/products/vice-mystery-item.jpg",
      },
    ],
    deluxeUpgrade: {
      price: 39,
      items: ["Matching Vice City snapback", "Exclusive enamel pin set"],
    },
    images: [
      "/products/vice-city-jacket-main.jpg",
      "/products/vice-city-jacket-2.jpg",
      "/products/vice-city-jacket-3.jpg",
      "/products/vice-city-jacket-4.jpg",
    ],
    rating: 4.9,
    reviewCount: 89,
    badges: ["Limited to 500", "Selling Fast", "Only 23 Left"],
    variants: [
      {
        name: "Size",
        options: ["S", "M", "L", "XL", "XXL"],
      },
      {
        name: "Color",
        options: ["Midnight Black", "Ocean Blue", "Sunset Pink"],
      },
      {
        name: "Add Matching Cap",
        options: ["None", "Vice Snapback (+$35)", "Vice Dad Hat (+$29)"],
      },
    ],
    relatedProducts: [
      {
        id: "vice-snapback",
        name: "Vice City Snapback",
        price: 45.0,
        bundlePrice: 35.0,
        image: "/products/vice-snapback.jpg",
        savingsPercent: 22,
      },
      {
        id: "neon-tee",
        name: "Neon Nights Tee",
        price: 39.0,
        bundlePrice: 29.0,
        image: "/products/neon-tee.jpg",
        savingsPercent: 26,
      },
      {
        id: "vice-chain",
        name: "Vice Gold Chain",
        price: 59.0,
        bundlePrice: 45.0,
        image: "/products/vice-chain.jpg",
        savingsPercent: 24,
      },
    ],
    // Custom fields for this product
    storyHeadline: "This jacket doesn't follow trends. It sets them.",
    storyParagraphs: [
      "When you slip on the Vice City Jacket, you're not just wearing clothes. You're channeling an era. An attitude. A lifestyle that says you play by your own rules and you look damn good doing it.",
      "We spent 18 months perfecting every detail. The weight of the fabric. The exact shade of neon that catches the light just right. The hidden interior pocket that holds your essentials close. This jacket was designed by obsessives, for obsessives.",
      "The streets of Vice City were never about fitting in. They were about standing out. About making a statement every time you walked into a room. This jacket is that statement, stitched and sealed.",
    ],
    reviews: [
      {
        id: 1,
        username: "MiamiNights84",
        rating: 5,
        date: "1 week ago",
        title: "Worth every single penny",
        text: "The quality is insane. I've bought designer jackets that don't feel this premium. The reflective accents are subtle until you hit the streetlights - then it's game over. Everyone asks where I got it.",
        hasImage: true,
        verified: true,
      },
      {
        id: 2,
        username: "RetroWaveKing",
        rating: 5,
        date: "2 weeks ago",
        title: "This IS the jacket",
        text: "Ordered the Midnight Black in XL, fits perfect. The hidden pocket had a little Vice City keychain inside - such a nice touch. Already planning to cop the blue one.",
        hasImage: true,
        verified: true,
      },
      {
        id: 3,
        username: "StreetStyle305",
        rating: 5,
        date: "3 weeks ago",
        title: "Compliments non-stop",
        text: "Wore this to a party and got stopped like 15 times asking about it. The sunset pink is bold but it works. Size chart was accurate too.",
        hasImage: false,
        verified: true,
      },
    ],
  }

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      {/* Urgency Bar */}
      <div className="w-full py-2 bg-gradient-to-r from-[#ff2a88] via-[#00f7f7] to-[#ff2a88] text-white text-center">
        <p className="text-sm md:text-base font-bold text-black">
          Limited Edition Drop: Only 500 jackets will ever be made. {product.stock} remaining.
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
