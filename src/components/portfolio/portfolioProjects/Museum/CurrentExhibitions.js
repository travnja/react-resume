import React from "react";
import Exhibition from "./Exhibition";

import classes from "./css/CurrentExhibitions.module.css";

import CoverPicture from "../../../../images/cover.JPG";

import Exhibition_FreeBaltic from "../../../../images/projects/museum/Exhibition-FreeBaltic.JPG";
import Exhibition_Graffiti from "../../../../images/projects/museum/Exhibition-Graffiti.JPG";
import { useEffect, useState } from "react";
import { TransitionGroup } from "react-transition-group";

const TOTAL_SLIDES_COUNT = 2;
const SLIDE_TIMEOUT = 3000;

function CurrentExhibitions() {
    const [currentPanel, setCurrentPanel] = useState(0);

    function sendSliderToLeft() {
        setCurrentPanel(
            (currentNumber) => (currentNumber - 1 + TOTAL_SLIDES_COUNT) % TOTAL_SLIDES_COUNT
        );
    }

    console.log(currentPanel);

    function sendSliderToRight() {
        // console.log("right");
        // console.log((currentPanel + 1) % TOTAL_SLIDES_COUNT);
        setCurrentPanel((currentNumber) => (currentNumber + 1) % TOTAL_SLIDES_COUNT);
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            sendSliderToRight();
        }, SLIDE_TIMEOUT);
        return () => clearTimeout(timeout);
    }, [currentPanel]);

    return (
        <div className={classes["exhibition-slider"]}>
            <div className={classes.navigation}>
                <p className={classes.left} onClick={sendSliderToLeft}>
                    PREVIOUS
                </p>
                <p className={classes.right} onClick={sendSliderToRight}>
                    NEXT
                </p>
            </div>
            <div className={classes.headline}>CURRENT EXHIBITIONS</div>
            <Exhibition
                image={Exhibition_FreeBaltic}
                show={currentPanel === 0}
                alt="IMAGE ALT"
                title="Freedom for Baltics"
                from="October 2022"
                to=" May 2023"
                description="An interactive exhibition of Baltic countires in period from 1948 to 1990s"
            />
            <Exhibition
                image={Exhibition_Graffiti}
                show={currentPanel === 1}
                alt="IMAGE ALT"
                title="City centre graffiti"
                from="January 2023"
                to=" July 2023"
                description="An artistic side of vandalism shown on large-scale panels. Featuring works of Banksy."
            />
        </div>
    );
}

export default CurrentExhibitions;
