import "./style.css";
import "leaflet/dist/leaflet.css";
import L, { LatLng } from "leaflet";

const BTC = new LatLng(42.278425133686646, -83.74699558741413);

var map = L.map("map").setView(BTC, 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);
