import { useState } from "react";
import Modal from "../UI/Modal";
import classes from "./css/Projects.module.css";

import UnitImage from "../../images/projects/unit-main.png";
import RgtImage from "../../images/projects/rgt-class-diagram.png";
import ViktorImage from "../../images/projects/viktor-cistic.png";

const CHAR_LIMIT = 260;

function ProjectDetail(props) {
    function clickShowMore() {
        window.open(props.href);
    }

    console.log(props.href);

    return (
        <>
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            {props.href && (
                <button className={classes["show-more"]} onClick={clickShowMore}>
                    Show project page
                </button>
            )}
            <hr />
            <div className={classes["image-detail"]}>
                <img src={props.image} alt={props.alt} />
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
    if (props.description) {
        if (props.description.length > CHAR_LIMIT)
            limitedDescription = props.description.slice(0, CHAR_LIMIT) + " ...";
        else {
            limitedDescription = props.description;
        }
    }

    return (
        <>
            {showingDetails && (
                <Modal onClickOutside={showLess}>
                    <ProjectDetail
                        name={props.name}
                        description={props.description}
                        image={props.image}
                        alt={props.alt}
                        href={props.href}
                    />
                </Modal>
            )}
            <div className={classes["outer-project"]} onClick={showMore}>
                <div className={classes.dot} />
                <div className={classes.card}>
                    <div className={classes.text}>
                        <h2>{props.name}</h2>
                        <p>{limitedDescription}</p>
                        <p>
                            <b>Click to show more</b>
                        </p>
                    </div>
                    <div className={classes.images}>
                        <img className={classes["front-image"]} src={props.image} alt={props.alt} />
                    </div>
                </div>
                <div className={classes["dot-right"]} />
            </div>
        </>
    );
}

function Projects() {
    const unitDescription =
        "UnIT is a student IT competition organised by BEST Prague. As I was in the organisation" +
        "team on position of PR responsible, I cooperated with Vojtěch Petrásek on creating a new website using React.js. " +
        "Current version can be found on https://unit.bestprague.cz";

    const roadGraphToolDescription =
        "Road Graph Tool is a software I helped developing as part of my internship in Artificial Intelligence Center. " +
        "It is used for preprocessing map data for later use in simulations. I further developed my RGT in my bachelor thesis. " + 
        "My role was to create a new system architecture and automatically generated UI according to the code configuration. " + 
        "More about the project could be found on my GitHub or on university thesis database (button below).";

    const viktorDescription =
        "During my master studies, I have worked on several school projects. With my 3 schoolmates, we were able to " +
        "execute over 15 interviews with elderly people. We discovered problems regarding the window cleaning and created a prototype " +
        "of a robotic cleaner. The prototyping included several rounds of testing and improvements and resulted in a version, that was able to " +
        "communicate with the user. This whole process helped me with understanding the development process and made my communication with " +
        "potential user more confident and proffesional.";
    return (
        <div className={classes.projects}>
            <h1> MY PROJECTS</h1>
            <Project
                name="UnIT competition website"
                description={unitDescription}
                image={UnitImage}
                alt="Preview of the website showing a logo and basic information about UnIT competition"
                href="https://unit.bestprague.cz/"
            />
            <Project
                name="Road Graph Tool"
                description={roadGraphToolDescription}
                image={RgtImage}
                alt=""
                href="https://dspace.cvut.cz/handle/10467/94445"
            />
            <Project
                name="Victor the cleaner"
                description={viktorDescription}
                image={ViktorImage}
                alt=""
                href="https://dspace.cvut.cz/handle/10467/94445"
            />

            <p>And many more to be found on my GitHub</p>
        </div>
    );
}

export default Projects;
