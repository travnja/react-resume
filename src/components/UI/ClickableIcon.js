import classes from "./css/ClickableIcon.module.css";

function ClickableIcon({link, image, alt}){
    return (
        <a href={link} className={classes.link}>
            <img src={image} alt={alt} className={classes["icon"]} />
        </a>
    );
}

export default ClickableIcon;