import classes from "./css/Exhibition.module.css";

function Exhibition({ title, from, to, description, image, alt, show }) {
    function showMore() {
        window.alert("The content team has not complete this page yet :(");
    }

    return (
        <div
            className={`${classes.exhibition} ${show ? null : classes.hide}`}
            onClick={showMore}
        >
            <img src={image} alt={alt} />
            <div className={classes.description}>
                <h1>{title}</h1>
                <p>{description}</p>
                <br />
                <p className={classes.dates}>
                    {from} - {to}
                </p>
            </div>
        </div>
    );
}

export default Exhibition;
