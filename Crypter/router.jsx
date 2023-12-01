import {createBrowserRouter} from "react-router-dom";
import Layout from "./src/features/Layout";
import Home from "./src/pages/Home";
import Connectwallet from "./src/pages/Connectwallet/Connect";
import ScanQr from "./src/pages/Connectwallet/ScanQr";
import Messagewallet from "./src/pages/Connectwallet/Messagewallet";
import ProfileCards from "./src/pages/ProfileCards";
import ProfileFollowers from "./src/pages/ProfileFollowers";
import MainMenu from "./src/pages/MainMenu";

export const routers = createBrowserRouter([
    {
        element:<Layout/>,
        children:[
            {
                path:'/',
                element:<Home/>
            }
        ]
    },
    {
        element:<Connectwallet/>,
        path:'/wallet'
    },
    {
        element:<ScanQr/>,
        path:'/walletscanqr'
    },
    {
        element:<Messagewallet/>,
        path:'/walletmessage'
    },
    {
        element:<ProfileCards/>,
        path:'/profile'
    },
    {
        element:<ProfileFollowers/>,
        path:'/profile/followers'
    },
    {
        element:<MainMenu/>,
        path:'/mainmenu'
    }
])