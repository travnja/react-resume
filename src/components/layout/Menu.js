
import classes from "./css/Menu.module.css";

function MenuItem(props){
    return <li className={classes["menu-item"]} onClick={props.onClick}>{props.children}</li>
}


function Menu(){

    function scrollTo(identifier) {
        const element = document.getElementById(identifier);
        if(element){
            element.scrollIntoView({behaviour:"smooth"});
        }
    }

    return (
        <ul className={classes.menu}>
            <MenuItem onClick={scrollTo.bind("home")}>...</MenuItem>
            <li>About me</li>
            <li>Education</li>
        </ul>
    );
}

export default Menu;