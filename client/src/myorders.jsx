import { useEffect, useState } from "react";
import axios from "axios";

import { getmyordersurl } from './utils/constants';

const MyOrders = () => {

  const [orders,setorders] = useState([]);

   useEffect(() => {
        const showOrders = async () => {
            try{
            const res=await axios.get(getmyordersurl,{withCredentials:true});
            //console.log(res?.data);
            setorders(res?.data);
        }
        catch(err){
            console.error(err);
        }
        };
        showOrders();
    }, []); 

    //console.log(orders)

    if(orders.length===0){
        <p className="text-gray-400 text-sm text-center py-10">No orders yet.</p>
    }

  return (
    <div className="bg-[#141212] w-screen">
        <div id="heading" className="mt-7 ml-6 mb-8">
            <h1 className="text-white text-4xl font-sans font-semibold">My<span className="text-red-400 ml-2.5">Orders</span></h1>
            <p className="text-gray-100/50 mt-2 text-md font-sans ml-1">Track and manage your purchases</p>
        </div>

        <div id="orders" className="flex flex-col gap-4 mb-14 mr-40 ml-8">
            {orders.map((order, i) => (
                <div key={i} className="bg-[#e2d7d7] mx-10 mt-7 border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <p className="text-lg font-semibold font-sans text-black  tracking-widest mb-1">OrderID - #{order.orderTotal*2-40}</p>
                            <p className="text-xs text-black">{new Date(order.orderDate).toLocaleDateString("en-IN", {day: "numeric", month: "short", year: "numeric"})}</p>
                        </div>
                        <div className="text-right">
                            <p className="text-xs text-red-500 mb-1">Order Total</p>
                            <p className="text-lg font-bold text-gray-900">₹{order.orderTotal}</p>
                        </div>
                    </div>

                    <div className="border-t border-red-500 mb-4" />

                    <div className="flex flex-col gap-2">
                        {order.items.map((item, j) => (
                            <div key={j} className="flex justify-between items-center">
                                <div className="flex items-center gap-3">
                                    <img src={item.photoUrl} alt={item.itemName} className="w-17 h-17 rounded-lg object-cover border border-[#524f4f]"/>
                                    <div className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                                        <p className="text-sm text-gray-700">{item.itemName}</p>
                                    </div>
                                </div>
                                <p className="text-sm font-semibold text-gray-800">₹{item.price}</p>
                             </div>
                        ))}
                    </div>

                    <p className="text-xs text-black mt-3">{order.items.length} item{order.items.length > 1 ? "s" : ""} in this order</p>
                </div>
            ))}
        </div>
    </div>
  );
};

export default MyOrders;