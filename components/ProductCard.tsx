import Image from 'next/image'
import { Product } from '@/types/database'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  // Generate random height for masonry effect
  const heights = ['h-64', 'h-72', 'h-80', 'h-96', 'h-[22rem]', 'h-[26rem]']
  const randomHeight = heights[Math.floor(Math.random() * heights.length)]

  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      {/* Image container with dynamic height */}
      <div className={`relative ${randomHeight} overflow-hidden`}>
        <Image
          src={product.image_url}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Gentle overlay on hover */}
        <div className="absolute inset-0 bg-black bg-opacity-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Category tag */}
        {product.category && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-medium rounded-full shadow-sm">
              {product.category}
            </span>
          </div>
        )}
      </div>

      {/* Content at bottom */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 text-lg mb-2 line-clamp-1">{product.name}</h3>
        <p className="text-gray-600 text-sm line-clamp-3">{product.description}</p>
      </div>
    </div>
  )
}
