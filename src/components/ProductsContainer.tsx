import React from "react";
import { ProdutcList } from "../types/Products";
import { ProductCard } from "./ProductCard";

interface ProductContainerProps {
    list: ProdutcList
}

export const ProductContainer: React.FC<ProductContainerProps> = ({list}) => {
    return (
        <main className='bg-gray-100 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg-grid-cols-4 py-5 px-10 gap-x-5 gap-y-10'>
            {
                list.map(product => (
                    <ProductCard key={product.id} item={product} />
                ))
            }
        </main>
    );
}
