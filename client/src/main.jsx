import ReactDOM from 'react-dom/client';
import { createBrowserRouter,RouterProvider } from "react-router";


import AppLayout from './applayout';
import Home from './home';
import SignUp from './signup';
import Cart from './cart';
import Settings from './settings';
import Payment from './payment';
import Address from './address';
import './clothingFE.css'
import Collection from './colloection';
import Category from './category';
import OrderPlaced from './orderplaced';
import OrderNotPlaced from './ordernotplaced';
import PrivacyPolicy from './privacypolicy';
import AiShop from './AI';




const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:"/",element:<SignUp/>
      },
      {
        path:"/home",element:<Home/>
      },
      {
        path:"/cart",element:<Cart/>
      },
      {
        path:"/settings",element:<Settings/>
      },
      {
        path:"/address",element:<Address/>
      },
      {
        path:"/payment",element:<Payment/>
      },
      {
        path:"/collection",element:<Collection/>
      },
      {
        path:"/category",element:<Category/>
      },
      {
        path:"/orderplaced",element:<OrderPlaced/>
      },
      {
        path:"/ordernotplaced",element:<OrderNotPlaced/>
      },
      {
        path:"/privacypolicy",element:<PrivacyPolicy/>
      },
      {
        path:"/AIsearch",element:<AiShop/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);
