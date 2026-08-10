const Itemsgrid =({items, selectedSize, setSelectedSize, addItem })=>{
    return(
        <div id="items" className="max-w-7xl ml-78 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-6 mt-6 w-screen">
                {items.map((item, i) => (
                    <div key={i} className="rounded-lg bg-white shadow-md hover:shadow-xl transition overflow-hidden group mb-5">

                        <div className="overflow-hidden">
                            <img src={item.photoUrl} alt={item.itemName} className="h-58 w-full group-hover:scale-105 transition duration-500"/>
                        </div>

                        <div className="p-4">
                            <div className="flex justify-between items-start gap-3">
                                <div>
                                    <h2 className="font-semibold text-lg text-gray-800 line-clamp-1">{item.itemName}</h2>
                                    <p className="text-xs text-gray-500 capitalize">{item.itemCategory} • {item.itemType} Fit</p>
                                </div>
                                <span className="text-lg font-bold text-black">₹{item.price}</span>
                            </div>

                            <p className="text-sm text-gray-600 mt-2">{item.fabric}</p>

                            <div className="flex flex-wrap gap-2 mt-3">{item.color.map((clr, index) => (
                                <span key={index} className="px-2 py-1 text-xs bg-gray-100 rounded-full">{clr}</span>
                                ))}
                            </div>

                            <div className="flex gap-2 mt-3">
                                {item.size.map((size, index) => (
                                    <button key={index} onClick={() =>
                                        setSelectedSize({...selectedSize,[item._id]: size,})
                                }
                                className={`w-8 h-8 flex items-center justify-center border rounded-md text-xs font-medium cursor-pointer transition
                                ${
                                    selectedSize[item._id] === size ? "bg-black text-white border-black" : "bg-white text-black border-gray-300"
                                }`}>
                                        {size}
                                    </button>
                                ))}
                            </div>

                            <div className="flex items-center justify-between mt-4">
                                <span className={`text-sm font-medium ${item.instock ? "text-green-600" : "text-red-500"}`}>{item.instock ? "In Stock" : "Out of Stock"}</span>
                                <span className="text-xs text-gray-500">{item.boughtearlier}+ sold</span>
                            </div>
       
                            <button onClick={() => addItem(item)} className="flex items-center justify-center gap-2 w-full mt-4 bg-red-500 text-white py-2 rounded-lg hover:bg-white hover:text-red-500 border border-red-500 transition font-medium cursor-pointer">Add to cart
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="9" cy="21" r="1" />
                                    <circle cx="20" cy="21" r="1" />
                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                                </svg>
                            </button>
                        </div>
                    </div>
                ))}
                </div>
    )
}

export default Itemsgrid;