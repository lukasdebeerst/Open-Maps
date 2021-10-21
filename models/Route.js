class Route {

    constructor({startPoint = null, destination= null, active= false, distance=0, time=0, instructions=[]}){
        this.startPoint = startPoint;
        this.destination = destination;
        this.active = active;
        this.distance = distance;
        this.time =time;
        this.instructions= instructions;
    }

}

export default Route;