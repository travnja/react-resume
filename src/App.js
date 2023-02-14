import { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import RootWrapper from "./pages/RootPage";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import ContactPage from "./pages/ContactPage";

const PortfolioPage = lazy(() => import("./pages/PortfolioPage"));

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
                element: <ContactPage />,
            },
            {
                path: "/portfolio",
                element: (
                    <Suspense fallback={<p>Loading...</p>}>
                        <PortfolioPage />
                    </Suspense>
                ),
                children: [
                    {
                        path: ":projectID",
                    },
                ],
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
