import "leaflet/dist/leaflet.css";
import L, { LatLng } from "leaflet";
import type { BusLocation } from "./database";

const BTC = new LatLng(42.278425133686646, -83.74699558741413);

var map = L.map("map").setView(BTC, 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

const group = L.layerGroup().addTo(map);

export function setBusLocations(locations: BusLocation[]) {
  group.clearLayers();

  for (const location of locations) {
    const marker = L.circleMarker([location.latitude, location.longitude]).addTo(group);

    const timestamp = Temporal.Instant.from(location.timestamp);
    const age = Temporal.Now.instant().since(timestamp);
    marker.bindPopup(`Bus #${location.bus_id}<br>${timeFormatter.format(timestamp)}`);

    const hue = parseInt(location.bus_id) % 360;
    const chroma = 0.15 * (1 - age.total("minutes") / 60);
    const color = `oklch(0.6 ${chroma} ${hue})`;

    marker.setStyle({
      radius: 12,
      fillColor: color,
      color: color,
      weight: 1,
      opacity: 1,
      fillOpacity: 0.5,
    });
  }
}

const timeFormatter = new Intl.DateTimeFormat("en-US", { timeStyle: "short" });
