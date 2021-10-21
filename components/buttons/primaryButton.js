const PrimaryButton = ({value, image, onClick}) => {

    return (
        <div onClick={onClick}>
            <img src={image} alt={value} />
        </div>
    )

}

export default PrimaryButton;