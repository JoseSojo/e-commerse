import { SetStateAction, Dispatch, useContext, useState } from "react";
import { ProdutcInterface } from "../types/Products";
import { BsCartFill, BsFillCartXFill } from "react-icons/bs";
import { CartContext } from "../context/CartContext";

interface ModalProps {
    closeModal: Dispatch<SetStateAction<boolean>>
}
export const Modal: React.FC<ModalProps> = ({closeModal}) => {
    const cartContext = useContext(CartContext);

    return (
        <div className='w-screen h-screen bg-black bg-opacity-50 top-0 flex justify-center items-center left-0 fixed z-40'>
            <div className='w-96 h-auto md:w-96 bg-gray-100 rounded-md'>
                <div className="grid grid-cols-3 rounded-t-md">
                    <button 
                        onClick={()=> closeModal(false)}
                        className='flex justify-center items-center  w-full rounded-tl-md px-5 py-5 bg-red-400 text-red-700 hover:bg-red-500 hover:text-red-800 font-bold'
                        >
                            X
                    </button>
                    <button 
                        onClick={()=> {
                            cartContext.setCart([]);
                            closeModal(false);
                        }}
                        className='flex justify-center items-center w-full px-5 py-5 bg-sky-400 text-sky-700 hover:bg-sky-500 hover:text-sky-800 font-bold'
                        >
                            <BsFillCartXFill />
                    </button>
                    <button 
                        className='flex justify-center items-center  w-full rounded-tr-md px-5 py-5 bg-green-400 text-green-700 hover:bg-green-500 hover:text-green-800 font-bold'
                        >
                            {cartContext.maxPrice}
                    </button>
                </div>
                

                <ul className='p-6 grid'>
                    {
                        cartContext.cart.map((item,i) => (
                            <li key={i} className='grid grid-cols-[.3fr_1fr_.3fr] items-center border-b-2 pb-2'>
                                <span className='font-bold font-lg'>{item.quantity} u</span>
                                <h4 className='font-semibold'>{item.title}</h4>
                                <span className='font-bold text-green-400'>{item.price}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

interface ModalAddCardProps {
    closeModal: Dispatch<SetStateAction<ProdutcInterface | null>>,
    child: ProdutcInterface
}
export const ModalAddCard: React.FC<ModalAddCardProps> = ({ closeModal, child }) => {
    const [quantity, setQuantity] = useState(1);
    const cartContext = useContext(CartContext)
    const addToCart = (item: ProdutcInterface) => {
        const cartPrimitive = cartContext.cart;
        const newItem = item;
        newItem.quantity = quantity > 0 ? quantity : 1;
        cartPrimitive.push(newItem);
        cartContext.maxPrice += child.price *  newItem.quantity;
        cartContext.setCart(cartPrimitive);
        closeModal(null);
    }

    return (
        <div className='w-screen h-screen bg-black bg-opacity-50 top-0 left-0 fixed z-40 flex justify-center items-center'>
            <div className='w-96 h-auto md:w-80 bg-gray-100 rounded-md flex flex-col items-center'>
                <img src={child.image} className='rounded-t-md h-64 w-full' />
                <button onClick={ () => closeModal(null) } className='w-80 absolute rounded-t-md px-5 py-5 bg-red-400 text-red-700 hover:bg-red-500 hover:text-red-800 font-bold'>X</button>
                <div className='p-6 grid'>
                    <h3 className='font-bold text-xl text-center'>
                        {child.title}
                    </h3>
                    <div className='grid grid-cols-1 md:grid-cols-[.5fr_1fr]'>
                        <span className="text-green-700 bg-green-200 text-center py-3 rounded-l-full">$ {child.price}</span>
                        <span className="text-teal-700 bg-teal-200 text-center py-3 rounded-r-full">{child.category}</span>
                    </div>
                    <form>
                        <input 
                            type='number' 
                            onChange={(event) => setQuantity(parseInt(event.target.value))}
                            value={quantity}
                            className='outline-nonde focus:outline-none p-3 text-black w-full mt-2'
                            placeholder='1.. 2.. 3' />
                    </form>
                </div>
                <button onClick={()=>addToCart(child)} className='flex justify-center items-center gap-5 w-80 rounded-b-md px-5 py-5 bg-orange-400 text-orange-700 hover:bg-orange-500 hover:text-orange-800 font-bold'>
                    Añadir
                    <BsCartFill />
                </button>
            </div>
        </div>
    );
}