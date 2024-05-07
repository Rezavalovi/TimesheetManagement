import { createBrowserRouter, redirect } from "react-router-dom";
// import LoginPage from "../src/pages/LoginPage";
// import RegisterPage from "../src/pages/RegisterPage";
import HomePage from "../src/pages/HomePage";
// import Detail from "../src/pages/Detail";
// import Favorite from "../src/pages/Favorite";
// import UpdateForm from "../src/pages/EditPage";
// import { ChannelPage } from "../src/pages/ChannelPage";
// import { DetailPage } from "../src/pages/DetailPage";



const router = createBrowserRouter([
    
    {
        path: "/",
        element: <HomePage />,
        // loader: () => {
        //     const isLogin = localStorage.getItem('access_token');
        //     if (!isLogin) {
        //         throw redirect('/login');
        //     } else {
        //         return null
        //     }
        // }
    }


]);

export default router;