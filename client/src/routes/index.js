import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import RegisterPage from "../pages/RegisterPage";
import CheckEmailPage from "../pages/CheckEmailPage";
import CheckPasswordPages from "../pages/CheckPasswordPages";
import Home from "../pages/Home";
import MessagePage from "../Component/MessagePage";
import AuthLayouts from "../Layout";

const router = createBrowserRouter([
{
    path:"/",
    element:<App></App>,
    children:[
       {
        path : "register",
        element: <AuthLayouts> <RegisterPage /></AuthLayouts>
        
        
        // <RegisterPage />

       },
       {
        path : 'email',
        element:<AuthLayouts><CheckEmailPage /></AuthLayouts>
        },
        {
            path:'password',
            element:<AuthLayouts><CheckPasswordPages /></AuthLayouts>

        },{
            path:"",
            element:<Home />,
            children:[
                {
                    path:':userId',
                    element:<MessagePage />
                }
            ]
        }
       

       

    ]

}
])
export default router;
