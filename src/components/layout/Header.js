
import classes from "./css/Header.module.css";

import Profile from "./Profile";
import Contacts from "./Contacts";

import CoverImage from "../../images/cover.JPG";

function Header() {
    return (
        <>
            <div className={classes.stripe} id="home" />
            <img src={CoverImage} className={classes.cover} alt="Estonian beach in winter" />
            <div className={classes.profile}>
                <Profile />
                <div className={classes.contact}>
                    <Contacts />
                </div>
            </div>
        </>
    );
}

export default Header;
