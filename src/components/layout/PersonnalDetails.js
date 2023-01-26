import ClickableIcon from "../UI/ClickableIcon";

import classes from "./css/PersonalDetails.module.css";
import info from "../../info/info-context";

import LinkedinIcon from "../../images/social-networks/Linkedin.png";
import GithubIcon from "../../images/social-networks/Github.png";

function PersonalDetails() {
    return (
        <>
            <div className={classes.list}>
                <p>
                    <b>Phone:</b> {info.phone} <br />
                    <b>E-mail:</b> {info.email}
                </p>
                <ClickableIcon link={info.linkedinUrl} image={LinkedinIcon} />
                <ClickableIcon link={info.githubUrl} image={GithubIcon} />
            </div>
        </>
    );
}

export default PersonalDetails;
