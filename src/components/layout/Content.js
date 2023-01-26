import Education from "./Education";

import classes from "./css/Content.module.css";
import Menu from "./Menu";
import Summary from "./Summary";

function Content(){
    return (
        <section>
            {/* <PersonalDetails /> */}
            <div className={classes.menu}>
                {/* <Menu /> */}
                <Summary />
            </div>

            <div className={classes.text}>
                <Education />
                <Education />
                <Education />
            </div>
        </section>
    );
}

export default Content;