import React, {useEffect} from 'react';
import dynamic from "next/dynamic";
import {useStore} from "../hooks/useStore";
import TopBar from "../containers/topbar/topbar";
import Style from "../styles/index.module.scss";
import Popup from "../containers/Popup";
import Settings from "../containers/settings/settings";
import {observer} from "mobx-react-lite";

const Home = observer(() => {

  const {MapLocationStore, UiStore, ISSStore} = useStore();
  console.log("4 my Location end", MapLocationStore.currentUserLocation);
  
  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position)  => {
      console.log(" 1 get location", position);
      if(!MapLocationStore.currentUserLocation.lat){
        MapLocationStore.setCurrentUserLocation(position.coords.latitude, position.coords.longitude)
      } else {
        MapLocationStore.currentUserLocation.lat = position.coords.latitude;
        MapLocationStore.currentUserLocation.lon = position.coords.longitude;
      }
      });  
    }
  })
 
  const MapWithNoSSR = dynamic(() => import("../containers/map/Map"), {
    ssr: false
  });

  return(
    <main>
      <div className={Style.container} >
        <TopBar />
        <Popup />
        <MapWithNoSSR />
        {UiStore.settings && (
          <Settings />
        )}
      </div> 
    </main>
  )

})


export default Home;