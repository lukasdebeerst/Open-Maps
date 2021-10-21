import TextInput from "../../components/textInput/textInput";
import PrimaryButton from "../../components/buttons/primaryButton";
import {useStore} from "../../hooks/useStore";
import {useState} from "react";
import Style from "./searchbar.module.scss";
import {observer} from "mobx-react-lite";
import go from "../../assets/UI/go.svg";

const SearchBar = observer(() => {

    const {mapUIStore, MapLocationStore} = useStore();
    const [query, setQuery] = useState();
    let initValue = "";
    
    if(MapLocationStore.currentLocation.longTitle){
        initValue = MapLocationStore.currentLocation.longTitle;
    }

    const handleSearch = () => {
        MapLocationStore.updateCurrentLocationBySearch(query);
    }



    return (
        <div className={`${Style.container} ${Style.content__container}`}>
            <TextInput initValue={initValue} placeholder={"Search for location..."} onChange={res =>setQuery(res)} />
            <button onClick={handleSearch} className={Style.search_button} >
                <img src={go.src} value={"Search"} />
            </button>
        </div>
    )


});

export default SearchBar;