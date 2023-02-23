import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import useEscapeKey from "../../hooks/use-escape";

import classes from "./css/Menu.module.css";

function Menu({onCloseMenu}) {

    useEscapeKey(onCloseMenu);

    return createPortal(
        <div className={classes.menu} onClick={onCloseMenu}>
            <div
                className={classes["menu-items"]}
                onClick={(event) => {
                    event.stopPropagation();
                }}
            >
                <h3>NAVIGATION</h3>
                <Link to="/" onClick={onCloseMenu}>
                    HOME
                </Link>
                <Link to="/contact" onClick={onCloseMenu}>
                    CONTACT
                </Link>
                <Link to="/projects" onClick={onCloseMenu}>
                    PORTFOLIO
                </Link>
            </div>
        </div>,
        document.getElementById("overlays")
    );
}

export default Menu;
