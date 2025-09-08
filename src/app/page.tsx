import { supabase } from '@/lib/supabaseClient'
import { Product } from '@/types/database'
import MasonryGrid from '@/src/components/MasonryGrid'
import HeroSection from '@/components/HeroSection'

async function getProducts(): Promise<Product[]> {
  try {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error fetching products:', error)
      return []
    }

    return data || []
  } catch (error) {
    console.error('Error fetching products:', error)
    return []
  }
}

export default async function Home() {
  const products = await getProducts()

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />

      {/* Products Section */}
      <section id="products" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Simple header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4">
              Our Collection
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our carefully curated selection of handcrafted jewelry pieces
            </p>
          </div>

          {products.length > 0 ? (
            <MasonryGrid products={products} />
          ) : (
            <div className="text-center py-20">
              <div className="max-w-md mx-auto">
                <div className="w-24 h-24 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">💎</span>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">No jewelry yet</h3>
                <p className="text-gray-500">
                  Beautiful pieces will appear here soon. Check back later!
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
