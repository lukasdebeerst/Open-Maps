import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import {useStore} from "../../hooks/useStore";

const createRoutineMachineLayer = ({ position, start, end, color }) => {

  const {RoutingStore} = useStore();

  const instance = L.Routing.control({
    position,
    waypoints: [
      start,
      end
    ],
    show: false,
    lineOptions: {
      styles: [
        {
          color,
        },
      ],
    },
  }).on("routeselected", function(e){
    console.log("Route Selected", e);
    RoutingStore.handleDetailsOfRoute(e);
  

  })
  return instance;
};


const RoutingMachine = createControlComponent(createRoutineMachineLayer);


export default RoutingMachine;