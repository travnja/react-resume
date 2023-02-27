import ClickableIcon from "../UI/ClickableIcon";

import classes from "./css/Contacts.module.css";

import LinkedinIcon from "../../images/social-networks/Linkedin.png";
import GithubIcon from "../../images/social-networks/Github.png";
import ProfilePicture from "../../images/profile-pic.jpg";


const PHONE = "+420 605 551 618";
const EMAIL = "honza.travnicek85@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/travnicek-jan/";
const GITHUB_URL = "https://github.com/travnja";

function SocialNetworks() {
    return (
        <div className={classes.networks}>
            <ClickableIcon link={LINKEDIN_URL} image={LinkedinIcon} />
            <ClickableIcon link={GITHUB_URL} image={GithubIcon} />
        </div>
    );
}

function Contacts() {
    return (
        <>
            <div className={classes.contacts}>
                <div className={classes["image-wrapper"]}>
                    <img src={ProfilePicture} alt="Honza, a nice portrait from Stockholm." />
                </div>
                <p>
                    Jan Trávníček <br />
                    <br />
                    <b>Phone:</b>
                    {PHONE}
                    <br />
                    <b>E-mail:</b> {EMAIL}
                </p>
                <SocialNetworks />
            </div>
        </>
    );
}

export default Contacts;
export { SocialNetworks };