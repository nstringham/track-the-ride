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
  for (const location of locations) {
    L.circleMarker([location.latitude, location.longitude]).addTo(group);
  }
}
