import Education from "./Education";

import classes from "./css/Content.module.css";

function Content(){
    return (
        <section>
            {/* <PersonalDetails /> */}
            <div className={classes.menu}>
                <p>Yes</p>
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