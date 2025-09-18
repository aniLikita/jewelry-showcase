import { Instagram, MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-gray-900">Nasisi Jewelry</h3>
            <p className="text-gray-600 text-sm mt-1">Exquisite handcrafted jewelry</p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            <a
              href="https://instagram.com/nasisi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-600 hover:text-pink-600 transition-colors"
            >
              <Instagram size={20} />
              <span className="text-sm">Instagram</span>
            </a>
            <a
              href="https://wa.me/08121242423"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-600 hover:text-green-600 transition-colors"
            >
              <MessageCircle size={20} />
              <span className="text-sm">WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-6 border-t border-gray-200 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Nasisi Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
