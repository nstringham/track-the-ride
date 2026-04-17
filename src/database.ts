import { createClient } from "@supabase/supabase-js";
import type { Database, Tables } from "./supabase-types";

export type BusLocation = Tables<"bus_locations">;

const supabase = createClient<Database>(
  "https://wvycoklsjdarcqtjfkdt.supabase.co",
  import.meta.env.VITE_SUPABASE_KEY,
);

export async function getBusLocations() {
  const { data, error } = await supabase.from("bus_locations").select("*");
  if (error) {
    throw error;
  }
  return data;
}
