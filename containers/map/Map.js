import { MapContainer, TileLayer, Popup, useMap, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import {useState} from "react";
import {useStore} from "../../hooks/useStore";
import {observer} from "mobx-react-lite";
import Style from "./map.module.scss";
import RoutingControl from './RoutingControl';



const ChangeLayer = ({center, zoom}) => {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

const Map = observer(() => {

  const {MapUIStore, MapLocationStore, RoutingStore, ISSStore} = useStore();
  const location = MapLocationStore.currentLocation;

  const [map, setMap] = useState(null);


  return (
    <div className={Style.map__container}>
      <MapContainer
        center={[50.8503, 4.3517]}
        zoom={2}
        scrollWheelZoom={true}
        zoomControl={false}
        style={{ height: "100%", width: "100%" }}
        whenCreated={map => setMap(map)}
      >
        {RoutingStore.currentRoute && (
          <RoutingControl 
          position={'topleft'} 
          start={[RoutingStore.currentRoute.startPoint.lat, RoutingStore.currentRoute.startPoint.lon]} 
          end={[RoutingStore.currentRoute.destination.lat, RoutingStore.currentRoute.destination.lon]} 
          color={'#757de8'} 
          />
        )}

          {/* <RoutingControl 
            position={'topleft'} 
            start={[16.506, 80.648]} 
            end={[17.384, 78.4866]} 
            color={'#757de8'} 
          /> */}
          
          {/* <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibHVrYXNkZWJlZXJzdCIsImEiOiJja3UyZjM2MXoxY29kMnBwYzN2NDIyZWFxIn0.X-AZNjFlT8JAvLEjAiuaoA`}
          attribution='Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>, Imagery &copy; <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>'
        /> */}
        <TileLayer
          url={MapUIStore.currentLayout}
          // attribution='Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>, Imagery &copy; <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>'
        />
        {location.lat && (
          <ChangeLayer center={[location.lat, location.lon]} zoom={MapUIStore.currentZoom} scrollWheelZoom={true} zoomControl={false}/>
        )}
        {ISSStore.iss.active && (
          <Marker position={[ISSStore.iss.lat, ISSStore.iss.lon]} draggable={true} animate={true}></Marker>
        )}
        {MapLocationStore.currentUserLocation.active && (
          <Marker position={[MapLocationStore.currentUserLocation.lat, MapLocationStore.currentUserLocation.lon]} draggable={true} animate={true}></Marker>
        )}
      </MapContainer>
    </div>
  );
});

export default Map;
