import { Link } from 'react-router';
import { useEffect } from 'react';
import axios from "axios";

import { clearcarturl,updateCoinsCartbill,updatemyordersurl } from './utils/constants';

const OrderPlaced = () => {

    //we will also add coins to user and set cartbill again as zero
    const updateUser = async()=>{
        //this api will make the cart total as zero on backend and add new coins earned
        await axios.post(updateCoinsCartbill,{},{withCredentials:true})
    }

    //we will clear the cart once order is placed
    const clearCart = async()=>{
        await axios.post(clearcarturl,{},{withCredentials:true});
    }

    //update the myOrders field in database before clearing cart because it takes data from cart
    useEffect(() => {
        const updateOrders = async () => {
            try{
            await axios.post(updatemyordersurl,{},{withCredentials:true});
        }
        catch(err){
            console.error(err);
        }
        };
        updateOrders();
    }, []);    

    return (
        <div className="min-h-screen bg-black flex items-center justify-center px-4">
            <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-lg w-full text-center">
                <div className="flex justify-center mb-6">
                    <div className="w-24 h-24 rounded-full bg-red-400 flex items-center justify-center shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-14 h-14 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                        </svg>
                    </div>
                </div>

                <h1 className="text-4xl font-bold text-black mb-3">Order Placed!</h1>

                <p className="text-gray-600 text-lg mb-8">Your order has been placed successfully.We are preparing your items and will notify you once they are shipped.</p>

                <div className="bg-black rounded-2xl p-5 mb-8">
                    <p className="text-red-400 font-semibold text-lg">Estimated Delivery</p>
                    <p className="text-white text-xl font-bold mt-1">3 - 5 Business Days</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/home"><button onClick={()=>{
                        updateUser();
                        clearCart();
                    }} className="flex-1 py-3 rounded-xl bg-red-400 text-white font-semibold hover:bg-red-500 transition-all duration-300 cursor-pointer px-7 ml-28">Continue Shopping</button></Link>
                </div>
            </div>
        </div>
    );
};

export default OrderPlaced;