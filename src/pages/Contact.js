import Contacts from "../components/layout/Contacts";
import { Intro } from "../components/layout/Introduction";
import Mentions from "../components/layout/Mentions";
import Heart from "../components/UI/HeartImage";

function ContactPage(){
    return (
        <>
            <Intro />
            <Contacts />
            <Heart />
            <Mentions />
        </>
    );
}

export default ContactPage;