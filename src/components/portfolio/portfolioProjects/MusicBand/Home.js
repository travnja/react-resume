import classes from "./css/Home.module.css";

import BandCover from "../../../../images/projects/your-band/your-band-cover2.JPG";
import TwoHalves from "./Halves";
import Header from "./Header";
import AboutUs from "./AboutUs";

function Home() {
    return (
        <div className={classes.page}>
            <Header />
            <TwoHalves
                left={
                    <h1>
                        MUSIC <br />
                        BAND
                    </h1>
                }
                right={<img src={BandCover} alt="Your Band on stage" />}
            />
            <AboutUs />
        </div>
    );
}

export default Home;
