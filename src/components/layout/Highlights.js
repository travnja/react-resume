import LinkedinIcon from "../../images/social-networks/Linkedin.png";
import SchoolIcon from "../../images/icons/School.png";
import BESTIcon from "../../images/icons/BEST_logo.png";

import classes from "./css/Highlights.module.css";
import { useState } from "react";
import Modal from "../UI/Modal";

import {
    descriptionBachelor,
    descriptionMaster,
    descriptionWork,
    descriptionBEST,
} from "../../store/descriptions";

function Highlight(props) {
    const [showDetails, setShowDetails] = useState(false);

    function openOverlay() {
        setShowDetails(true);
    }
    function closeOverlay() {
        setShowDetails(false);
    }

    return (
        <div key={props.id}>
            {showDetails && (
                <Modal onClickOutside={closeOverlay}>
                        <img
                            src={props.img}
                            alt={props.alt}
                            className={classes["img-description"]}
                        />
                        <p className={classes["description-name"]}>
                            <b>{props.name.toUpperCase()}</b>
                        </p>
                        <hr />
                        <p>{props.description}</p>
                </Modal>
            )}

            <div className={classes["summary-item"]} onClick={openOverlay}>
                <img src={props.img} alt={props.alt} />
                <p>{props.name}</p>
            </div>
        </div>
    );
}

function Summary() {
    return (
        <div className={classes.summary}>
            <h1>HIGHLIGHTS</h1>
            <hr />
            <Highlight
                img={SchoolIcon}
                alt="Icon of school"
                name="Bachelor studies"
                description={descriptionBachelor}
            />
            <Highlight
                img={SchoolIcon}
                alt="Icon of school"
                name="Master studies"
                description={descriptionMaster}
            />
            <Highlight
                img={LinkedinIcon}
                alt="Icon of school"
                name="Working experience"
                description={descriptionWork}
            />
            <Highlight
                img={BESTIcon}
                alt="Icon of school"
                name="Student club BEST"
                description={descriptionBEST}
            />
            <hr />
        </div>
    );
}

export default Summary;
