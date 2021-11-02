import SearchBar from "../Searchbar/Searchbar";
import Logo from "../../assets/UI/logo.svg";
import settings from "../../assets/UI/settings.svg";
import Style from "./topbar.module.scss";
import {useStore} from "../../hooks/useStore";

const TopBar = () => {


    const {UiStore} = useStore();


    const handleSettings = () => {
        console.log("trigger settings");
        if(UiStore.settings){
            UiStore.settings = false;
        } else {
            UiStore.settings = true;
        }

        console.log(UiStore.settings);
    }

    return (
        <div className={Style.container}>
            <div className={`${Style.content__container} ${Style.content}`}>
                <img className={Style.logo} src={Logo.src} alt="OpenMaps" height={50} />
                <SearchBar />
                <img className={Style.menuItem} src={settings.src} alt="Settings" height={25} onClick={handleSettings} />
            </div>
        </div>
    )

}

export default TopBar;