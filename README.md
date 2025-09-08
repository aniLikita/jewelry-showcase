# Nasisi Jewelry - Handcrafted Jewelry Showcase

A beautiful, modern jewelry showcase website built with Next.js, Tailwind CSS, and Supabase.

## Features

- 🏠 **Home Page**: Hero section with smooth scrolling to product grid
- 💎 **Product Showcase**: Responsive grid displaying jewelry from Supabase database
- 📖 **About Page**: Brand story and company values
- 📞 **Contact Page**: Contact form with Supabase integration + social media links
- 📱 **Responsive Design**: Mobile-first design that works on all devices
- ⚡ **Modern Stack**: Next.js 15, Tailwind CSS 4, TypeScript, Supabase

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS 4
- **Database**: Supabase
- **Icons**: Lucide React
- **Language**: TypeScript
- **Deployment**: Vercel-ready

## Quick Start

1. **Clone and install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   Create a `.env.local` file with your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

3. **Set up your Supabase database:**
   See [SETUP.md](./SETUP.md) for detailed database setup instructions.

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000)**

## Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── layout.tsx         # Root layout with navbar/footer
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── ContactForm.tsx    # Contact form with Supabase integration
│   ├── Footer.tsx         # Site footer with social links
│   ├── HeroSection.tsx    # Hero section with smooth scroll
│   ├── Navbar.tsx         # Responsive navigation
│   └── ProductCard.tsx    # Product display card
├── lib/
│   └── supabaseClient.ts  # Supabase configuration
└── types/
    └── database.ts        # TypeScript database types
```

## Database Schema

- **products**: Store jewelry items (id, name, description, image_url, category)
- **contact_messages**: Store contact form submissions (id, name, email, message)

## Customization

- Update social media links in `components/Footer.tsx` and `src/app/contact/page.tsx`
- Modify brand colors and styling in `src/app/globals.css`
- Add your jewelry images and update product data in Supabase

## Deployment

Ready to deploy on Vercel:

1. Push to GitHub
2. Connect to Vercel
3. Add environment variables
4. Deploy!

For detailed setup instructions, see [SETUP.md](./SETUP.md).
