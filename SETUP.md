# Nasisi Jewelry Website Setup Guide

## Prerequisites

- Node.js 18+ installed
- A Supabase account and project

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Getting Supabase Credentials

1. Go to [supabase.com](https://supabase.com) and create an account
2. Create a new project
3. Go to Project Settings > API
4. Copy the Project URL and anon/public key
5. Add them to your `.env.local` file

## Database Setup

Run the following SQL commands in your Supabase SQL editor:

### Products Table
```sql
CREATE TABLE products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  image_url TEXT NOT NULL,
  category TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Allow public read access" ON products
FOR SELECT USING (true);
```

### Contact Messages Table
```sql
CREATE TABLE contact_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Allow public insert access
CREATE POLICY "Allow public insert access" ON contact_messages
FOR INSERT WITH CHECK (true);
```

## Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Adding Sample Products

You can add sample products through the Supabase dashboard or by running this SQL:

```sql
INSERT INTO products (name, description, image_url, category) VALUES
('Diamond Solitaire Ring', 'Classic diamond solitaire ring with 1 carat center stone', 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500', 'Rings'),
('Pearl Necklace', 'Elegant freshwater pearl necklace with sterling silver clasp', 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500', 'Necklaces'),
('Gold Hoop Earrings', 'Classic 14k gold hoop earrings, perfect for everyday wear', 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500', 'Earrings');
```

## Social Media Links

Update the social media links in:
- `components/Footer.tsx`
- `src/app/contact/page.tsx`

Replace the placeholder URLs with your actual Instagram and WhatsApp links.

## Deployment

This project is ready to deploy on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add your environment variables in Vercel's dashboard
4. Deploy!

## Troubleshooting

- Make sure your Supabase URL and API key are correct
- Ensure your database tables are created with the correct permissions
- Check that Row Level Security policies are properly configured
