import { useState,useEffect } from "react";
import axios from "axios";

import { getcoinsurl } from "./utils/constants";

const Coins=()=>{

    const [coins,setcoins] = useState("");

    useEffect(() => {
        const getCoins=async()=>{
            try{
                const res=await axios.get(getcoinsurl,{withCredentials:true});
                console.log(res?.data);
                setcoins(res?.data);
            }
            catch(err){
                console.error(err);
            }
        };
        getCoins();
    }, []);

    return(
        <div className="bg-[#141212] w-screen">
            <div id="heading" className="mt-7 ml-6">
                <h1 className="text-white text-4xl font-sans font-semibold">Snikket<span className="text-red-400 ml-2.5">Coins</span></h1>
                <p className="text-gray-100/50 mt-2 text-md font-sans ml-1">Your rewards, your savings</p>
            </div>

            <div id="balance" className="bg-[#1e1c1c] h-40 w-150 mt-12 mx-auto rounded-3xl shadow-[0_0_40px_10px_rgba(248,113,113,0.3)] flex">
                <div>
                    <h1 className="text-gray-100/70 text-md font-sans font-normal pt-5 ml-6 mb-5">TOTAL BALANCE</h1>
                    <p className="text-yellow-500 font-extrabold text-4xl mt-2 ml-6 scale-y-115 scale-x-100">{coins}<span className="text-gray-100/70 text-md font-sans font-light text-lg ml-2 ">Coins</span></p>
                </div>

                <div className="mt-9 ml-80" style={{ width: 80, height: 80, borderRadius: "50%", background: "radial-gradient(circle at 35% 35%, white, #ffd700, #7a5500)", display: "flex", alignItems: "center", justifyContent: "center",fontSize: "2rem", boxShadow: "0 0 30px rgba(255,215,0,0.5)",animation: "coinSpin 4s linear infinite",}}>
                    🪙
                    <style>{`@keyframes coinSpin { 0% { transform: rotateY(0deg); } 100% { transform: rotateY(360deg); }}`}</style>
                </div>
            </div>

            <div id="how to earn" className="bg-[#1e1c1c] h-100 w-150 mt-25 mb-30 mx-auto rounded-3xl shadow-2xl">
                <p className="text-gray-100/70 text-sm font-sans font-light pt-7 ml-8">HOW TO EARN</p>
                <div className="flex flex-wrap gap-4 mt-6 ">
                    <div className="bg-[#181717] w-65 h-34 rounded-2xl border border-gray-100/20 ml-7.5 hover:border-red-400">
                        <p className="text-3xl mt-4 ml-4">🛍️</p>
                        <p className="text-white font-sans font-semibold text-sm ml-4 mt-2">Shop & earn</p>
                        <p className="text-gray-100/70 text-xs font-medium ml-4 mt-2">Get 10 coins for every ₹100 spent</p>
                    </div>

                    <div className="bg-[#181717] w-65 h-34 rounded-2xl border border-gray-100/20 hover:border-red-400">
                        <p className="text-3xl mt-4 ml-4">👥</p>
                        <p className="text-white font-sans font-semibold text-sm ml-4 mt-2">Refer Friends</p>
                        <p className="text-gray-100/70 text-xs font-medium ml-4 mt-2">Earn 200 coins per successful referral</p>
                    </div>

                    <div className="bg-[#181717] w-65 h-34 rounded-2xl border border-gray-100/20 ml-7.5 mt-2 hover:border-red-400">
                        <p className="text-3xl mt-4 ml-4">🪙</p>
                        <p className="text-white font-sans font-semibold text-sm ml-4 mt-2">Welcome Bonus</p>
                        <p className="text-gray-100/70 text-xs font-medium ml-4 mt-2">Get 100 coins as a welcome gift</p>
                    </div>

                    <div className="bg-[#181717] w-65 h-34 rounded-2xl border border-gray-100/20 mt-2 hover:border-red-400">
                        <p className="text-3xl mt-4 ml-4">📱</p>
                        <p className="text-white font-sans font-semibold text-sm ml-4 mt-2">Social media bonus</p>
                        <p className="text-gray-100/70 text-xs font-medium ml-4 mt-2">Follow on social media to get 50 coins</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Coins;