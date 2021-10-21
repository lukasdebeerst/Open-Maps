import { makeObservable, observable, action} from "mobx";
import Route from "../models/Route";


class RoutingStore {

    constructor(rootStore){
        this.rootStore = rootStore;
        this.routes = [];
        this.currentRoute = undefined;
    
        makeObservable(this, {
            currentRoute: observable,
            initNewRoute: action,
            handleDetailsOfRoute: action,
        })

    }

    initNewRoute = (location) => {
        this.currentRoute = new Route({
            destination: location,
            startPoint: this.rootStore.MapLocationStore.currentUserLocation,
            active: true
        })

        console.log(11111);
    }

    handleDetailsOfRoute = (data) => {
        const destination = this.currentRoute.destination;
        const startPoint = this.currentRoute.startPoint;

        this.currentRoute = new Route({
            startPoint: startPoint,
            destination: destination,
            time: data.route.summary.totalTime,
            distance: data.route.summary.totalDistance,
            instructions: data.route.instructions
        })
        
        // this.currentRoute.time = data.route.summary.totalTime;
        // this.currentRoute.distance = data.route.summary.totalDistance;
        // this.currentRoute.instructions = data.route.instructions;
        // this.currentRoute.active = "hallo";

        console.log("Current Route ", this.currentRoute);
        console.log(22222);

    }

    startRoute = () => this.currentRoute.started = true;



}

export default RoutingStore;