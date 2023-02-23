import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/layout/Header";
import Heart from "../components/UI/HeartImage";

function ErrorPage() {

    const title = "This page does not exist!";
    const description = "Something went wrong";

    return (
        <>
            <Header />
            <h1>{title}</h1>
            <p>{description}</p>
            <Heart />
        </>
    );
}

const TIMEOUT_SECONDS = 5;

function ProjectsErrorPage(){
    const [timeLeft, setTimeLeft] = useState(TIMEOUT_SECONDS);
    const navigate = useNavigate();

    useEffect(() => {
        if(timeLeft === 1){
            navigate("/projects");
        }
        const interval = setInterval(() => {
            setTimeLeft((timeLeft) => timeLeft - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [timeLeft]);

    return (
        <>
            <p>This project page does not exist, redirecting in ... {timeLeft} seconds.</p>
        </>
    );
}

export default ErrorPage;

export { ProjectsErrorPage };
