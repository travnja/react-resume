import { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import RootWrapper from "./pages/RootPage";
import HomePage from "./pages/HomePage";
import ErrorPage, { ProjectsErrorPage } from "./pages/ErrorPage";
import ContactPage from "./pages/ContactPage";

const PortfolioPage = lazy(() => import("./pages/PortfolioPage"));
const BandPage = lazy(() => import("./components/portfolio/portfolioProjects/MusicBand/Home"));

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
                path: "/projects",
                errorElement: <ProjectsErrorPage />,
                element: (
                    <Suspense fallback={<p>Loading...</p>}>
                        <PortfolioPage />
                    </Suspense>
                ),
            },
        ],
    },
    {
        path: "/bandpage",
        element: (
            <Suspense fallback={<p>Loading...</p>}>
                <BandPage />
            </Suspense>
        ),
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
