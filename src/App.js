import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import Header from "./components/layout/Header";
import Content from "./components/layout/Content";
import Mentions from "./components/layout/Mentions";
import RootWrapper from "./pages/Root";
import HomePage from "./pages/Home";
import ErrorPage from "./pages/Error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootWrapper />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "",
                element: <HomePage />,
            },
        ],
    },
]);

function App() {
    return (
        <RouterProvider router={router} />
        // <div className="layout">
        //     <div className="header">
        //         <Header />
        //     </div>
        //     <div className="content">
        //         <Content />
        //     </div>
        //     <Mentions />
        // </div>
    );
}

export default App;
