import classes from "./css/ProjectCard.module.css";

function ProjectCard(props) {
    return (
        <div className={classes.card}>
            <div class={classes.dot} />
            {props.children}
            <div class={classes["dot-right"]} />
        </div>
    );
}

export default ProjectCard;
