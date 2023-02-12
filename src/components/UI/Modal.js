import classes from "./css/Modal.module.css";
import {CSSTransition} from "react-transition-group";

function BackDrop(){
    return <div className={classes.backdrop} />
}

function Modal(props){
    return (
        <CSSTransition classNames="modal" timeout={300}>
            <>
                {props.children}
            </>
        </CSSTransition>
    );
}

export default Modal;