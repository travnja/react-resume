import { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./css/Header.module.css";

import HomeIcon from "../../images/icons/homeIcon.png";
import BurgerIcon from "../UI/BurgerIcon";

import Menu from "./Menu";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function menuToggleHandler() {
        setIsMenuOpen((state) => !state);
    }

    return (
        <>
            <div
                className={isMenuOpen ? classes["header-stripe-active"] : classes["header-stripe"]}
            >
                <header className={classes.header}>
                    <BurgerIcon onClick={menuToggleHandler} isOpen={isMenuOpen} />
                    <Link to="/">
                        <img src={HomeIcon} alt="Home"/>
                    </Link>
                </header>
            </div>
            {isMenuOpen && <Menu onCloseMenu={menuToggleHandler} />}
        </>
    );
}

export default Header;
