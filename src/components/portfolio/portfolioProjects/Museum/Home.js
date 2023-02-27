import classes from "./css/Home.module.css";

import MuseumCover from "../../../../images/projects/museum/MuseumCover.JPG";
import ThreeDots from "./Divider";

import Header from "./Header";
import AboutUs from "./AboutUs";
import Tickets from "./Tickets";
import Contact from "./Contact";
import CurrentExhibitions from "./CurrentExhibitions";



function Home(){
    return (
        <div className={classes.page}>
            <img
                className={classes["cover-image"]}
                src={MuseumCover}
                alt="The museum in black and white"
            />

            <div className={classes.content}>
                <Header />
                <h1>MUSEUM OF MODERN ART</h1>
                <ThreeDots />
                <CurrentExhibitions />

                <Tickets />
                <AboutUs />
                <Contact />

                <p> </p>
            </div>
        </div>
    );
}

export default Home;