import { useState } from "react";

const Help =() =>{

    const [ques,setques] = useState("");
    const[notify,setnotify] = useState(false);

    const handleSubmit=()=>{
        if (!ques.trim()) return;
        setques("");

        setnotify(true);

        setTimeout(()=>{
            setnotify(false);
        },3000)
    }

    return(
        <div className="bg-[#141212] w-screen">
            <div id="heading" className="mt-7 ml-6">
                <h1 className="text-white text-4xl font-sans font-semibold">Help<span className="text-red-400 ml-2.5">Center</span></h1>
                <p className="text-gray-100/50 mt-2 text-md font-sans ml-1">How can we help you today?</p>
            </div>

            <div id="contact us" className="bg-[#1e1c1c] h-100 w-150 mt-20 mx-auto rounded-3xl shadow-2xl">
                <p className="text-gray-100/70 text-sm font-sans font-light pt-7 ml-8">CONTACT US</p>
                <div className="flex flex-wrap gap-4 mt-6 ">
                    <div className="bg-[#181717] w-65 h-34 rounded-2xl border border-gray-100/20 ml-7.5 hover:border-red-400">
                        <p className="text-3xl mt-4 ml-4">📞</p>
                        <p className="text-white font-sans font-semibold text-sm ml-4 mt-2">Call at</p>
                        <p className="text-gray-100/70 text-xs font-medium ml-4 mt-2">0183-9897XXXXXX</p>
                    </div>

                    <div className="bg-[#181717] w-65 h-34 rounded-2xl border border-gray-100/20 hover:border-red-400">
                        <p className="text-3xl mt-4 ml-4">📧</p>
                        <p className="text-white font-sans font-semibold text-sm ml-4 mt-2">Mail at</p>
                        <p className="text-gray-100/70 text-xs font-medium ml-4 mt-2">Snikket18@gmail.com</p>
                    </div>

                    <div className="bg-[#181717] w-65 h-34 rounded-2xl border border-gray-100/20 ml-7.5 mt-2 hover:border-red-400">
                        <p className="text-3xl mt-4 ml-4">🧑🏻‍💻</p>
                        <p className="text-white font-sans font-semibold text-sm ml-4 mt-2">Message on whatsapp</p>
                        <p className="text-gray-100/70 text-xs font-medium ml-4 mt-2">98760XXXXX</p>
                    </div>

                    <div className="bg-[#181717] w-65 h-34 rounded-2xl border border-gray-100/20 mt-2 hover:border-red-400">
                        <p className="text-3xl mt-4 ml-4">📱</p>
                        <p className="text-white font-sans font-semibold text-sm ml-4 mt-2">DM on instagram</p>
                        <p className="text-gray-100/70 text-xs font-medium ml-4 mt-2">SnikketClub._18</p>
                    </div>
                </div>
            </div>

            {notify && (
                <div className="fixed top-30 left-128 bg-red-400 text-white px-4 py-3 rounded-lg shadow-lg ">Your question has been submitted! We will reply u within few hours</div>
            )}

            <div id="ask" className="bg-[#1e1c1c]  w-170 mt-20 mx-auto rounded-3xl shadow-2xl mb-30">
                <p className="text-gray-100/70 text-sm font-sans font-light pt-7 ml-8">DROP YOUR QUESTION</p>
                <div className="mt-4 mx-auto w-[90%] max-w-3xl bg-[#1e1c1c] rounded-2xl p-6 shadow-2xl">
                    <h2 className="text-white text-xl font-semibold">Still have a question</h2>
                    <p className="text-gray-100/50 text-sm mt-1 ">Ask anything and we’ll help you out.</p>
                    <div className="mt-4 flex gap-3">
                        <input type="text" placeholder="Type your question..." value={ques} onChange={(e) => setques(e.target.value)} className="flex-1 px-4 py-3 rounded-lg bg-[#141212] text-white outline-none border border-gray-700 focus:border-red-400"/>
                        <button onClick={handleSubmit} className="px-6 py-3 bg-red-400 hover:cursor-pointer hover:bg-black hover:text-red-400 text-white rounded-lg font-medium border border-red-400">Submit →</button>
                    </div>
            </div>
            </div>

        </div>
    )
}

export default Help;