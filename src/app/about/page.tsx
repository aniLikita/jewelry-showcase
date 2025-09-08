export default function About() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            About Nasisi Jewelry
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Crafting timeless pieces with passion, precision, and artistry
          </p>
        </div>

        {/* Story Section */}
        <div className="prose prose-lg max-w-none">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded with a passion for creating exceptional jewelry, Nasisi represents 
                the perfect blend of traditional craftsmanship and contemporary design. 
                Each piece in our collection tells a story of dedication, artistry, and 
                attention to detail.
              </p>
              <p className="text-gray-600 mb-4">
                Our journey began with a simple belief: that jewelry should be more than 
                just an accessory. It should be a reflection of your personality, a 
                celebration of life's precious moments, and a testament to the beauty 
                that surrounds us.
              </p>
              <p className="text-gray-600">
                Today, we continue to honor this vision by creating pieces that are not 
                only beautiful but also meaningful, ensuring that each customer finds 
                something truly special.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-8 text-center">
              <div className="text-6xl mb-4">💎</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Handcrafted Excellence
              </h3>
              <p className="text-gray-600">
                Every piece is meticulously crafted by skilled artisans using 
                traditional techniques and the finest materials.
              </p>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Our Values
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-gray-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality</h3>
                <p className="text-gray-600">
                  We use only the finest materials and maintain the highest standards 
                  in every piece we create.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-gray-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Artistry</h3>
                <p className="text-gray-600">
                  Each design is a work of art, carefully conceived and expertly 
                  executed by our talented craftspeople.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-gray-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💖</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Passion</h3>
                <p className="text-gray-600">
                  Our love for jewelry making drives us to create pieces that bring 
                  joy and beauty to your life.
                </p>
              </div>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              To create exceptional jewelry that celebrates life's most precious moments, 
              combining traditional craftsmanship with contemporary design to deliver 
              pieces that are both timeless and uniquely personal.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
