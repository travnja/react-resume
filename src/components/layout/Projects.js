import { useState } from "react";

import Modal from "../UI/Modal";

import classes from "./css/Projects.module.css";

import CoverImage from "../../images/cover.JPG";

function ProjectDetail(props) {
    return (
        <>
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <div className={classes["image-detail"]}>
                <img src={props.image} alt={props.alt}/>
            </div>
        </>
    );
}

function Project(props) {
    const [showingDetails, setShowingDetails] = useState(false);

    console.log(props.images);

    function showMore() {
        setShowingDetails(true);
    }

    function showLess() {
        setShowingDetails(false);
    }

    let limitedDescription = "";
    if(props.description) limitedDescription = props.description.slice(0, 245) + "...";

    return (
        <>
            {showingDetails && (
                <Modal onClickOutside={showLess}>
                    <ProjectDetail name={props.name} description={props.description} image={props.image} alt={props.alt}/>
                </Modal>
            )}
            <div className={classes["outer-project"]} onClick={showMore}>
                <div className={classes.dot} />
                <div className={classes.card}>
                    <div className={classes.text}>
                        <h2>{props.name}</h2>
                        <p>{limitedDescription}</p>
                        <button onClick={showMore}>Show more</button>
                    </div>
                    <div className={classes.images}>
                        <img className={classes["front-image"]} src={props.image} alt={props.alt}/>
                    </div>
                </div>
                <div className={classes["dot-right"]} />
            </div>
        </>
    );
}

function Projects() {
    return (
        <div className={classes.projects}>
            <h1> MY PROJECTS</h1>
            <Project name="Project name" description="lmsal" image={CoverImage} alt="Decribe image"/>
            {/* <Project />
            <Project /> */}
        </div>
    );
}

export default Projects;
