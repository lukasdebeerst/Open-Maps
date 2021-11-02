import Style from "./settings.module.scss";
import {observer} from "mobx-react-lite";
import AppearanceButton from "../../components/buttons/appearanceButton/appearanceButton";
import FunctionalityButton from "../../components/buttons/functionalityButton/functionalityButton"
import {useStore} from "../../hooks/useStore";

import satellite from "../../assets/UI/appearance/appearance_satellite.png"
import map from "../../assets/UI/appearance/appearance_map.png"
import location from "../../assets/UI/location.svg";
import iss from "../../assets/UI/iss.svg";

const Settings = observer(() => {

    const {UiStore, MapLocationStore} = useStore();

    const appearanceData = [{
        title: "Satellite",
        url: "https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibHVrYXNkZWJlZXJzdCIsImEiOiJja3UyZjM2MXoxY29kMnBwYzN2NDIyZWFxIn0.X-AZNjFlT8JAvLEjAiuaoA",
        image: satellite
    }, {
        title: "Map",
        url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        image: map
    }];

    return (
        <>
        <article className={`${Style.settings__container} `} >
            <h2>Settings</h2>
            <section>
                <h3>Map Appearance</h3>
                {appearanceData.map(data => (
                    <AppearanceButton data={data} />
                ))}
            </section>
            <section>
                <h3>Functionality</h3>
                <FunctionalityButton  title={"Show ISS"} image={iss} selected={false} />
                <FunctionalityButton  title={"Show location"} image={location} selected={MapLocationStore.currentUserLocation.active} onClick={MapLocationStore.handleLocationActive}/>

            </section>
        </article>
        </>
    )

});

export default Settings;