import { Handler } from "@netlify/functions";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client
const supabase = createClient(
  process.env.SUPABASE_URL || "",
  process.env.SUPABASE_ANON_KEY || ""
);

export const handler: Handler = async (event) => {
  const { data, error } = await supabase.from("users").select("*");

  if (error) {
    return { statusCode: 500, body: JSON.stringify(error) };
  }

  return { statusCode: 200, body: JSON.stringify(data) };
};