import { Link,useNavigate } from "react-router";
import axios from "axios";

import address from "./images/address.PNG"
import { useState,useEffect } from "react";

import { getloginuserurl,paymenturl } from "./utils/constants";
import cardimg from "../src/images/cardpay.png"
import codimg from "../src/images/cod.png"

const Payment=()=>{

    const [cardpay,setcardpay] = useState(true);
    const [codpay,setcodpay] = useState(false);
    const [totalbill,settotalbill] = useState();
    
    const navigate=useNavigate();

    const handleCODPayment=()=>{
        navigate("/orderplaced");
    }

    const handleCardPayment = async () => {
    try {
        const res = await axios.post(paymenturl,{},{ withCredentials: true });
        window.location.href = res.data.url; // → goes to Stripe's page
    }
    catch (err) {
        console.error(err);
    }
};

    useEffect(() => {
        const fetchBill = async () => {
            try {
                const res=await axios.get(getloginuserurl,{withCredentials:true});
                //console.log(res?.data);
                settotalbill(res?.data?.cartBill);
            } 
            catch (err){
                console.error(err);
            }
        };
        fetchBill();
    },[]);

    return(
    <div className="relative w-full min-h-screen">
        <img src={address} className="absolute inset-0 w-full h-full object-cover" />

        <div className="absolute inset-0 bg-black/20 z-10" />

        <div className="absolute top-1/2 left-10 -translate-y-1/2 z-20">
            <div className="w-130 bg-black backdrop-blur-3xl border border-white/30 shadow-2xl rounded-2xl p-10 ml-8">

                <div id="topbar" className=" w-full flex gap-4 z-20">
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-red-500"></div>
                        <span className="text-sm text-white">Cart</span>
                    </div>

                    <div className="w-20 h-0.5 mt-2 bg-white"></div>

                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-red-500"></div>
                        <span className="text-sm text-white">Address</span>
                    </div>

                    <div className="w-20 h-0.5 mt-2 bg-white"></div>

                   <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full border-3 border-red-500 bg-black"></div>
                        <span className="text-sm text-white">Payment</span>
                    </div>
                </div>

                <h1 className="text-2xl font-bold text-white mt-7 ml-2">Select a payment method</h1>

                <h6 className="texts-xs font-medium text-gray-200/50 mt-0.5 mb-5 ">• All transactions are secure and encrypted •</h6>

                <div id="box" className="flex flex-col gap-4 text-white">

                    <div id="cardpay" className=" w-109 bg-white/10 border border-white/20 rounded-lg">
                        <div className="flex">
                            <div onClick={() => {
                                setcardpay(!cardpay);
                                setcodpay(false);
                            }} className={`h-4 w-4 mt-6.25 ml-2 rounded-full border border-white/70 cursor-pointer transition-all duration-200 ${cardpay ? "bg-red-400" : "bg-transparent"}`}/>
                            <h1 className="text-sm text-white/70 ml-1.5 mt-6 mb-2 font-sans font-medium">Credit Card or Debit Card</h1>
                            <img src={cardimg} className="w-45 h-18 ml-12" alt="cardimage"/>
                        </div>
                    </div>

                    <div id="codpay" className=" w-109 bg-white/10 border border-white/20 rounded-lg">
                        <div className="flex">
                            <div onClick={() => {
                                setcodpay(!codpay);
                                setcardpay(false);
                            }} className={`h-4 w-4 mt-4.75 ml-2 rounded-full border border-white/70 cursor-pointer transition-all duration-200 ${codpay ? "bg-red-400" : "bg-transparent"}`}/>
                            <h1 className="text-sm text-white/70 ml-1.5 mt-4.5 mb-2 font-sans font-medium">Cash on delivery</h1>
                            <img src={codimg} className="w-13 h-13 ml-56" alt="cod"/>
                        </div>
                    </div>
                    
                    <div id="buttons" className="mt-6 flex gap-4">
                        <Link to="/address" className="flex-1">
                            <button className="w-full py-3 rounded-xl border border-white/20 bg-white/10 backdrop-blur-md text-white font-medium hover:bg-white hover:text-black transition-all duration-300 cursor-pointer">← Back</button>
                        </Link>
                        <div  className="flex-1">
                            <button onClick={codpay ? handleCODPayment : handleCardPayment} className="w-full py-3 rounded-xl bg-red-400 text-white font-semibold shadow-lg shadow-red-500/30 hover:scale-[1.02] hover:shadow-red-500/50 hover:bg-red-500 transition-all duration-300 cursor-pointer">{codpay ? `Pay ₹${totalbill} on Delivery →` : `Pay ₹${totalbill} via card →`}</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
          
    )
}

export default Payment;