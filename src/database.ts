import { createClient } from "@supabase/supabase-js";
import type { Database, Tables } from "./supabase-types";

export type BusLocation = Tables<"bus_locations">;

const supabase = createClient<Database>(
  "https://wvycoklsjdarcqtjfkdt.supabase.co",
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
);

export async function getBusLocations() {
  const now = Temporal.Now.instant();
  const cutoff = now.add({ hours: -1 });

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
