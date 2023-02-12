
import classes from "./css/Mentions.module.css";

function Mentions(){
    return (
        <div className={classes.mentions}>
            <a href="https://www.flaticon.com/free-icons/school" title="school icons">
                School icons created by Smashicons - Flaticon
            </a>
            <a href="https://www.flaticon.com/free-icons/home-button" title="home-button icons">
                Home-button icons created by Freepik - Flaticon
            </a>
        </div>
    );
}

export default Mentions;