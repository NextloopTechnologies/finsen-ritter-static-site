const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const STORAGE_BUCKET = import.meta.env.VITE_SUPABASE_STORAGE_BUCKET;

export const getImageUrl = (fileName) => {
  if (!SUPABASE_URL || !STORAGE_BUCKET) {
    console.error("Supabase environment variables are missing!");
    return "";
  }
  return `${SUPABASE_URL}/storage/v1/object/public/${STORAGE_BUCKET}/${fileName}`;
};
