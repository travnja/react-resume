import {Link} from "react-router-dom";

import classes from "./css/PortfolioList.module.css";

import CoverPicture from "../../images/cover.JPG";
import YourBandPicture from "../../images/projects/preview-your-band.JPG";
import MuseumPicture from "../../images/projects/preview-museum.JPG";

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
        <div className={classes.projects}>
            <p>List of projects I made for school or just for fun</p>
            <div className={classes.list}>
                <ProjectPreview
                    title="Music Band"
                    picture={YourBandPicture}
                    description="Webpage for Your band."
                    link="/bandpage"
                />
                <ProjectPreview
                    title="Museum"
                    picture={MuseumPicture}
                    description="Main page for a museum of modern art."
                    link="/museumpage"
                />
                <ProjectPreview
                    title="Other to be added..."
                    picture={CoverPicture}
                    description="Lorem Ipsum"
                    link="/tobeadded"
                />
            </div>
        </div>
    );
}

export default PortfolioList;

