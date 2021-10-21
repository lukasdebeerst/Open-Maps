import {useState} from "react";
import Style from "./textInput.module.scss";
import {observer} from "mobx-react-lite";

const TextInput = observer(({ initValue = "", placeholder, onChange, onFocus}) => {

    const [value, setValue] = useState(initValue);

    const handleValue = e => {
        setValue(e.currentTarget.value);
        onChange(e.currentTarget.value);
    }

    return <input onFocus={onFocus} className={Style.input} type="text" value={value} placeholder={placeholder} onChange={handleValue} />

});

export default TextInput;