import {configure} from "mobx";


import mapStore from "./mapStore";
import MapLocationStore from "./mapLocationStore";
import ISSStore from "./ISSStore";
import UiStore from "./UiStore";
import RoutingStore from "./routingStore";

class RootStore {


    constructor(){
        this.MapUIStore = new mapStore(this);
        this.MapLocationStore = new MapLocationStore(this);
        this.ISSStore = new ISSStore(this);
        this.UiStore = new UiStore(this);
        this.RoutingStore = new RoutingStore(this);


        configure({
            enforceActions: "never",
        });

    }
    
}

export default RootStore;