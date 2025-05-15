import { createBrowserClient } from "@supabase/ssr";

export const supabase = createBrowserClient(
  "https://your-project-name.supabase.co", // ⬅️ Your real Supabase project URL
  "eyJhbGciOi..." // ⬅️ Your real Supabase anon public key
);
