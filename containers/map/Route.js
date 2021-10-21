import { MapLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";
import { withLeaflet } from "react-leaflet";

const  Route = ({map}) => {

    const createLeafletElement = () => {
        let leafletElement = L.Routing.control({
          waypoints: [L.latLng(27.67, 85.316), L.latLng(27.68, 85.321)]
        }).addTo(map.leafletElement);
        return leafletElement.getPlan();
    }

}

export default withLeaflet(Route);
