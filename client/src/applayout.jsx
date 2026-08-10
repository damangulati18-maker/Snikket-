import {Outlet} from "react-router";
//import { Provider } from 'react-redux';

const AppLayout = ()=>{
  
  return(
     
        <div>
            <Outlet/>
       </div>
    
  )
}

export default AppLayout;