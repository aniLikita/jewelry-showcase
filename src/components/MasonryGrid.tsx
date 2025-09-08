'use client'

import { Product } from '@/types/database'
import ProductCard from '@/components/ProductCard'

interface MasonryGridProps {
  products: Product[]
}

export default function MasonryGrid({ products }: MasonryGridProps) {
  // Split products into columns for masonry layout
  const columns = 4
  const getColumnProducts = (columnIndex: number) => {
    return products.filter((_, index) => index % columns === columnIndex)
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
      {Array.from({ length: columns }).map((_, columnIndex) => (
        <div key={columnIndex} className="flex flex-col space-y-4 sm:space-y-6">
          {getColumnProducts(columnIndex).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ))}
    </div>
  )
}
