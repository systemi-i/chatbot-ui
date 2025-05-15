import { createBrowserClient } from "@supabase/ssr";

export const supabase = createBrowserClient(
  "https://YOUR-PROJECT.supabase.co", // <-- your actual Supabase project URL
  "eyJhbGciOi..." // <-- your actual anon public key
);
