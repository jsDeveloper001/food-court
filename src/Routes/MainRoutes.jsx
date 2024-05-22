import { createBrowserRouter } from "react-router-dom";
import App from "../Layout/App";
import Home from "../Pages/Home/Home";



const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    }
])

export default routes