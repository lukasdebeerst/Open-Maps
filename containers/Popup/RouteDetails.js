import TextInput from "../../components/textInput/textInput";
import PrimaryButton from "../../components/buttons/primaryButton";
import {observer} from "mobx-react-lite";

import {useStore} from "../../hooks/useStore";
import Instructions from "../../components/instructions/instructions";

const RouteDetails = observer(({Style}) => {

    const {RoutingStore} = useStore();
    console.log("starting point", RoutingStore.currentRoute, RoutingStore.currentRoute.active);

    return ( 
        <>
        <div className={Style.header}>
            <h2>Where do you want to go?</h2>
            <div>
                <div>
                    <span className={Style.route__label}>Start Point</span>
                    <TextInput initValue={RoutingStore.currentRoute.startPoint.title} placeholder={"your start point"} />
                </div>
                <div>
                    <span className={Style.route__label}>Destination</span>
                    <TextInput initValue={RoutingStore.currentRoute.destination.title} placeholder={"your destination"} />
                </div>  
            </div>
            {/* <PrimaryButton value={"Start Route"} onClick={handleStartRoute} /> */}
        </div>
        {RoutingStore.currentRoute.instructions && (
            <div className={Style.instructions__container}>
                <p className={Style.instructions__title}>Instructions</p>
                {RoutingStore.currentRoute.instructions.map(instruction => (
                    <Instructions instruction={instruction} />
                ))}
            </div>
        )}
        </>
    )
});

export default RouteDetails;