import { Link } from "react-router-dom";

import classes from "./css/Menu.module.css";

function Menu() {

    const classFunction = ({ isActive }) => isActive ? classes.active : undefined;
    return (
        <div className={classes.menu}>
            <div className={classes["menu-items"]}>
                <h3>NAVIGATION</h3>
                <Link to="/">
                    HOME
                </Link>
                <Link to="/error">
                    ABOUT ME
                </Link>
                <Link to="/#projects" >
                    PROJECTS
                </Link>
            </div>
        </div>
    );
}

export default Menu;
