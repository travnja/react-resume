
import classes from "./css/HeartImage.module.css";
import HeartIcon from "../../images/icons/heart.png";

function Heart(){
    
    return (
        <div className={classes.heart}>
            <img src={HeartIcon} alt="heart" />
        </div>
    );
}

export default Heart;