import { useState } from "react";
import classes from "./css/CookiesBanner.module.css";

function CookiesBanner() {
    // dummy cookies settings
    const [cookiesAccepted, setCookiesAccepted] = useState(false);

    function acceptCookies() {
        setCookiesAccepted(true);
    }

    function showPrivacyPolicy() {
        //dummy
        window.alert("This page actually does not have any cookies, this is just shown as a demo");
        setCookiesAccepted(true);
    }

    if (cookiesAccepted) {
        return <div></div>;
    }

    return (
        <div className={classes.banner}>
            <p>
                This site uses cookies to assist with navigation, provide secure login, remember
                your preferences, analyze your use of our products and services, collect statistics
                to optimize site functionality and provide content from third parties
            </p>
            <button className={classes.link} onClick={showPrivacyPolicy}>
                Privacy policy
            </button>
            <div className={classes["cookie-settings"]}>
                <button className={classes.accept} onClick={acceptCookies}>
                    Accept
                </button>
                <button className={classes.link}>Cookie Settings</button>
            </div>
        </div>
    );
}

export default CookiesBanner;
