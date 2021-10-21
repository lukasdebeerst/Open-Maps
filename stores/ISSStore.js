import Iss from "../models/ISS";
import { makeObservable, observable, action, configure} from "mobx";


class ISSStore {


    constructor(rootStore){
        this.rootStore = rootStore;
        this.iss = {};
        this.startTracking();

        makeObservable(this, {
            //observable
            iss: observable,

            //action
            updateISS: action,
            handleISSActive: action,
            startTracking: action,
        })
    }

    startTracking = () => setInterval(this.updateISS, 500);

    updateISS = () => {
        try{
            fetch(`http://api.open-notify.org/iss-now.json`)
            .then(res => res.json())
            .then(res => {
                this.iss = new Iss({
                    active: true,
                    lon: res.iss_position.longitude,
                    lat: res.iss_position.latitude
                })
            })
        } catch {
            console.error(err);
        }
        
    }

    handleISSActive = () => {
        if(this.iss.active){
            this.iss.active = false;
        } else {
            this.iss.active = true;
        }
    }

}

export default ISSStore;