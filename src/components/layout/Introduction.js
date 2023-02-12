import classes from "./css/Introduction.module.css";
import CoverPicture from "../../images/cover.JPG";

function HeaderImage() {
    return (
        <div className={classes["image-wrapper"]}>
            <img src={CoverPicture} alt="A cover showing how proffesional I am" />
        </div>
    );
}
function Intro() {
    return (
        <div className={classes.intro}>
            <p className={classes.description}>STUDENT | UX DESIGNER | DEVELOPER | TESTER</p>
            <div className={classes.separator} />
            <p className={classes.name}>HONZA TRÁVNÍČEK</p>
        </div>
    );
}

function Introduction() {
    return (
        <>
            <div className={classes.profile}>
                <HeaderImage />
                <p className={classes.headline}>INTERACTIVE RESUME</p>
                <Intro />
            </div>
        </>
    );
}

export default Introduction;

export {Intro, HeaderImage};
