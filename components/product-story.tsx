"use client"

import { motion } from "framer-motion"

interface ProductStoryProps {
  product: any
}

export function ProductStory({ product }: ProductStoryProps) {
  return (
    <section className="container py-12 border-t border-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl gta-font text-center mb-8">You don't just buy this. You earn it.</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {product.features.map((feature: any, index: number) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-[#00f7f7]/30 transition-colors"
            >
              <div className="text-3xl mb-3">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="space-y-4 text-lg text-gray-300">
          <p>{product.description}</p>
          <p>
            When you open this case, you're not just unboxing merch. You're stepping into a world where the rules are
            different. Where your status is earned, not given. This kit was designed by fans who understand what it
            means to live in Vice City's world.
          </p>
          <p>
            Each item tells a story. Each piece has a purpose. From the numbered metal card that grants you access to
            exclusive digital content, to the heat-reactive WASTED mug that reveals hidden messages when you pour your
            morning coffee.
          </p>
        </div>
      </motion.div>
    </section>
  )
}
