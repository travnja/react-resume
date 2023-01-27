

import AboutMe from "./AboutMe";
import classes from "./css/Content.module.css";
import Projects from "./Projects";
import Highlights from "./Highlights";

function Content(){
    return (
        <section>
            {/* <PersonalDetails /> */}
            <div className={classes.menu}>
                {/* <Menu /> */}

                <Highlights />
            </div>

            <div className={classes.text}>
                <AboutMe />
                <Projects />
            </div>
        </section>
    );
}

export default Content;