import { useEffect, useState } from "react";

import ProfilePicture from "../../images/profile-pic.jpg";

import info from "./../../info/info-context";
import classes from "./css/Profile.module.css";

const WINK_TIMER = 1000;
const WINK_DURATION = 400;

function Profile() {
    const [hoveringOverProfile, setHoveringOverProfile] = useState(false);
    const [wink, setWink] = useState(false);

    function onEnterHandler() {
        setHoveringOverProfile(true);
    }

    function onExitHandler() {
        setHoveringOverProfile(false);
    }

    useEffect(() => {
        if (!hoveringOverProfile) {
            setWink(false);
            return;
        }
        const timer = setTimeout(() => {
            setWink(true);
        }, WINK_TIMER);
        const timer2 = setTimeout(() => {
            setWink(false);
        }, WINK_TIMER + WINK_DURATION);

        return () => {
            clearTimeout(timer);
            clearTimeout(timer2);
        };
    }, [hoveringOverProfile]);

    return (
        <>
            <div className={classes.profile}>
                {wink && <p className={classes.wink}>*WINK</p>}

                <img
                    src={ProfilePicture}
                    alt="Me - a young handsome man"
                    onMouseEnter={onEnterHandler}
                    onMouseLeave={onExitHandler}
                    className={classes["profile-img"]}
                />
            </div>
            <p className={classes.name}>
                <b>{info.name}</b> <br />
                INTERACTIVE RESUME
            </p>
        </>
    );
}

export default Profile;
