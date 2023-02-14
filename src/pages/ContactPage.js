import Contacts from "../components/sections/Contacts";
import { Intro } from "../components/sections/Introduction";
import Mentions from "../components/sections/Mentions";
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