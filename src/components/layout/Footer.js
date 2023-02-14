import { SocialNetworks } from "../sections/Contacts";
import classes from "./css/Footer.module.css";


function Footer(){
    return <div className={classes.footer}>
        <SocialNetworks />
        <p>Jan Trávníček 2023</p>
    </div>
}

export default Footer;