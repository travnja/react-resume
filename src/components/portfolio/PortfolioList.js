import {Link} from "react-router-dom";

import classes from "./css/PortfolioList.module.css";

import CoverPicture from "../../images/cover.JPG";

function ProjectPreview({ title, picture, description, link, alt }) {
    return (
        <Link to={link}>
            <div className={classes.preview}>
                <img src={picture} alt={alt} className={classes.picture} />
                <div className={classes.description}>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
            </div>
        </Link>
    );
}

function PortfolioList(){
    return (
        <div className={classes.list}>
            <ProjectPreview
                title="Music Band website"
                picture={CoverPicture}
                description="Webpage for Your band including all the concerts, and tickets."
                link="/bandpage"
            />
            <ProjectPreview
                title="Blabla 2"
                picture={CoverPicture}
                description="Lorem Ipsum"
                link="blabla2"
            />
        </div>
    );
}

export default PortfolioList;

