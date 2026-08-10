import logo from "./images/app logo.png"

import { Link,useNavigate} from "react-router";
import { useState } from "react"
import axios from "axios";

import { logouturl } from "./utils/constants";


const Header =()=>{
    const [open, setOpen] = useState(false);
    const navigate=useNavigate();

    const handleLogout =async()=>{
        try {
            await axios.post(logouturl, {}, { withCredentials: true });
            navigate("/");
        } catch (err) {
            console.error(err);
        }
    }
    return(
        <header id="header" className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex px-6 py-4">
          <img className="h-14" src={logo} alt="logo"/>
          <div className=" text-3xl font-bold font-serif mt-3 ml-2">S<span className="text-red-500">ni</span>kket</div>
          <ul className="flex mt-3 ml-43">
            <Link to="/collection" state={{type:"shirts"}}><li className="text-xl font-semibold font-sans pr-9  hover:cursor-pointer hover:underline hover:text-red-400">Shirts</li></Link>
            <Link to="/collection" state={{type:"regular"}}><li className="text-xl font-semibold font-sans pr-9 hover:cursor-pointer hover:underline hover:text-red-400">Tshirts</li></Link>
            <Link to="/collection" state={{type:"oversized"}}><li className="text-xl font-semibold font-sans pr-9 hover:cursor-pointer hover:underline hover:text-red-400">Oversized</li></Link>
            <Link to="/collection" state={{type:"denims"}}><li className="text-xl font-semibold font-sans pr-9 hover:cursor-pointer hover:underline hover:text-red-400">Jeans</li></Link>
            <Link to="/collection" state={{type:"shorts"}}><li className="text-xl font-semibold font-sans pr-9 hover:cursor-pointer hover:underline hover:text-red-400">Shorts</li></Link>
            <Link to="/collection" state={{type:"joggers"}}><li className="text-xl font-semibold font-sans pr-9 hover:cursor-pointer hover:underline hover:text-red-400">Jogggers</li></Link>
            <Link to="/cart"><li className="ml-33  cursor-pointer">
                         <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 hover:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                            <line x1="3" y1="6" x2="21" y2="6" strokeLinecap="round" strokeWidth="1.5" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 10a4 4 0 0 1-8 0" />
                        </svg>
                     </li></Link>
            <li id="hammenu" className="relative pl-9">
              <svg onClick={() => setOpen(!open)} xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black hover:text-red-400 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7"/>
              </svg>
              {open && (
                  <div className="absolute right-0 mt-4 w-48 bg-white shadow-xl rounded-xl border border-gray-100 overflow-hidden">
                    <Link to="/home"><div id="home" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10.5L12 3l9 7.5V21a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1v-10.5z" />
                        </svg>
                        <span className="font-medium text-gray-700">Home</span>
                    </div></Link>

                     <Link to="/settings"><div id="profile" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                        </svg>
                        <span className="font-medium text-gray-700">Settings</span>
                    </div></Link>

                     <div id="logout" className="flex items-center gap-3 px-4 py-3 hover:bg-red-50 cursor-pointer">
                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v1" />
                         </svg>
                         <button onClick={handleLogout} className="font-medium text-red-500">Logout</button>
                     </div>
                  </div>
              )}
            </li>
          </ul>
        </div>
        </header>
    )
}

export default Header;