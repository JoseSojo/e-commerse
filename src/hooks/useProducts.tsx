import { useContext, useEffect } from "react";
import { ProductContext } from "../context/ProductsContext";
import { FilterContext } from "../context/FilterContext";

export const useProducts = ({url}: {url:string}) => {
    const filterContext = useContext(FilterContext);
    const product = useContext(ProductContext);   

    useEffect(() => {
        console.log(url);
        fetch(`${url}`)
            .then(res => res.json())
            .then((products) => {
                product.setProducts(products)   
                console.log(products)             
            })
    }, [filterContext.url])
}