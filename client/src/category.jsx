import { useEffect,useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router";
import axios from "axios";

import { additemurl,formalurl,traditionalurl,casualurl } from "./utils/constants";
import Filters from './filters';
import Itemsgrid from './itemsgrid';
import Header from './header';

const Category=()=>{

    const [items,setitems] =useState([]);
    const [originaldata,setoriginaldata] = useState([]);//this will store the entire data always we always filter from here
    const [SelectedPrice, setSelectedPrice] = useState("");
    const [SelectedStock,setSelectedStock] = useState("");
    const [selectedSizeFilter, setSelectedSizeFilter] = useState("");
    const [selectedSize, setSelectedSize] = useState({});
    const [showNotification, setShowNotification] = useState(false);
    const [showSizeNotification, setShowSizeNotification] = useState(false);
    const [shownostock,setshownostock]=useState(false);
    const [heading,setheading] = useState("");
    const [heading2,setheading2] = useState("");

    const { state } = useLocation();
    const type = state?.type;

    //we are calling the addItem fn with argument in add to cart button
    const addItem=async(item)=>{
        //notification to show if item selected without size and setting it false after 2 sec
        if (!selectedSize[item._id]) {
            setShowSizeNotification(true);

            setTimeout(() => {
            setShowSizeNotification(false);
        }, 2000);

        return; // stop function here
        }
        try{
            if(item.instock===true){
                await axios.post(additemurl,{
                itemName: item.itemName,
                itemType: item.itemType,
                color: item.color[0],
                price: item.price,
                fabric: item.fabric,
                boughtearlier:item.boughtearlier,
                photoUrl: item.photoUrl,
                itemCategory: item.itemCategory,
                size: selectedSize[item._id]
            },{withCredentials:true});

            //console.log(res?.data);
            //setting to show itemm added notification
            setShowNotification(true);

            //setting back the show notification to false to remove it but after 2 sec 
            setTimeout(() => {
                setShowNotification(false);
            }, 2000);

            //removing the selected size of previously added item in cart from selected size state variable
            setSelectedSize((prev) => ({
                ...prev,
                [item._id]: null,
            }));
            }
            else{
                setshownostock(true);
                setTimeout(() => {
                setshownostock(false);
                }, 2000);

                setSelectedSize((prev) => ({
                ...prev,
                [item._id]: null,
            }));
            }
        }
        catch(err){
            console.error("Add to cart error:", err.response?.data || err.message);
        }
        
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                let apiUrl="";
                if(type==="formal"){
                    apiUrl=formalurl;
                    setheading("Formal Wears");
                    setheading2("The perfect fit for every occasion.")
                }
                else if(type==="casual"){
                    apiUrl=casualurl;
                    setheading("Casual Wears");
                    setheading2("Comfort and style for your everyday moments.")
                }
                else if(type==="traditional"){
                    apiUrl=traditionalurl;
                    setheading("Traditional Wears");
                    setheading2("Celebrate culture with timeless elegance.")
                }
                const res = await axios.get(apiUrl, { withCredentials: true });
                setitems(res?.data?.data);
                setoriginaldata(res?.data?.data);
            } 
            catch (err){
                console.error(err);
            }
        };
        fetchData();
    }, [type]);

    const Filter =(price,stock,size)=>{
        //in this fn first we pass all the data to a filtered variable than we go through various consditions and data is filtered
        let filtered = [...originaldata];

        // PRICE FILTER
        if (price === "under1000") {
            filtered = filtered.filter(item => item.price < 1000);
        }

        if (price === "1000-2000") {
            filtered = filtered.filter(item => item.price >= 1000 && item.price <= 2000);
        }

        if (price === "above2000") {
            filtered = filtered.filter(item => item.price > 2000);
        }

        // STOCK FILTER
        if (stock === "instock") {
            filtered = filtered.filter(item => item.instock === true);
        }

        if (stock === "outofstock") {
            filtered = filtered.filter(item => item.instock === false);
        }

        //SIZE FILTER
        if (size) {
            filtered = filtered.filter(item =>
            item.size.includes(size)
        );
        }

        setitems(filtered);
    }; 

    return(
        <div className="bg-gray-200/90">
            <Header/>
            <div id="header" className="ml-80 px-8 pt-5 pb-2 flex justify-between items-start">
                <div>
                    <p className="text-xs text-red-400 font-semibold uppercase tracking-widest mb-1">Explore</p>
                    <h1 className="text-3xl font-extrabold text-gray-800">Wide Range of <span className="text-red-400">{heading}</span></h1>
                    <p className="text-black/90 font-sans font-light">{heading2}</p>
                    <div className="w-16 h-1 bg-red-400 rounded-full mt-2"></div>
                    <div className="flex gap-3 mt-4">
                        <Link to="/category" state={{ type: "casual" }}><button className={`px-5 py-2 text-sm font-semibold rounded-xl border border-red-400 transition hover:cursor-pointer ${type === "casual" ? "bg-red-400 text-white" : "bg-white text-red-400 hover:bg-red-400 hover:text-white"}`}>Casual</button></Link>
                        <Link to="/category" state={{ type: "formal" }}><button className={`px-5 py-2 text-sm font-semibold rounded-xl border border-red-400 transition hover:cursor-pointer ${type === "formal" ? "bg-red-400 text-white" : "bg-white text-red-400 hover:bg-red-400 hover:text-white"}`}>Formal</button></Link>
                        <Link to="/category" state={{ type: "traditional" }}><button className={`px-5 py-2 text-sm font-semibold rounded-xl border border-red-400 transition hover:cursor-pointer ${type === "traditional" ? "bg-red-400 text-white" : "bg-white text-red-400 hover:bg-red-400 hover:text-white"}`}>Traditional</button></Link>
                    </div>
                </div>
                <div className="flex items-center gap-3 mt-4 ">
                    <Link to="/home"><button className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-red-400 border border-red-400 rounded-xl hover:bg-white hover:text-red-400 transition hover:cursor-pointer shadow-sm">Go Back</button></Link>
                </div>
            </div>

            {showNotification && (
                <div className="fixed top-15 left-1/2 ml-36 -translate-x-1/2 z-50 animate-[toastIn_.25s_ease-out]">
                    <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-green-100 shadow-lg border border-green-600">
                        <div className="ml-2 w-9 h-9 flex items-center justify-center rounded-full bg-green-50 border border-green-300">
                            <span className="text-green-500 text-sm font-bold">✓</span>
                        </div>
                        <span className="text-green-600 mr-4 font-medium text-sm sm:text-base">Item added to cart</span>
                    </div>
                </div>
            )}

            {showSizeNotification && (
                <div className="fixed top-15 left-1/2 ml-36 -translate-x-1/2 z-50 animate-[toastIn_.25s_ease-out]">
                    <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-red-100 shadow-lg border border-red-600">
                        <div className="ml-2 w-9 h-9 flex items-center justify-center rounded-full bg-red-50 border border-red-200">
                            <span className="text-red-500 text-sm font-bold ">!</span>
                        </div>
                        <span className="text-red-500 mr-4 font-medium text-sm sm:text-base">Please Select a Size first</span>
                    </div>
                </div>
            )}

            {shownostock && (
                <div className="fixed top-15 left-1/2 ml-36 -translate-x-1/2 z-50 animate-[toastIn_.25s_ease-out]">
                    <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-red-100 shadow-lg border border-red-600">
                        <div className="ml-2 w-9 h-9 flex items-center justify-center rounded-full bg-red-50 border border-red-200">
                            <span className="text-red-500 text-sm font-bold ">X</span>
                        </div>
                        <span className="text-red-500 mr-4 font-medium text-sm sm:text-base">Item out of Stock</span>
                    </div>
                </div>
            )}

            {items.length === 0 && (
                <div className="col-span-full bg-gray-200/90 h-screen flex flex-col ml-70 pb-35 items-center justify-center text-center">
                    <div className="text-6xl mb-4 animate-bounce">🛍️</div>
                    <h2 className="text-2xl font-bold text-gray-800">No items found</h2>
                    <p className="text-sm mt-2 text-gray-500 max-w-md">We couldn’t find any products matching your filters. Try adjusting your price, size, or availability.</p>
                    <button onClick={() => {
                        setSelectedPrice("");
                        setSelectedStock("");
                        setSelectedSizeFilter("");
                         setitems(originaldata);
                     }}
                     className="mt-6 px-5 py-2 bg-red-400 text-white rounded-xl hover:bg-red-500 transition shadow-md">
                    Clear Filters
                    </button>
                </div>
            )}

            <div className="flex mb-4">
                <Filters SelectedPrice={SelectedPrice}
                    setSelectedPrice={setSelectedPrice}
                    SelectedStock={SelectedStock}
                    setSelectedStock={setSelectedStock}
                    selectedSizeFilter={selectedSizeFilter}
                    setSelectedSizeFilter={setSelectedSizeFilter}
                    originaldata={originaldata}
                    setitems={setitems}
                    Filter={Filter}/>

                <Itemsgrid items={items} selectedSize={selectedSize} setSelectedSize={setSelectedSize} addItem={addItem}/>
            </div>
        </div>
    )
}

export default Category;