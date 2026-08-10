import tw from "./images/twitter logo.png";
import fb from "./images/facebook logo.png";
import ig from "./images/instagram logo.png";

const About=()=>{
    return(
        <div className="bg-[#141212] w-screen">
            <div id="heading" className="mt-7 ml-6">
                <h1 className="text-white text-4xl font-sans font-semibold">About<span className="text-red-400 ml-2.5">Us</span></h1>
                <p className="text-gray-100/50 mt-2 text-md font-sans ml-1">The story behind Snikket</p>
            </div>

            <div id="mission" className="bg-[#1e1c1c] w-150 mt-12 mx-auto rounded-3xl border border-red-400/40 shadow-[0_0_40px_10px_rgba(248,113,113,0.3)]">
                <h1 className="text-red-400 font-sans font-extralight  ml-6 mt-6">OUR MISSION</h1>
                <p className="text-white font-sans text-xl font-semibold ml-6 mt-6">Making Great Fashion</p>
                <p className="text-red-400 font-sans text-xl font-semibold ml-6 ">accessible to everyone.</p>
                <p className="text-sm text-gray-100/50 ml-6 mt-5 mr-2 mb-7">Snikket was born in 2022 out of a simple frustration — why is it so hard to find quality clothing at honest prices? We set out to build a platform where style meets affordability, and where every purchase feels good inside and out.</p>
            </div>

            <div id="numbers" className="bg-[#1e1c1c] h-58 w-170 mt-20 mx-auto rounded-3xl shadow-2xl">
                <p className="text-gray-100/70 text-sm font-sans font-light pt-7 ml-8">SNIKKET IN NUMBERS</p>
                <div className="flex mt-10 mb-10 gap-3 ml-6.5">
                    <div className="bg-[#181717] w-37 h-27 rounded-2xl border border-gray-100/20 hover:border-red-400">
                        <p className="text-3xl mt-4 text-red-400 text-center">1M+</p>
                        <p className="text-gray-100/70 font-sans font-semibold text-sm mt-2 text-center">Happy Customers</p>
                    </div>

                    <div className="bg-[#181717] w-37 h-27 rounded-2xl border border-gray-100/20 hover:border-red-400">
                        <p className="text-3xl mt-4 text-center text-red-400">50K+</p>
                        <p className="text-gray-100/70 font-sans font-semibold text-sm text-center mt-2">Products Listed</p>
                    </div>

                    <div className="bg-[#181717] w-37 h-27 rounded-2xl border border-gray-100/20 hover:border-red-400">
                        <p className="text-3xl mt-4 text-center text-red-400">20+</p>
                        <p className="text-gray-100/70 font-sans font-semibold text-sm text-center mt-2">States Delivered</p>
                    </div>

                    <div className="bg-[#181717] w-37 h-27 rounded-2xl border border-gray-100/20 hover:border-red-400">
                        <p className="text-3xl mt-4 text-center text-red-400">4.7★</p>
                        <p className="text-gray-100/70 font-sans font-semibold text-sm text-center mt-2">App Rating</p>
                    </div>
                </div>
            </div>

            <div id="qualities" className="bg-[#1e1c1c] h-115 w-150 mt-20 mx-auto rounded-3xl shadow-2xl mb-20">
                <p className="text-gray-100/70 text-sm font-sans font-light pt-7 ml-8">WHY SNIKKET</p>
                <div className="flex flex-wrap gap-4 mt-8">
                    <div className="bg-[#181717] w-65 h-40 rounded-2xl border border-gray-100/20 ml-7.5 hover:border-red-400">
                        <p className="text-3xl mt-4 ml-4">🌱</p>
                        <p className="text-white font-sans font-semibold text-sm ml-4 mt-2">Eco-Friendly</p>
                        <p className="text-gray-100/70 text-xs font-medium ml-4 mt-2 mr-3">We partner with eco-conscious brands and use minimal, recyclable packaging on every order.</p>
                    </div>

                    <div className="bg-[#181717] w-65 h-40 rounded-2xl border border-gray-100/20 hover:border-red-400">
                        <p className="text-3xl mt-4 ml-4">h🤝</p>
                        <p className="text-white font-sans font-semibold text-sm ml-4 mt-2">Trust</p>
                        <p className="text-gray-100/70 text-xs font-medium ml-4 mt-2 mr-3">100% authentic products, verified sellers, and transparent pricing — no hidden fees, ever.</p>
                    </div>

                    <div className="bg-[#181717] w-65 h-40 rounded-2xl border border-gray-100/20 ml-7.5 mt-2 hover:border-red-400">
                        <p className="text-3xl mt-4 ml-4">💡</p>
                        <p className="text-white font-sans font-semibold text-sm ml-4 mt-2">Innovation</p>
                        <p className="text-gray-100/70 text-xs font-medium ml-4 mt-2 mr-3">From AI-powered size recommendations to Snikket Coins, we're always building what's next.</p>
                    </div>

                    <div className="bg-[#181717] w-65 h-40 rounded-2xl border border-gray-100/20 mt-2 hover:border-red-400">
                        <p className="text-3xl mt-4 ml-4">❤️</p>
                        <p className="text-white font-sans font-semibold text-sm ml-4 mt-2">Community</p>
                        <p className="text-gray-100/70 text-xs font-medium ml-4 mt-2 mr-3">Snikket is built by and for fashion lovers. Your feedback shapes every update we ship.</p>
                    </div>
                </div>
            </div>

            <div id="socailmedia" className="bg-[#1e1c1c] h-68 w-150 mt-20 mx-auto rounded-3xl shadow-2xl mb-25">
                <p className="text-gray-100/70 text-sm font-sans font-light pt-7 ml-8">FOLLOW US</p>
                <div className="flex mt-9 mb-10 gap-5 ml-14.5">
                    <div className="bg-[#181717] w-37 h-37 rounded-2xl border border-gray-100/20 hover:border-red-400">
                        <img className="w-10 h-10 mt-5 ml-13" src={ig}/>
                        <p className="text-xl mt-4 text-white font-semibold text-center">Instagram</p>
                        <p className="text-gray-100/50 font-sans font-semibold text-sm text-center mt-1">SnikketClub._18</p>
                    </div>

                    <div className="bg-[#181717] w-37 h-37 rounded-2xl border border-gray-100/20 hover:border-red-400">
                        <img className="w-10 h-10 mt-5 ml-13" src={fb}/>
                        <p className="text-xl font-semibold mt-4 text-center text-white">Facebook</p>
                        <p className="text-gray-100/50 font-sans font-semibold text-sm text-center mt-1">Snikket18</p>
                    </div>

                    <div className="bg-[#181717] w-37 h-37 rounded-2xl border border-gray-100/20 hover:border-red-400">
                        <img className="w-10 h-10 mt-5 ml-13" src={tw}/>
                        <p className="text-xl mt-4 text-center font-semibold text-white">Twitter</p>
                        <p className="text-gray-100/50 font-sans font-semibold text-sm text-center mt-1">Snikketx18</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;