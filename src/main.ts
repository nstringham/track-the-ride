import "./style.css";
import { getBusLocations } from "./database";
import { setBusLocations } from "./map";

try {
  const buses = await getBusLocations();
  setBusLocations(buses);
} catch (error) {
  console.error("Failed to load bus locations", error);
}
