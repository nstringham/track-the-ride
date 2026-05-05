import { createClient } from "@supabase/supabase-js";
import type { Database, Tables } from "./supabase-types";

export type BusLocation = Tables<"bus_locations">;

const supabase = createClient<Database>(
  "https://wvycoklsjdarcqtjfkdt.supabase.co",
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
);

export async function getBusLocations() {
  const cutoff = new Date(Date.now() - 60 * 60 * 1000).toISOString();

  const { data, error } = await supabase
    .from("bus_locations")
    .select("*")
    .filter("timestamp", "gt", cutoff)
    .order("timestamp");
  if (error) {
    throw error;
  }
  return data;
}
