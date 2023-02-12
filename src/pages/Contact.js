import { Intro } from "../components/layout/Introduction";
import Mentions from "../components/layout/Mentions";
import Heart from "../components/UI/HeartImage";

function ContactPage(){
    return (
        <>
            <Intro />
            <h1>Contacts</h1>
            <Heart />
            <Mentions />
        </>
    );
}

export default ContactPage;