import {useStore} from "../../hooks/useStore";
import {observer} from "mobx-react-lite";
import Route  from "../../assets/UI/location.svg";
import Image from "next/Image";

import FunctionalityButton from "../../components/buttons/functionalityButton/functionalityButton";


const LocationDetails = observer(({Style}) => {

    const {RoutingStore, MapLocationStore} = useStore();
    const location = MapLocationStore.currentLocation;

    return (
        <>
        <div className={Style.header}>
            {location.localName ? (
                <>
                <span className={Style.title}>{location.localName}</span>
                <span className={Style.subtitle}>{location.title}</span>
                </>
            ) : (
                <span className={Style.title}>{location.title}</span>
            )}
            <FunctionalityButton title={"Start Route"} image={Route} onClick={() => RoutingStore.initNewRoute(location)}/>
        </div>
        {/* <div className={Style.details}>
            <div className={Style.description}>
            {location.description && (
                <div>
                    <h2>Description</h2>
                    <div dangerouslySetInnerHTML={{__html: location.description}} />
                </div>
            )}
            </div>
        </div> */}
        </>
    )


});

export default LocationDetails