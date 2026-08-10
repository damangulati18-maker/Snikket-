import { configureStore } from "@reduxjs/toolkit";

import  {cartReducer } from "./clothslices";

const StoreReduxCloth =configureStore({
    reducer:{
        cart:cartReducer,
    }
});


export default StoreReduxCloth;