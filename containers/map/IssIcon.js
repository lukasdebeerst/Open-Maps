import L from 'leaflet';
import icon from "../../assets/UI/iss.svg";


const iconISS = L.Icon({
  options: {
    iconUrl: icon,
    iconRetinaUrl: icon,
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(60, 75),
  }
});

export { iconISS };