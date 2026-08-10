import { useState } from "react";

const Faqs = ()=>{

    const [OpenFaq, setOpenFaq] = useState(null);

    const faqs = [
        { q: "How do I track my order?", a: "Go to My Orders in Settings. Each order shows real-time tracking status. You'll also receive SMS and email updates at every stage." },
        { q: "How do I return or exchange an item?", a: "Visit My Orders, select the item, and click 'Return/Exchange'. Returns are accepted within 7 days of delivery for unworn items with tags intact." },
        { q: "How do Snikket Coins work?", a: "You earn 10 coins for every ₹100 spent. Coins can be redeemed at checkout at a rate of ₹0.10 per coin. Coins expire after 12 months of inactivity." },
        { q: "When will I receive my refund?", a: "Refunds are processed within 5–7 business days after we receive the returned item. The amount is credited to your original payment method." },
        { q: "Can I change or cancel my order?", a: "Orders can be cancelled within 1 hour of placing them. After that, the order enters processing and cannot be modified. Contact support for urgent cases." },
        { q: "How do I apply a coupon?", a: "At checkout, you'll see a 'Apply Coupon' field. Enter your code and click Apply. Only one coupon can be used per order." },
    ];

    return(
        <div className="bg-[#141212] w-screen">
            <div id="heading" className="mt-7 ml-6">
                <h1 className="text-white text-4xl font-sans font-semibold">Frequently Asked<span className="text-red-400 ml-2.5">Question's</span></h1>
                <p className="text-gray-100/50 mt-2 text-md font-sans ml-1">Got questions? We've got answers to help you shop with confidence</p>
            </div>

            <div id="faq's" className="bg-[#1e1c1c] w-170 mt-25 mx-auto rounded-3xl shadow-2xl mb-20">
                <p className="text-gray-100/70 text-sm font-sans font-light pt-7 ml-8">FREQUENTLY ASKED QUESTION'S</p>
                <div className="mt-4">
                    {faqs.map((i,index)=>(
                        <div key={index} className={`py-4 ${index !== faqs.length - 1 ? "border-b border-gray-700" : ""}`}>
                           <button onClick={()=>setOpenFaq(OpenFaq === index ? null:index)} className="w-full flex justify-between items-center text-left text-white ml-9">
                                <span className="font-medium text-lg">{i.q}</span>
                                <span className="text-red-400 text-2xl mr-18">{OpenFaq === index ? "-":"+"}</span>
                            </button>
                            {OpenFaq ===index &&(
                                <div className="mt-5 mb-1 text-gray-300 text-sm leading-relaxed pr-6 ml-9  mr-4">
                                    {i.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Faqs;
