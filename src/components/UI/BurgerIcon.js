import classes from "./css/BurgerIcon.module.css";

function BurgerIcon({ isOpen, onClick }) {
    return (
        <div className={isOpen ? classes.open : classes.normal} onClick={onClick}>
            <div className={[classes.top, classes.base].join(" ")} />
            <div className={[classes.middle, classes.base].join(" ")} />
            <div className={[classes.bottom, classes.base].join(" ")} />
        </div>
    );
}

export default BurgerIcon;
