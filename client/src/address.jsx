import { Link } from "react-router";

import address from "./images/address.PNG"


const Address=()=>{

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
                        <div className="w-4 h-4 rounded-full border-3 border-red-500 bg-black"></div>
                        <span className="text-sm text-white">Address</span>
                    </div>

                    <div className="w-20 h-0.5 mt-2 bg-gray-200/30"></div>

                   <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full border border-red-500 bg-black"></div>
                        <span className="text-sm text-white">Payment</span>
                    </div>
                </div>

                <h1 className="text-2xl font-bold text-gray-200 mb-5 mt-7">Add Address for Delivery</h1>

                <form id="form" className="flex flex-col gap-4 text-white">
                    <div className="flex items-center gap-2  bg-white/10 border border-white/20 rounded-lg px-3 py-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#f87171" className="w-6 h-6">
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-4.41 0-8 2.24-8 5v1h16v-1c0-2.76-3.59-5-8-5z" />
                        </svg>
                        <input type="text" placeholder="Full Name" className="w-full bg-transparent outline-none placeholder-white/60"/>
                    </div>

                    <div className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-lg px-3 py-2">
                        <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeWidth="2" d="M16 12H8m8-4H8m8 8H8M4 6h16v12H4z"/>
                         </svg>
                        <input type="email" placeholder="Email Address" className="w-full bg-transparent outline-none placeholder-white/60"/>
                    </div>

                    <div className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-lg px-3 py-2">
                        <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.21 2.2z" />
                        </svg>
                        <input type="tel" placeholder="Phone Number" className="w-full bg-transparent outline-none placeholder-white/60"/>
                    </div>

                    <div className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-lg px-3 py-2">
                        <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.21 2.2z" />
                        </svg>
                        <input type="tel" placeholder="Alternate phone Number" className="w-full bg-transparent outline-none placeholder-white/60"/>
                    </div>
 
                    <div className="flex items-start gap-1 bg-white/10 border border-white/20 rounded-lg px-2 py-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-7 h-6 mt-1 text-red-400 shrink-0" fill="currentColor">
                            <path d="M12 3l9 8h-3v9h-5v-6H11v6H6v-9H3l9-8z" />
                        </svg>
                        <textarea placeholder="Full Address" className="w-full bg-transparent outline-none placeholder-white/60 resize-none pt-1" rows={3}/>
                    </div>
                   

                   <div id="city/pincode" className="grid grid-cols-2 gap-3">
                        <div className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-lg px-3 py-2">
                            <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 21h18v-2H3v2zm2-3h2V8H5v10zm4 0h3V5H9v13zm5 0h2V11h-2v7zm4 0h2V7h-2v11z" />
                            </svg>
                            <input type="text" placeholder="City" className="w-full bg-transparent outline-none placeholder-white/60"/>
                        </div>

                        <div className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-lg px-3 py-2">
                            <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeWidth="2" d="M9 12h6M9 16h6M7 4h10v16H7z"/>
                            </svg>
                            <input type="text" placeholder="Pincode" className="w-full bg-transparent outline-none placeholder-white/60"/>
                        </div>
                    </div>
                    
                    <div className="mt-6 flex gap-4">
                        <Link to="/cart" className="flex-1">
                            <button className="w-full py-3 rounded-xl border border-white/20 bg-white/10 backdrop-blur-md text-white font-medium hover:bg-white hover:text-black transition-all duration-300 cursor-pointer">← Back</button>
                        </Link>
                        <Link to="/payment" className="flex-1">
                            <button className="w-full py-3 rounded-xl bg-red-400 text-white font-semibold shadow-lg shadow-red-500/30 hover:scale-[1.02] hover:shadow-red-500/50 hover:bg-red-500 transition-all duration-300 cursor-pointer">Next →</button>
                        </Link>
                    </div>
                </form>

            </div>
        </div>
    </div>
          
    )
}

export default Address;