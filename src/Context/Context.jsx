import React, { createContext, useState } from 'react';
import all_Product from '../Components/Assets/all_Product';



export const Context = createContext(null);

const getDefaultCart =( )=>{
    let cart ={};
    for (let index=0; index < all_Product.length+1; index++) {
            cart[index] =0;
    }
    return cart;
}

const ContextProvider =(props)=>{
    const [CartItems,setCartItems] = useState(getDefaultCart());
    
    const addToCart =(itemId)=> {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        console.log(CartItems);
        
    }

    const removeFromCart =(itemId)=> {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
    }

    const getTotalCartAmount =()=>{
        let totalAmount = 0;
        for (const item in CartItems)
        {
            if(CartItems[item]>0)
            {
                let itemInfo = all_Product.find((product)=>product.id===Number(item))
                totalAmount += itemInfo.new_price * CartItems[item];
            }
        }
        return totalAmount;
    }

    const getTotalCartItems =()=>{
        let totalItem = 0;
        for(const item in CartItems)
        {
            if(CartItems[item]>0)
            {
                totalItem+= CartItems[item];
            }
        }
        return totalItem;
    }
    

    const contextValue = {getTotalCartItems,getTotalCartAmount,all_Product,CartItems,addToCart,removeFromCart};
    return (
        <Context.Provider value = {contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;