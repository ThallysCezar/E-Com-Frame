// import React from "react";
// import { useState } from "react";
import {createContext} from "react";

const WishListContext = createContext();

export const WishListProvider = ({children}) => {
    // const [cartProducts, setCartProducts] = useState();

    // const addToCart = item => {
        
    //     setCartProducts( old => ({
    //         ...old,
    //         [item.sku]: item
    //     }))
    // }

    // return(
    //     <WishListContext.Provider value={{cartProducts, addToCart}}>
    //         {children}
    //     </WishListContext.Provider>
    // )
}

export default WishListContext;