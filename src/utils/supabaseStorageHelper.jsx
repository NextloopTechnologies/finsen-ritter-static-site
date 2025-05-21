const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const STORAGE_BUCKET = import.meta.env.VITE_SUPABASE_STORAGE_BUCKET;

if (!SUPABASE_URL || !STORAGE_BUCKET) {
  console.error("Supabase environment variables are missing!");
}

const BASE_STORAGE_URL = `${SUPABASE_URL}/storage/v1/object/public/${STORAGE_BUCKET}`;

export const getImageUrl = (fileName) => {
  if (!fileName) return "";
  return `${BASE_STORAGE_URL}/${fileName}`;
};
