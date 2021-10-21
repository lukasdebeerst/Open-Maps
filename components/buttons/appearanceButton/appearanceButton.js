import Style from "./appearanceButton.module.scss";
import {useStore} from "../../../hooks/useStore";


const AppearanceButton = ({data}) => {

    const {mapUIStore} = useStore();

    const handleLayout = () => {
        if(mapUIStore.currentLayout !== data.url){
            mapUIStore.changeLayout(data.url);
        }
    }


    return (
        <div onClick={handleLayout} className={Style.button__container} style={{ backgroundImage: `url(${data.image.src})` }}>
            <span>{data.title}</span>
        </div>
    )
}

export default AppearanceButton;