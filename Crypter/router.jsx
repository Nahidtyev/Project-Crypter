import {createBrowserRouter} from "react-router-dom";
import Layout from "./src/features/Layout";
import Home from "./src/pages/Home";
import Connectwallet from "./src/pages/Connectwallet/Connect";
import ScanQr from "./src/pages/Connectwallet/ScanQr";
import Messagewallet from "./src/pages/Connectwallet/Messagewallet";
import ProfileCards from "./src/pages/ProfileCards";
import ProfileFollowers from "./src/pages/ProfileFollowers";
import MainMenu from "./src/pages/MainMenu";
import Notification from "./src/pages/Notification";
import Activity from "./src/pages/Activity";
import Create from "./src/pages/Create";
import Create2 from "./src/pages/Create2";
import Deploy from "./src/pages/Deploy";
import Mint from "./src/pages/Mint/mintNft";
import MintWallet from "./src/pages/Mint/mintWallet";
import Settings from "./src/pages/Settings";
import Help from "./src/pages/Help";
import HelpCategory from "./src/pages/Help/Category";
import Blog from "./src/pages/Blog";
import BlogDetail from "./src/pages/Blog/Detail";
import HelpDetailsAll from "./src/pages/Help/Details";
import Discover from "./src/pages/Discover";
import Ranking from "./src/pages/Ranking";
import ProfileNftDetail from "./src/pages/ProfileCards/ProfileNftDetail";

export const routers = createBrowserRouter([
    {
        element:<Layout/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/discover',
                element:<Discover/>
            },
            {
                path:'/blog',
                element:<Blog/>
            },
            {
                path:'/blog/:blogId',
                element:<BlogDetail/>
            },
            {
                path: '/help/details/:helpId',
                element:<HelpDetailsAll/>
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
        element:<ProfileNftDetail/>,
        path:'/profilenftdetail/:nftId'
    },
    {
        element:<ProfileFollowers/>,
        path:'/profile/followers'
    },
    {
        element:<MainMenu/>,
        path:'/mainmenu'
    },
    {
        element:<Notification/>,
        path:'/notification'
    },
    {
        element:<Activity/>,
        path:'/activity/:notifId'
    },
    {
        element: <Create/>,
        path:'/create'
    },
    {
        element: <Create2/>,
        path:'/create-2'
    },
    {
        element: <Deploy/>,
        path:'/deploy'
    },
    {
        element: <Mint/>,
        path:'/mint'
    },
    {
        element: <MintWallet/>,
        path:'/mint-wallet'
    },
    {
        element: <Settings/>,
        path:'/settings'
    },
    {
        element: <Help/>,
        path:'/helpcenter'
    },
    {
        element: <HelpCategory/>,
        path:'/helpcenter/:helpId'
    },
    {
        element:<Ranking/>,
        path:'/ranking'
    }
])