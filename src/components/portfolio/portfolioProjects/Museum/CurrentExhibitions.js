import Exhibition from "./Exhibition";

import classes from "./css/CurrentExhibitions.module.css";

import CoverPicture from "../../../../images/cover.JPG";

import Exhibition_FreeBaltic from "../../../../images/projects/museum/Exhibition-FreeBaltic.JPG";
import Exhibition_Graffiti from "../../../../images/projects/museum/Exhibition-Graffiti.JPG";
import { useEffect, useState } from "react";

const TOTAL_SLIDES_COUNT = 2;

function CurrentExhibitions() {
    const [currentPanel, setCurrentPanel] = useState(1);

    function sendSliderToLeft(){
        setCurrentPanel((currentNumber) => (currentNumber-1))
    }

    useEffect(() => {
        setTimeout(() => {
            setCurrentPanel(2);
        }, 2000);
    }, []);

    return (
        <div className={classes["exhibition-slider"]}>
            <div className={classes.headline}>CURRENT EXHIBITIONS</div>
            <Exhibition
                image={Exhibition_FreeBaltic}
                show={currentPanel === 1}
                alt="IMAGE ALT"
                title="Freedom for Baltics"
                from="October 2022"
                to=" May 2023"
                description="An interactive exhibition of Baltic countires in period from 1948 to 1990s"
            />
            <Exhibition
                image={Exhibition_Graffiti}
                show={currentPanel === 2}
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
