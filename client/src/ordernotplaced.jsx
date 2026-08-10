import { Link } from "react-router";

const OrderNotPlaced = () => {
    return (
        <div className="relative w-full min-h-screen bg-black overflow-hidden flex items-center justify-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-125 h-125 rounded-full bg-red-400/5"/>
            <style>{`
                @keyframes slideUp {
                    from { opacity: 0; transform: translateY(30px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    20%      { transform: translateX(-8px); }
                    40%      { transform: translateX(8px); }
                    60%      { transform: translateX(-5px); }
                    80%      { transform: translateX(5px); }
                }
                @keyframes ringPulse {
                    0%   { transform: scale(0.8); opacity: 0; }
                    60%  { transform: scale(1.1); opacity: 1; }
                    100% { transform: scale(1); opacity: 1; }
                }
                .slide-up-1 { animation: slideUp 0.6s 0.2s ease both; }
                .slide-up-2 { animation: slideUp 0.6s 0.4s ease both; }
                .slide-up-3 { animation: slideUp 0.6s 0.6s ease both; }
                .slide-up-4 { animation: slideUp 0.6s 0.8s ease both; }
                .ring-anim  { animation: ringPulse 0.7s 0.1s ease both; }
                .shake-anim { animation: shake 0.6s 0.5s ease both; }
            `}</style>

            <div className="relative z-10 w-full max-w-md mx-4">
                <div className="bg-white rounded-3xl p-10 shadow-2xl text-center border border-gray-100">

                    <div className="flex justify-center mb-8">
                        <div className="ring-anim shake-anim relative w-24 h-24">
                            <svg className="w-24 h-24" viewBox="0 0 96 96">
                                <circle cx="48" cy="48" r="44" fill="none" stroke="rgba(248,113,113,0.2)" strokeWidth="3"/>
                                <circle cx="48" cy="48" r="44" fill="none" stroke="#f87171" strokeWidth="2.5" strokeDasharray="276" strokeDashoffset="0" strokeLinecap="round"/>
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
                                    <path d="M12 12 L28 28" stroke="#f87171" strokeWidth="3.5" strokeLinecap="round"/>
                                    <path d="M28 12 L12 28" stroke="#f87171" strokeWidth="3.5" strokeLinecap="round"/>
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="slide-up-1">
                        <p className="text-xs text-red-400 font-semibold uppercase tracking-widest mb-2">Payment Failed</p>
                        <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Order Not Placed</h1>
                        <p className="text-gray-500 text-sm">Something went wrong while processing your payment. Don't worry, you were not charged.</p>
                    </div>

                    <div className="slide-up-2 mt-6 bg-red-50 border border-red-200 rounded-2xl px-5 py-4 flex items-center gap-3 text-left">
                        <div className="w-9 h-9 rounded-full bg-red-100 flex items-center justify-center shrink-0 text-base">⚠️</div>
                        <div>
                            <p className="text-sm text-black mb-0.5">Possible Reasons</p>
                            <p className="text-black/70 text-sm ">Insufficient funds, incorrect card details, or payment declined by bank.</p>
                        </div>
                    </div>

                    <div className="slide-up-3 mt-4 bg-black border border-gray-200 rounded-2xl px-5 py-4 text-left">
                        <p className="text-xs text-white uppercase tracking-widest mb-3">What to do next</p>
                        <div className="flex flex-col gap-2">
                            {[
                                "Check your card details and try again",
                                "Make sure you have sufficient balance",
                                "Try a different payment method",
                            ].map((tip, i) => (
                                <div key={i} className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                                    <p className="text-gray-100/60 text-sm">{tip}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                  
                    <div className="slide-up-4 flex flex-col gap-3 mt-8">
                        <Link to="/cart">
                            <button className="w-full py-3 rounded-xl bg-red-400 text-white font-semibold hover:bg-red-500 hover:scale-[1.02] transition-all duration-300 cursor-pointer shadow-lg shadow-red-400/20">
                                ← Back to Cart
                            </button>
                        </Link>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default OrderNotPlaced;