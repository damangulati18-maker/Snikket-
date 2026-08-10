import oversize from "./images/oversize.jpeg";
import regular from "./images/regular.jpeg"
import shorts from "./images/shorts.jpeg"
import shirts from "./images/shirts.avif"
import denims from "./images/denim.jpg"
import joggers from "./images/joggers.jpg"


import { Link} from "react-router";

const MonthOffers = ()=>{
    return(
      <>
        {[
          { name: "Pure Cotton Oversized T-shirts", price: "399",photo:oversize,path:"oversized",off:"45% OFF"},
          { name: "Premium Regular Tee", price: "299",photo:regular,path:"regular",off:"40% OFF" },
          { name: "Shorts Collection", price: "499",photo:shorts,path:"shorts" ,off:"35% OFF"},
          { name: "Formal & Casual Shirts", price: "699",photo:shirts,path:"shirts" ,off:"10% OFF"},
          { name: "WIde Range of Denims", price: "899",photo:denims,path:"denims" ,off:"20% OFF"},
          { name: "Premium Joggers", price: "799",photo:joggers,path:"joggers" ,off:"50% OFF"},
        ].map((item, i) => (
          <Link to="/collection" state={{type:item.path}}>
            <div key={i} className="bg-white rounded-xl shadow hover:shadow-2xl transition  hover:border hover:border-red-500/90 hover:cursor-pointer">
              <div className="h-64 rounded-xl">
                <img src={item.photo} className="group-hover:scale-110 transition duration-500  h-64 w-full rounded-t-xl" alt="add photo"/>
              </div>
              <h3 className="font-semibold font-sans text-lg ml-4 mt-3">{item.name}</h3>
              <p className="text-gray-600 font-serif ml-4">Starting at</p>
              <p className="ml-4 font-bold font-serif text-red-500/90 pb-2"><span className="font-sans">₹</span> {item.price}</p>
              <div className="inline-block bg-red-100 text-red-500 text-xs font-bold px-3 py-1 rounded-full tracking-wide ml-2 mb-6 mt-1">{item.off}</div>    
            </div>
          </Link>
        ))}
      </>
    )
}

export default MonthOffers;