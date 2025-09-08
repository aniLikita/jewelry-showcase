'use client'

import { ChevronDown } from 'lucide-react'

export default function HeroSection() {
  const scrollToProducts = () => {
    const element = document.getElementById('products')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          Exquisite Handcrafted
          <span className="block text-gray-700">Jewelry</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Discover our collection of beautiful, handcrafted jewelry pieces. 
          Each piece is carefully designed and crafted with attention to detail.
        </p>
        <button
          onClick={scrollToProducts}
          className="inline-flex items-center px-8 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors font-medium"
        >
          See Collection
          <ChevronDown className="ml-2 h-5 w-5" />
        </button>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-6 w-6 text-gray-400" />
      </div>
    </section>
  )
}
