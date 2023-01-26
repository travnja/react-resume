import ClickableIcon from "./ClickableIcon";
import "./css/UI.css";

import LinkedinIcon from "../../images/social-networks/Linkedin.png";

function Contacts() {
    return (
        <>
            <div class="card">
                <ClickableIcon
                    link="https://www.linkedin.com/in/travnicek-jan/"
                    image={LinkedinIcon}
                />
                <ClickableIcon
                    link="https://www.linkedin.com/in/travnicek-jan/"
                    image={LinkedinIcon}
                />
                <ClickableIcon
                    link="https://www.linkedin.com/in/travnicek-jan/"
                    image={LinkedinIcon}
                />
            </div>
            <div class="card">
                <p>Phone: +420 605 551 618</p>
            </div>
            <div class="card">
                <p>Email</p>
            </div>
        </>
    );
}

export default Contacts;
