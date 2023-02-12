import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import classes from "./css/Header.module.css";

import HomeIcon from "../../images/icons/homeIcon.png";
import BurgerIcon from "../UI/BurgerIcon";

import Menu from "./Menu";
import Modal from "../UI/Modal";

function Header() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function useEnglish() {
        setSearchParams({ use: "en" });
    }
    function useCzech() {
        setSearchParams({ use: "cz" });
    }

    function menuToggleHandler() {
        setIsMenuOpen((state) => !state);
    }

    const isEnglish = searchParams.get("use") === "en";

    return (
        <>
            <div className={isMenuOpen ? classes["header-stripe-active"]: classes["header-stripe"]}>
                <header className={classes.header}>
                    <BurgerIcon onClick={menuToggleHandler} isOpen={isMenuOpen} />
                    <Link to="/">
                        <img src={HomeIcon} />
                    </Link>
                    <div className={classes.languages}>
                        <p
                            onClick={isEnglish ? useCzech : null}
                            className={isEnglish ? classes.language : classes["selected-language"]}
                        >
                            CZ
                        </p>
                        <p
                            onClick={isEnglish ? null : useEnglish}
                            className={isEnglish ? classes["selected-language"] : classes.language}
                        >
                            EN
                        </p>
                    </div>
                </header>
            </div>
            {isMenuOpen && <Menu />}
        </>
    );
}

export default Header;
