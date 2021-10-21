import Style from "./instructions.module.scss";
import clock from "../../assets/UI/clock.svg";
import car from "../../assets/UI/car.svg";

const Instructions = ({instruction}) => {


    const getDistance = () => {
        let dist = parseInt(instruction.distance);
        if(dist > 1000){
            dist = dist /1000;
            return(
                <span>{dist.toFixed()}km</span>)
        } else {
            return(<span>{dist}m</span>)
        }
    }

    const getTime = () => {
        let time = parseInt(instruction.time);
        if(time > 60){
            time = time / 60;
            return(<span>{time}h</span>)
        } else {
            return(<span>{time}h</span>)
        }
    }

    return (
        <div className={Style.container}>
            <span className={Style.title}>{instruction.text}</span>
            <div className={Style.details}>
                <div>
                    <img src={car.src} alt={"distance"} />
                    {getDistance()}
                </div>
                <div>
                    <img src={clock.src} alt={"time"} />
                    <span>{instruction.time} min</span>
                </div>
            </div>
        </div>
    )

}

export default Instructions;