import React, { createContext, useState, Dispatch, SetStateAction } from "react";
import { ProdutcList } from "../types/Products";

interface basic {
    cart: ProdutcList,
    setCart: Dispatch<SetStateAction<ProdutcList>>,
    maxPrice: number
}

export const CartContext = createContext<basic>({cart:[], setCart:()=>{}, maxPrice:0});

export function CartProvider({ children }: {children:React.ReactNode}) {
    const [cart, setCart] = useState<ProdutcList>([]);
    const maxPrice = 0;
    
    return (
        <CartContext.Provider value={{
            maxPrice,
            cart,
            setCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

