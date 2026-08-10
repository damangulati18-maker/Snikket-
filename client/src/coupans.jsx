const Coupans = ()=>{
    
    return(
        <div className="bg-[#141212] w-screen">
            <div id="heading" className="mt-7 ml-6">
                <h1 className="text-white text-4xl font-sans font-semibold">Snikket<span className="text-red-400 ml-2.5">Coupans</span></h1>
                <p className="text-gray-100/50 mt-2 text-md font-sans ml-1">Your savings, all in one place</p>
            </div>

            <div>
                <p className="text-7xl text-center mt-30">🎟️</p>
                <p className="text-center text-white text-3xl font-sans font-semibold mt-4">No Coupans Yet</p>
                <p className="mt-3 text-gray-100/50 font-sans text-sm text-center">You don't have any coupon codes right<br/> now. Check back after your next order!</p>
            </div>
        </div>
    )
}

export default Coupans;