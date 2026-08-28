import { useRef, useState } from "react";

import Header from "./header"
import ai from "./geminiAi";

const AiShop = () => {

  const searchtxt = useRef(null);
  const [suggestion, setSugggestions] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchAI = async () => {
    setLoading(true);
    setSugggestions([]);
    const userInput = searchtxt.current.value;
    if (!userInput.trim()) return;
    const query = "Act as a clothes recommendation system and suggest styles for: " + userInput + ". Only give 6 best suggestions separated by commas.";
    try {
      const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: query,
      });
      const text = response.text;
      const final = text
        ? text.split(",").map((m) => m.trim())
        : [];
      setSugggestions(final);
    }
    catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  return (
    <div>
      <Header />
      <div className="bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 min-h-screen pb-20 relative overflow-hidden">

        {/* Decorative background blobs */}
        <div className="absolute top-10 -left-20 w-72 h-72 bg-red-300/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 -right-20 w-72 h-72 bg-red-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>

        <div className="relative z-10">
          <h1 className="text-4xl font-bold text-black mb-2 text-center pt-12 animate-[fadeInDown_0.6s_ease-out]">
            AI Shopping Assistant
          </h1>
          <p className="text-red-400 font-semibold mb-8 text-center mt-3 animate-[fadeInDown_0.6s_ease-out_0.1s_backwards]">
            Search smart. Shop faster. Powered by AI.
          </p>

          <form onSubmit={(e) => e.preventDefault()}>
            <div className="w-full max-w-xl flex gap-2 mt-10 mx-auto px-4 animate-[fadeInUp_0.6s_ease-out_0.2s_backwards]">
              <input
                ref={searchtxt}
                placeholder="Try: Suggest what should I buy to wear with denims"
                className="flex-1 px-4 py-3 rounded-lg bg-white/90 backdrop-blur text-black outline-none focus:ring-2 focus:ring-red-400 shadow-md transition-shadow focus:shadow-lg"
              />
              <button
                onClick={searchAI}
                className="bg-red-400 cursor-pointer transition-all duration-200 px-6 py-3 rounded-lg hover:bg-white hover:text-red-400 hover:scale-105 active:scale-95 border border-red-400 font-semibold text-black shadow-md"
              >
                Search
              </button>
            </div>
          </form>

          {loading && (
            <div className="flex flex-col items-center mt-10 gap-3">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 bg-red-400 rounded-full animate-bounce"></span>
                <span className="w-3 h-3 bg-red-400 rounded-full animate-bounce" style={{ animationDelay: "0.15s" }}></span>
                <span className="w-3 h-3 bg-red-400 rounded-full animate-bounce" style={{ animationDelay: "0.3s" }}></span>
              </div>
              <p className="text-red-400 font-medium">Searching best suggestions...</p>
            </div>
          )}

          {/* AI SUGGESTIONS */}
          {suggestion.length > 0 && !loading && (
            <div className="max-w-3xl mx-auto mt-12 px-4">
              <h2 className="text-2xl font-bold text-black mb-6 text-center animate-[fadeInDown_0.5s_ease-out]">
                Here's what we recommend ✨
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {suggestion.map((item, index) => (
                  <div
                    key={index}
                    className="group bg-white/80 backdrop-blur-md rounded-2xl p-5 shadow-lg hover:shadow-2xl border border-white/50 hover:border-red-400 transition-all duration-300 flex items-center gap-4 hover:-translate-y-1 hover:scale-[1.02] animate-[fadeInUp_0.5s_ease-out_backwards]"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-br from-red-400 to-red-500 text-white font-bold shrink-0 shadow-md group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300">
                      {index + 1}
                    </span>
                    <p className="text-black font-medium leading-snug group-hover:text-red-500 transition-colors duration-200">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default AiShop;