import topimg from "./images/top photo.jpg"
import ccimg from "./images/cc off.png"
import ethnic from "./images/ethnic.jpeg"
import casual from "./images/casual.jpg"
import formal from "./images/formal.jpg"
import porsche from "./images/porsche.jpg"

import { Link} from "react-router";

import MonthOffers from "./monthoffers"
import Header from "./header"

const Home = () => {

  return (
    <div className="bg-gray-300/80">

      <Header/>

      <Link id="ai button" to="/AIsearch">
        <div className="fixed right-6 bottom-20 z-50 group animate-bounce">
            <div className="bg-black text-white border border-red-400 hover:bg-red-400 hover:text-black transition-all duration-300 px-4 py-3 rounded-full shadow-2xl flex items-center gap-2 cursor-pointer">
                <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></span>
                <span className="text-sm font-semibold whitespace-nowrap">Try AI Suggestions →</span>
            </div>
            <div className="absolute right-0 -top-10 opacity-0 group-hover:opacity-100 transition bg-white text-black text-xs px-3 py-1 rounded-md shadow-md whitespace-nowrap">Smart shopping assistant ✨</div>
        </div>
      </Link>

      <div id="top image" className="max-w-6xl mx-auto px-6 mt-6">
        <div className="relative rounded-xl overflow-hidden shadow-lg">
          <img src={topimg} className="w-full h-137 object-cover"/>
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white">
            <h1 className="text-4xl font-bold">Upgrade Your Style</h1>
            <p className="mt-2 text-lg">Trendy outfits for every occasion</p>
          </div>
        </div>
      </div>

      <div id="credit card" className="hover:cursor-pointer max-w-3xl mx-auto mt-15 rounded-2xl overflow-hidden bg-linear-to-r from-red-400 via-red-900 to-black/90   shadow-xl flex items-center">
          <div className="text-white px-6 py-6 flex-1">
              <p className="text-xs uppercase tracking-widest opacity-80">Limited Offer </p>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 leading-tight">Get up to 50% OFF</h2>
              <p className="mt-3 text-sm opacity-90">on SBI Credit Cards 💳</p>
          </div>
          
          <div className="flex-1 flex justify-end items-end h-full">
              <img src={ccimg} alt="Credit Cards" className="w-full max-w-xs md:max-w-sm object-contain  translate-x-4 md:translate-x-6 drop-shadow-2xl"/>
          </div>
      </div>

      <div id="heading1" className="text-center mt-14">
          <h2 className="text-4xl font-extrabold text-gray-800">Shop by Category</h2>
          <div className="w-20 h-1 bg-red-400 mx-auto mt-3 rounded-full"></div>
          <p className="text-gray-500 mt-3 text-sm">Explore trending styles created for you</p>
      </div>

      <div id="category cards" className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-6 mt-10">
          <div id="card1" className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300">
              <div className="overflow-hidden">
                  <img src={ethnic} className="h-80 w-full object-cover group-hover:scale-110 transition duration-500" alt="Traditional Wear"/>
              </div>
              
              <div className="p-5 text-center">
                  <h3 className="font-semibold text-lg text-gray-800">Traditional & Ethnic Wear</h3>
                  <div className="w-10 h-1 bg-red-500/90 mx-auto mt-2 rounded-full"></div>
                  <Link to="/category" state={{type:"traditional"}}><button className="mt-4 px-5 py-2 bg-red-500/90 border border-red-500/90 text-white rounded-xl  hover:bg-white hover:text-red-500/90 transition hover:border-red-500/90 hover:cursor-pointer">View All</button></Link>
              </div>
          </div>

          <div id="card2" className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300">
              <div className="overflow-hidden">
                  <img src={casual} className="h-80 w-full object-cover group-hover:scale-110 transition duration-500"alt="Casual Wear"/>
              </div>

              <div className="p-5 text-center">
                    <h3 className="font-semibold text-lg text-gray-800">Casual Daily Wear</h3>
                    <div className="w-10 h-1 bg-red-500/90 mx-auto mt-2 rounded-full"></div>
                    <Link to="/category" state={{type:"casual"}}><button className="mt-4 px-5 py-2 bg-red-500/90 border border-red-500/90 text-white rounded-xl  hover:bg-white hover:text-red-500/90 transition hover:border-red-500/90 hover:cursor-pointer">View All</button></Link>
              </div>
          </div>

          <div id="card3" className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300">
              <div className="overflow-hidden">
                  <img src={formal} className="h-80 w-full object-cover group-hover:scale-110 transition duration-500" alt="Formal Wear"/>
              </div>

              <div className="p-5 text-center">
                  <h3 className="font-semibold text-lg text-gray-800">Formal Collection</h3>
                  <div className="w-10 h-1 bg-red-500/90 mx-auto mt-2 rounded-full"></div>
                  <Link to="/category" state={{type:"formal"}}><button className="mt-4 px-5 py-2 bg-red-500/90 border border-red-500/90 text-white rounded-xl  hover:bg-white hover:text-red-500/90 transition hover:border-red-500/90 hover:cursor-pointer">View All</button></Link>
              </div>
          </div>
      </div>

      <div id="newuseroff" className="w-screen mx-auto mt-15 py-15 overflow-hidden bg-linear-to-r from-red-400 via-red-900 to-black/90 shadow-lg text-center text-white px-6 relative">
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          <p className="text-sm uppercase tracking-widest opacity-80"> Special Offer</p>
          <h2 className="text-2xl md:text-3xl font-extrabold mt-2">Flat ₹300 Off on Your First Purchase</h2>
          <div className="mt-3 inline-block bg-white text-red-500 font-bold px-4 py-1 rounded-full text-sm">Use Code: NEW300</div>
      </div>

      <div id="heading2" className="text-center mt-16">
          <h2 className="text-4xl font-extrabold text-gray-800">Month End Offers</h2>
          <div className="w-20 h-1 bg-red-400 mx-auto mt-3 rounded-full"></div>
          <p className="text-gray-500 mt-3 text-sm">Grab limited-time discounts before the month ends</p>
      </div>

      <div id="mothoffers" className="max-w-7xl grid md:grid-cols-3 gap-12 px-6 mt-9 mx-20">
        <MonthOffers/>
      </div>

      <div id="heading3" className="text-center mt-18 pb-15 bg-black">
            <h2 className="text-4xl font-extrabold text-gray-100 pt-15"> What's New</h2>
            <p className="text-gray-100/60 mt-3 text-sm">Exclusive Drop</p>
            <div className="w-20 h-1 bg-red-400 mx-auto mt-3 rounded-full"></div>
            <p className="text-gray-100/60 mt-3 text-sm">Clothing X Porsche</p>
            <div className="max-w-5xl mx-auto mt-6 px-6">
                <img src={porsche} alt="Clothing X Porsche" className="w-full h-105 object-cover rounded-2xl shadow-xl"/>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-100 mt-6">Premium Style for All Occasions</h3>
            <p className="text-gray-100/60 mt-2 text-sm"> Designed for everyday comfort, luxury, and performance-inspired fashion</p> 
      </div>

      <div className="border border-gray-100/10">
      </div>

      <footer id="footer" className="bg-black text-gray-300 py-12">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
              <div>
                  <h2 className="text-white text-2xl font-bold font-serif">Snikket</h2>
                  <p className="text-gray-400 mt-3 text-sm leading-relaxed">Discover premium fashion collections crafted for comfort, style, and confidence.</p>
              </div>

              <div>
                  <h3 className="text-red-400 text-lg font-semibold mb-4">Quick Links</h3>
                  <div className="flex flex-col gap-2 text-sm">
                      <Link to="/settings"  className="hover:text-red-400 transition">About Us</Link>
                      <Link to="/privacypolicy"  className="hover:text-red-400 transition">Privacy Policy</Link>
                      <Link to="/settings" className="hover:text-red-400 transition">FAQ'S</Link>
                      <Link to="/settings" className="hover:text-red-400 transition">Contact Us</Link>
                      <Link to="/settings" className="hover:text-red-400 transition">Become a Seller</Link>
              </div>
          </div>
          
          <div className="md:text-right flex md:justify-end items-end">
              <p className="text-sm text-gray-400">© 2026 All rights reserved</p>
          </div>

          </div>
              <div className="mt-10 border-t border-gray-800 pt-4 text-center text-xs text-gray-500">Made with ❤️ for modern shopping experience
          </div>
      </footer>

    </div>
  );
};

export default Home;