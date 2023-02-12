import { useEffect, useState } from "react";

function getCurrentWindowWidth() {
    console.log("resized");
    return window.innerWidth;
}

function useIsOnPhone() {
    const [windowWidth, setWindowWidth] = useState(getCurrentWindowWidth());


    useEffect(() => {
        function resizeHandler(){
            setWindowWidth(getCurrentWindowWidth());
        }
        window.addEventListener("resize", resizeHandler);
        return () => window.removeEventListener("resize", resizeHandler);
    }, [])
    return windowWidth < 420;
}

export default useIsOnPhone;
