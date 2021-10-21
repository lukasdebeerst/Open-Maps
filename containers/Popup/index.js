import LocationDetails from "./locationDetails";
import RouteDetails from "./RouteDetails";

import {useStore} from "../../hooks/useStore";
import {observer} from "mobx-react-lite";
import Style from "./popup.module.scss";



const Popup = observer(() => {

    const {RoutingStore, MapLocationStore} = useStore();
    // console.log("route", RoutingStore.currentRoute.destination);

    return (
        <>
        <div className={Style.container}>
            <div className={Style.content}>
            {RoutingStore.currentRoute ? (
                <RouteDetails  Style={Style}/>
            ) : (
            MapLocationStore.currentLocation.lat && (
                <LocationDetails Style={Style} />
            ))}
            </div>
        </div>

       
        </>
    )
});

export default Popup;