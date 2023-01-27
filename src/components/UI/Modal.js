// import { useCallback, useEffect } from "react";
import ReactDOM from "react-dom";
import useEscapeKey from "../hooks/use-escape";

import classes from "./css/Modal.module.css";

const portalElement = document.getElementById("overlays");

function Backdrop(props) {
    return <div className={classes.backdrop} onClick={props.onClick} />;
}

function ModalOverlay(props) {
    return (
        <div className={classes.modal}>
            <div className={classes.content}> {props.children}</div>
        </div>
    );
}

function Modal(props) {
    useEscapeKey(props.onClickOutside);

    return (
        <div>
            <div>
                {ReactDOM.createPortal(<Backdrop onClick={props.onClickOutside} />, portalElement)}
                {ReactDOM.createPortal(
                    <ModalOverlay>
                        <div className={classes.description}>{props.children}</div>
                        <button className={classes.close} onClick={props.onClickOutside}>
                            Close
                        </button>
                    </ModalOverlay>,
                    portalElement
                )}
            </div>
        </div>
    );
}

export default Modal;
