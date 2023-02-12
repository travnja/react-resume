import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";

function RootWrapper() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}

export default RootWrapper;
