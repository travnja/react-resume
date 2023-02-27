import classes from "./css/Divider.module.css";

function ThreeDots() {
    return (
        <div className={classes.group}>
            <div className={classes.dot} />
            <div className={classes.dot} />
            <div className={classes.dot} />
        </div>
    );
}

export default ThreeDots;
