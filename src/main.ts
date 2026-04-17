import "./style.css";
import { getBusLocations } from "./database";
import { setBusLocations } from "./map";

const busses = await getBusLocations();

setBusLocations(busses);
