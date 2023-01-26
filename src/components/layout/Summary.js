import LinkedinIcon from "../../images/social-networks/Linkedin.png";
import GithubIcon from "../../images/social-networks/Github.png";

import classes from "./css/Summary.module.css";

function Highlight(props) {
    function onClick() {
        // open overlay
        // props.description
    }

    return (
        <div className={classes["summary-item"]}>
            <img src={props.img} alt={props.alt} />
            <p>{props.text}</p>
        </div>
    );
}

function Summary() {
    return (
        <div className={classes.summary}>
            <Highlight
                img={LinkedinIcon}
                alt="Icon of school"
                text="Bachelor studies"
                description=""
            />
            <Highlight img={GithubIcon} 
                alt="Icon of school" 
                text="Master studies" 
                description="" 
            />
            <Highlight
                img={LinkedinIcon}
                alt="Icon of school"
                text="Working experience"
                description=""
            />
            <Highlight
                img={GithubIcon}
                alt="Icon of school"
                text=" Student club BEST"
                description=""
            />
        </div>
    );
}

export default Summary;
