import { createBrowserRouter } from "react-router-dom";
import App from "../Layout/App";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";



const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            }, {

            }
        ]
    }
])

export default routes