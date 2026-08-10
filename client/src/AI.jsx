import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { aisearchurl } from "./utils/constants";

const AiShop = () => {

  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const searchAI = async () => {
    setLoading(true);

    try {
      const res = await axios.post(aisearchurl,{ query });
      //console.log(res);
      setProducts(res?.data || []);
    } 
    catch (err) {
      console.log("FULL ERROR:", err);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center px-4 py-10 relative">
      <button onClick={() => navigate("/home")} className="mt-2 ml-1 cursor-pointer absolute top-4 left-4 bg-red-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-black hover:text-red-400 border border-red-400 transition">← Go Back</button>

      <h1 className="text-4xl font-bold text-red-400 mb-2 mt-15">AI Shopping Assistant</h1>

      <p className="text-gray-400 mb-8 text-center">Search smart. Shop faster. Powered by AI.</p>

      <div className="w-full max-w-xl flex gap-2 mb-10">
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Try: black hoodie under 2000" className="flex-1 px-4 py-3 rounded-lg bg-white text-black outline-none focus:ring-2 focus:ring-red-400"/>
        <button onClick={searchAI} className="bg-red-400 cursor-pointer transition px-6 py-3 rounded-lg hover:bg-black hover:text-red-400 border border-red-400  font-semibold text-black">Search</button>
      </div>
  
      {loading && (
        <p className="text-red-400 animate-pulse mb-6">Searching best deals...</p>
      )}

      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((p) => (
              <div key={p._id} className="bg-white text-black rounded-xl overflow-hidden shadow-lg hover:scale-105 transition transform duration-300">
                  <img src={p.photoUrl} alt={p.itemName} className="w-full h-56 object-cover"/>
                  <div className="p-4">
                      <h3 className="font-bold text-lg mb-1">{p.itemName}</h3>
                      <p className="text-red-500 font-semibold">₹{p.price}</p>
                          <button className="mt-3 w-full bg-black text-white py-2 rounded-md hover:bg-red-400 hover:text-black transition">View Product</button>
                  </div>
              </div>
          ))}
      </div>
    </div>
  );
};

export default AiShop;