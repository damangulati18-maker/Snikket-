import { useState,useEffect } from "react"
import axios from "axios";


import { getloginuserurl } from "./utils/constants";
import Header from "./header";
import Coins from "./coins";
import Faqs from "./FAQ'S";
import Help from "./help";
import Coupans from "./coupans";
import About from "./aboutus";
import Sellon from "./sellonsnikket";
import MyOrders from "./myorders";

const Settings =()=>{

    const itemList=["My Orders","Snikket Coins","Coupans","Help Center","FAQ'S","About Us","Sell on Snikket"];

    const [activeitem,setactiveitem] = useState(itemList[0]);
    const [loguser,setloguser]=useState("");

    useEffect(() => {
        const getCurruser=async()=>{
            try{
                const res=await axios.get(getloginuserurl,{withCredentials:true});
                setloguser(res?.data)
            }
            catch(err){
                console.error(err);
            }
        };
        getCurruser();
    }, []);

    //console.log(loguser);

    return(
        <div>
            <Header/>

            <div className="flex items-stretch min-h-screen">

                <div id="sidebar" className="w-1/4 bg-linear-to-b from-black to-gray-900 p-4 shadow-2xl">
                
                    <div className="mb-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 shadow-lg">

                        <div id="name" className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-3 py-3 mb-3 hover:border-red-400/40 transition-all duration-300">
                            <div className="w-9 h-9 rounded-full bg-linear-to-br from-red-400 to-red-500 flex items-center justify-center shadow-md">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="white" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.118a7.5 7.5 0 0115 0A17.933 17.933 0 0112 21.75a17.933 17.933 0 01-7.5-1.632z"/>
                                </svg>
                            </div>
                            <div>
                                <p className="text-gray-400 text-xs">Profile Name</p>
                                <h1 className="text-white text-sm font-medium tracking-wide">{loguser.userName}</h1>
                            </div>
                        </div>
                        
                        <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-3 py-3 hover:border-red-400/40 transition-all duration-300">
                            <div className="w-9 h-9 rounded-full bg-linear-to-br from-zinc-700 to-zinc-800 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="white" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 7.456 6.044 13.5 13.5 13.5h2.25a2.25 2.25 0 002.25-2.25l.001-1.372a1.125 1.125 0 00-.856-1.091l-4.423-1.106a1.125 1.125 0 00-1.173.417l-.97 1.293a1.125 1.125 0 01-1.21.38 12.035 12.035 0 01-7.143-7.143 1.125 1.125 0 01.38-1.21l1.293-.97a1.125 1.125 0 00.417-1.173L5.463 2.855A1.125 1.125 0 004.372 2L3 2.001A2.25 2.25 0 00.75 4.251V6.75"/>
                                </svg>
                            </div>
                            <div>
                                <p className="text-gray-400 text-xs">Mobile</p>
                                <h1 className="text-white text-sm font-medium tracking-wide">{loguser.mobile}</h1>
                            </div>
                        </div>
                    </div>

                    <ul className="space-y-2">
                       {itemList.map((j) => (
                            <li key={j}>
                                <button onClick={() => setactiveitem(j)} className={`relative w-full flex items-center px-4 py-3 rounded-xl text-left text-sm font-medium transition-all duration-300 group
                                    ${
                                       activeitem === j ? "bg-red-400 text-white shadow-lg shadow-red-400/30 scale-[1.02]": "text-gray-300 hover:bg-white/10 hover:text-white"
                                    }`}>
                                    <span className={`absolute left-0 top-2 bottom-2 w-1 rounded-r-full transition-all duration-300
                                        ${
                                            activeitem === j ? "bg-white" : "bg-transparent group-hover:bg-red-400"
                                        }`}
                                    />
                                    <span className="ml-2">{j}</span>
                                </button>
                            </li>
                        ))}
                    </ul>

                </div>

                {activeitem==="My Orders" &&(
                    <MyOrders/>
                )}

                {activeitem==="Snikket Coins" &&(
                    <Coins/>
                )}

                {activeitem==="Coupans" &&(
                    <Coupans/>
                )}

                {activeitem==="Help Center" &&(
                    <Help/>
                )}

                {activeitem==="FAQ'S" &&(
                    <Faqs/>
                )}

                {activeitem==="About Us" &&(
                    <About/>
                )}
                
                {activeitem==="Sell on Snikket" &&(
                    <Sellon/>
                )}

            </div>

        </div>
    )
}

export default Settings;