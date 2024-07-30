import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Athletes, Categories, Home } from "./pages";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "athletes",
                element: <Athletes />
            },
            {
                path: "categories",
                element: <Categories />
            }
        ]
    }
])