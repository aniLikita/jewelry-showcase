'use client'

import { ChevronDown } from 'lucide-react'

export default function HeroSection() {
  const scrollToProducts = () => {
    const element = document.getElementById('products')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background image with overlay and blur */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: 'url(/background.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '100%',
            filter: 'blur(1px)'
          }}
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8 text-white">
        {/* Main content */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-6 tracking-tight">
            Discover
            <span className="block font-serif italic text-rose-100">Beautiful Jewelry</span>
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 mb-12 font-light max-w-2xl mx-auto leading-relaxed">
            Curated collection of handcrafted pieces that tell your story
          </p>

          {/* CTA Button */}
          <button
            onClick={scrollToProducts}
            className="inline-flex items-center px-8 py-4 bg-rose-600 text-white rounded-full hover:bg-rose-700 transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Explore Collection
            <ChevronDown className="ml-2 h-5 w-5" />
          </button>
        </div>

        {/* Floating elements */}
        <div className="absolute top-1/4 left-8 opacity-20 animate-pulse">
          <div className="w-3 h-3 bg-rose-400 rounded-full"></div>
        </div>
        <div className="absolute top-1/3 right-12 opacity-30 animate-pulse delay-1000">
          <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
        </div>
        <div className="absolute bottom-1/3 left-1/4 opacity-25 animate-pulse delay-500">
          <div className="w-4 h-4 bg-rose-300 rounded-full"></div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-6 w-6 text-rose-400" />
      </div>
    </section>
  )
}
