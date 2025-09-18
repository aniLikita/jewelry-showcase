import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Function to get optimized image URL from Supabase Storage
export const getOptimizedImageUrl = (path: string, width: number, height: number) => {
  if (!path) return '';
  
  // If it's already a full URL, return as is
  if (path.startsWith('http')) {
    return path;
  }
  
  // For Supabase Storage paths, construct the URL
  const bucket = 'products'; // Replace with your bucket name
  const filePath = path.startsWith('/') ? path.substring(1) : path;
  
  // This URL format works with Supabase Storage's image transformation
  return `${supabaseUrl}/storage/v1/object/public/${bucket}/${filePath}?width=${width}&height=${height}&quality=80`;
};

// Function to upload an image to Supabase Storage
export const uploadImage = async (file: File, path: string) => {
  const fileExt = file.name.split('.').pop();
  const fileName = `${Math.random().toString(36).substring(2, 15)}.${fileExt}`;
  const filePath = `${path}/${fileName}`;
  
  const { data, error } = await supabase.storage
    .from('products') // Replace with your bucket name
    .upload(filePath, file);
    
  if (error) {
    throw error;
  }
  
  // Return the public URL
  const { data: { publicUrl } } = supabase.storage
    .from('products')
    .getPublicUrl(data.path);
    
  return publicUrl;
};
