import React, { createContext, useState, Dispatch, SetStateAction } from "react";
import { ProdutcList } from "../types/Products";

const basicMock = {
    "id":1,"title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price":109.95,
    "description":"Your in the padded sleeve, your everyday",
    "category":"men's clothing",
    "image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating":{"rate":3.9,"count":120}
}

interface basic {
    product: ProdutcList,
    setProducts: Dispatch<SetStateAction<ProdutcList>>
}

export const ProductContext = createContext<basic>({product:[basicMock], setProducts:()=>{}});

export function ProductProvider({ children }: {children:React.ReactNode}) {
    const [product, setProducts] = useState<ProdutcList>([basicMock]);
    return (
        <ProductContext.Provider value={{
            product,
            setProducts
        }}>
            {children}
        </ProductContext.Provider>
    )
}

