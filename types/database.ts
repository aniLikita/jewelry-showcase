export interface Product {
  id: string
  name: string
  description: string
  image_url: string
  category?: string
  created_at: string
}

export interface ContactMessage {
  id: string
  name: string
  email: string
  message: string
  created_at: string
}

export interface Database {
  public: {
    Tables: {
      products: {
        Row: Product
        Insert: Omit<Product, 'id' | 'created_at'>
        Update: Partial<Omit<Product, 'id' | 'created_at'>>
      }
      contact_messages: {
        Row: ContactMessage
        Insert: Omit<ContactMessage, 'id' | 'created_at'>
        Update: Partial<Omit<ContactMessage, 'id' | 'created_at'>>
      }
    }
  }
}
