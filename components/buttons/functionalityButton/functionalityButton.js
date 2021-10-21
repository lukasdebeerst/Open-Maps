import Style from "./functionalityButton.module.scss";

const FunctionalityButton = ({title, image, selected, onClick=null}) => {

    return (
        <div className={Style.functionality__container} onClick={onClick}>
            <img src={image.src} alt={title} />
            <span>{title}</span>
            {/* <input type="checkbox" selected={selected}/> */}
            <span></span>
        </div>
    )
}

export default FunctionalityButton;