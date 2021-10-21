import Style from "./menuItem.module.scss";

const menuItem = ({title, img, onClick}) => {

    return(
        <div onClick={onClick}>
            <img src={img} alt={title} />
            <span>{title}</span>
        </div>
    )
}

export default menuItem;