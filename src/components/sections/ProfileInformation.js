import classes from "./css/ProfileInformation.module.css";

import ProfilePicture from "../../images/profile-pic.jpg";

import ReactIcon from "../../images/icons/react.png";
import JavaIcon from "../../images/icons/javaLogo.png";
import PythonIcon from "../../images/icons/pythonLogo.png";
import cIcon from "../../images/icons/cLogo.png";

import FigmaIcon from "../../images/icons/figmaLogo.png";
import UMLIcon from "../../images/icons/umlIcon.png";
import UXIcon from "../../images/icons/uxDesignIcon.png";


function AboutMe() {
    return (
        <p>
            This page was created to show what I can do... <br />
            ... and how do I do it
        </p>
    );
}
function PictureWithDescription() {
    return (
        <div className={classes["profile-picture-wrapper"]}>
            <img
                src={ProfilePicture}
                className={classes["profile-picture"]}
                alt="The handsome guy Honza"
            />
            <p>
                <b>Honza Trávníček</b>
                <br />
                Developer and UX design student
            </p>
        </div>
    );
}

function Skill({ image, alt, title }) {
    return (
        <div className={classes.skill}>
            <img src={image} alt={alt} />
            <p>{title}</p>
        </div>
    );
}
function Technologies() {
    return (
        <div className={classes["technologies-wrapper"]}>
            <h3>TECHNOLOGIES</h3>
            <div className={classes.technologies}>
                <Skill image={ReactIcon} alt="React logo" title="React.js" />
                <Skill image={JavaIcon} alt="Java logo" title="Java" />
                <Skill image={PythonIcon} alt="Python logo" title="Python" />
                <Skill image={cIcon} alt="C logo" title="C Family" />
            </div>
            <h3>OTHER KNOWLEDGE</h3>
            <div className={classes.technologies}>
                <Skill image={UMLIcon} alt="UML diagram" title="Analysis" />
                <Skill image={FigmaIcon} alt="Figma logo" title="Prototyping" />
                <Skill image={UXIcon} alt="UX written on computer" title="UX design" />
            </div>
        </div>
    );
}

function ProfileInformation() {
    return (
        <div className={classes.profile}>
            <AboutMe />
            <div className={classes["profile-layout"]}>
                <PictureWithDescription className={classes["profile-layout"]} />
                <Technologies />
            </div>
        </div>
    );
}

export default ProfileInformation;
