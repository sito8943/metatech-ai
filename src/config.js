const { VITE_SUPABASE_URL, VITE_SUPABASE_KEY } = import.meta.env;

const config = {
  supabase: {
    url: VITE_SUPABASE_URL,
    key: VITE_SUPABASE_KEY,
  },
};
