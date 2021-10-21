import { makeObservable, observable, action, configure} from "mobx";


class UiStore {

    constructor(rootStore){
        this.rootStore = rootStore;
        this.settings = false;

        makeObservable(this, {
            settings: observable,

            triggerSettings: action
        })
    }

    triggerSettings = (bool) => this.settings = bool;

}

export default UiStore;