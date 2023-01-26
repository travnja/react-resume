import "./css/UI.css"

function ClickableIcon(props){
    return (
        <a href={props.link}>
            <img
                src={props.image}
                alt="Link to Linkedin"
                className="clickable-icon"
            />
        </a>
    );
}

export default ClickableIcon;