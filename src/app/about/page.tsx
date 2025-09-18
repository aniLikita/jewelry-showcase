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
                From a young age, I fell in love with jewelry. I never felt complete without 
                wearing a piece, it became part of who I am. This passion inspired me to start 
                this brand, not only out of love for jewelry but also to continue my late mother’s legacy. 
                She sold elegant, unique pieces, and I’m proud to build on that foundation.
              </p>
              <p className="text-gray-600 mb-4">
                Our journey began with the belief that jewelry should make you feel bold and confident, 
                not just as an accessory, but as a reflection of your personality, your moments, and the beauty 
                that surrounds you. Today, we continue to carry out this vision by offering pieces that are not 
                only beautiful but meaningful, ensuring each customer finds something truly special.
              </p>
              <p className="text-gray-600">
                Today, Nasisi Jewelry represents the perfect blend of texture, artistry, and quality design. 
                Every piece in our collection tells a story.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-8 text-center">
              <div className="text-6xl mb-4">💎</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Handcrafted Excellence
              </h3>
              <p className="text-gray-600">
                Each piece is uniquely designed and carefully handcrafted by skilled artisans using 
                refined techniques, ensuring artistry and elegance in every detail
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
                  Each design is a work of art, thoughtfully created with care.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-gray-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💖</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Passion</h3>
                <p className="text-gray-600">
                  Our love for jewelry inspires us to craft pieces that bring joy, beauty, and
                  confidence to your life.
                </p>
              </div>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              To create and offer exceptional jewelry that 
              celebrates life’s most precious moments. 
              We combine fine craftsmanship with contemporary design 
              to deliver pieces that are timeless and uniquely personal.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
