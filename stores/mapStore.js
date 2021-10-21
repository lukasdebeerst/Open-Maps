import { makeObservable, observable, action, configure} from "mobx";
import Location from "../models/Location";


class mapUIStore {

    constructor(rootStore){
        this.rootStore = rootStore;
        this.currentZoom = 13;
        this.currentLayout = `https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`;

        makeObservable(this, {
            currentLayout: observable,

            changeLayout: action
        })
      
    }

    changeLayout = url => {
        this.currentLayout = url
        console.log(this.currentLayout); 
    };


}

export default mapUIStore;