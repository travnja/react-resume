
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
            <a href="https://www.flaticon.com/free-icons/heart" title="heart icons">
                Heart icons created by Freepik - Flaticon
            </a>
            <a href="https://www.flaticon.com/free-icons/uml" title="uml icons">
                Uml icons created by Freepik - Flaticon
            </a>
            <a href="https://www.flaticon.com/free-icons/ux" title="ux icons">
                Ux icons created by Vectoricons - Flaticon
            </a>
        </div>
    );
}

export default Mentions;