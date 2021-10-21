import { makeObservable, observable, action, configure} from "mobx";
import Location from "../models/Location";


class MapLocationStore {

    constructor(rootStore){
        this.rootStore = rootStore;
        this.currentLocation = {};

        this.currentUserLocation = {};

        makeObservable(this, {
            //observable
            currentLocation: observable,
            currentUserLocation: observable,

            //action
            setUserLocationAsCurrentLocation: action,
            updateCurrentLocationBySearch: action,
            handleLocationActive: action,
            setCurrentUserLocation: action,
        })
    }

    setUserLocationAsCurrentLocation = () => {
        if(this.currentUserLocation.lat){
            this.currentUserLocation = this.currentLocation;
        }
    }


    updateCurrentLocationBySearch = (query) => {
        this.getDataByQuery(query, data => {
            console.log(data);
            this.currentLocation = this.setLocation(data);
        });

        if(this.rootStore.RoutingStore.currentRoute !== undefined){
            this.rootStore.RoutingStore.currentRoute = undefined;
        }
    }


    getDataByQuery = (query, cb) => {
        try {
            fetch(`https://nominatim.openstreetmap.org/search?q=${query}&format=json`)
            .then(res => res.json())
            .then(res => {
                if(res){
                    if(res[0].lat){
                        cb(res[0])
                    } else {
                        console.log("error: Location not found");
                    }
                }
            });
        } catch {
            console.error(err);
        }
        
    }

    setLocation = (data) => {
        const loc = new Location({
            shortTitle: data.localname,
            lat: data.lat,
            lon: data.lon,
            title: data.display_name,
            osm_id: data.osm_id
        });

        return loc;
    }

    handleLocationActive = () => {
        if(this.currentUserLocation.active){
            this.currentUserLocation.active = false;
        } else {
            this.currentUserLocation.active = true;
        }

    }


    setCurrentUserLocation = (lat, lon) => {
        console.log(' 2 setCurrentUserLocation');
        // this.currentUserLocation.lat = lat;
        // this.currentUserLocation.lon = lon;
        // if(!this.currentUserLocation.active){
        //     this.currentUserLocation.active = true;
        // }

        this.currentUserLocation = new Location({
            active: true,
            title: "Your current location",
            lon: lon,
            lat: lat,
        });


        console.log("3 My location in setCurrentLocatiton", this.currentUserLocation);
    }


}

export default MapLocationStore;