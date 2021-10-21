import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import {useEffect, useRef} from "react";
import {useStore} from "../../hooks/useStore";
import {observer} from "mobx-react-lite";
import Style from "./map.module.scss";
import Route from "./Route";


const ChangeLayer = ({center, zoom}) => {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}


const Map = observer(() => {

  const {mapUIStore, mapLocationStore, ISSStore} = useStore();
  const location = mapLocationStore.currentLocation;

  return (
    <div className={Style.map__container}>
      <MapContainer
        center={[50.8503, 4.3517]}
        zoom={2}
        scrollWheelZoom={true}
        zoomControl={false}
        style={{ height: "100%", width: "100%" }}
      >
          <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibHVrYXNkZWJlZXJzdCIsImEiOiJja3UyZjM2MXoxY29kMnBwYzN2NDIyZWFxIn0.X-AZNjFlT8JAvLEjAiuaoA`}
          attribution='Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>, Imagery &copy; <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>'
        />
        {location.lat && (
          <ChangeLayer center={[location.lat, location.lon]} zoom={mapUIStore.currentZoom}/>
        )}
        {ISSStore.ISS && (
          <Marker position={[ISSStore.ISS.lat, ISSStore.ISS.lon]} draggable={true} animate={true}>
          </Marker>
        )}
        <Route map={Map} />
      </MapContainer>
    </div>
  );
});

export default Map;
