import { useContext, useState } from "react";
import { useProducts } from "./hooks/useProducts";
import { ProductContainer } from "./components/ProductsContainer";
import { ProductContext } from "./context/ProductsContext";
import { CartContext } from "./context/CartContext";
import { BsCartFill } from 'react-icons/bs';
import { Modal } from "./components/Modal";
import { Filter } from "./components/Filters";
import { FilterContext } from "./context/FilterContext";

export default function App() {
  const [modal, setModal] = useState(false);
  const productContext = useContext(ProductContext);
  const cartContext = useContext(CartContext);
  const filterContext = useContext(FilterContext);

  useProducts({url: filterContext.url});
  
  return (
    <>

      { modal && <Modal closeModal={setModal} /> }         
      <header className='py-6 bg-gray-200 flex flex-col items-center justify-center md:px-10 md:flex-row md:justify-between gap-y-5'>
        <div className='flex items-center gap-10'>
          <h1 className='text-xl font-extrabold'>Eccomerce</h1>
          <div className='flex'>
            <BsCartFill onClick={ ()=>setModal(true) } className='text-sky-900 text-3xl' />
            <span className='-translate-x-9 translate-y-5 text-orange-900 font-bold rounded-full flex items-center text-xs'>{cartContext.maxPrice}$</span>
          </div>
        </div>
        <Filter />
      </header>
      <ProductContainer list={productContext.product} />
    </>
  );
}