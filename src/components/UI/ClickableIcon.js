import classes from "./css/ClickableIcon.module.css";

function ClickableIcon({link, image, alt}){
    function openUrl(){
        window.open(link);
    }
    return (
        // <div  className={classes.link}>
        <img src={image} alt={alt} onClick={openUrl} className={classes["icon"]} />
        // </div>
    );
}

export default ClickableIcon;