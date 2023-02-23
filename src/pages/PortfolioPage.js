import { Outlet } from "react-router-dom";
import PortfolioList from "../components/portfolio/PortfolioList";


function PortfolioPage(){
    return (
        <>
            <h1>PORTFOLIO</h1>
            <p>Jan Trávníček</p>
            <Outlet />
            <PortfolioList />
        </>
    );
}


export default PortfolioPage;