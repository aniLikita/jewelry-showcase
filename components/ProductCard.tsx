import Image from 'next/image'
import { Product } from '@/types/database'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="relative aspect-square">
        <Image
          src={product.image_url}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm line-clamp-3">{product.description}</p>
        {product.category && (
          <span className="inline-block mt-3 px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
            {product.category}
          </span>
        )}
      </div>
    </div>
  )
}
