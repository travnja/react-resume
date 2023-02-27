import { useState } from "react";
import { useEffect } from "react";
import classes from "./css/Header.module.css";

function Header() {
    const [scrollDirection, setScrollDirection] = useState(null);

    useEffect(() => {
        let lastScrollY = window.pageYOffset;

        const updateScrollDirection = () => {
            const scrollY = window.pageYOffset;
            const direction = scrollY > lastScrollY ? "DOWN" : "UP";
            if (
                direction !== scrollDirection &&
                (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
            ) {
                setScrollDirection(direction);
            }
            lastScrollY = scrollY > 0 ? scrollY : 0;
        };
        window.addEventListener("scroll", updateScrollDirection);
        return () => {
            window.removeEventListener("scroll", updateScrollDirection);
        };
    }, [scrollDirection]);

    function AboutUsClickHandler(){
        document.getElementById("museum-about-us").scrollIntoView({ behavior: "smooth" });
    }

    function TicketsClickHandler() {
        document.getElementById("museum-tickets").scrollIntoView({ behavior: "smooth" });
    }

    function ContactClickHandler() {
        document.getElementById("museum-contact").scrollIntoView({ behavior: "smooth" });
    }



    return (
        <header
            className={`${classes.header} ${
                scrollDirection === "DOWN" ? classes.hide : classes.show
            }`}
        >
            <div className={classes["header-items"]}>
                <p onClick={TicketsClickHandler}>TICKETS</p>
                <p onClick={AboutUsClickHandler}>ABOUT US</p>
                <p onClick={ContactClickHandler}>CONTACT</p>
            </div>
        </header>
    );
}

export default Header;
