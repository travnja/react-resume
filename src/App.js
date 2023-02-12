import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import RootWrapper from "./pages/Root";
import HomePage from "./pages/Home";
import ErrorPage from "./pages/Error";
import ContactPage from "./pages/Contact";

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
            {
                path: "/contact",
                element: <ContactPage />
            }
        ],
    },
]);

function App() {
    return (
        <RouterProvider router={router} />
    );
}

export default App;
