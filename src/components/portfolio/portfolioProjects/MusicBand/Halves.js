import classes from "./css/TwoHalves.module.css";

function TwoHalves({left, right}){
    return (
        <div className={classes.leftright}>
            {right}
            {left}
        </div>
    );
}

export default TwoHalves;