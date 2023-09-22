import { ProdutcInterface } from "../types/Products";
import { BsCartFill, BsCoin } from 'react-icons/bs';
import { useState } from "react";
import { ModalAddCard } from "./Modal";

interface ItemCardProps {
    bg:string,
    content?:string | number,
    Ico:any
}
const ItemCard: React.FC<ItemCardProps> = ({bg,content,Ico}) => {
    return (
        <span 
            className={`${bg} w-full flex justify-center items-center text-center p-4 rounded-full font-extrabold hover:scale-[1.04] hover:shadow-lg`}>
            {content}
            {Ico}
        </span>
    );
}

interface ProductCardProps {
    item: ProdutcInterface
}
export const ProductCard: React.FC<ProductCardProps> = ({ item }) => {
    const [modal, setModal] = useState<ProdutcInterface | null>(null);

    return (
        <>
            {modal && <ModalAddCard closeModal={setModal} child={item} />}
            <aside className='bg-gray-50 rounded shadow flex flex-col justify-between items-center hover:scale-[1.05]'>
                <div className='flex flex-col items-center'>
                    <div className='z-20 translate-y-4 grid grid-cols-2'>
                        <ItemCard
                            bg='bg-green-200 text-green-500 hover:bg-green-300 hover:text-green-600'
                            content={item.price}
                            Ico={<BsCoin />}
                            />
                        <span 
                            onClick={ () => { setModal(item) } }
                            className={`bg-orange-200 text-orange-500 hover:bg-orange-300 hover:text-orange-600 w-full flex justify-center items-center text-center p-4 rounded-full font-extrabold hover:scale-[1.04] hover:shadow-lg`}>
                            <BsCartFill  />
                        </span>
                    </div>
                    <img src={item.image} alt={item.title} className='z-10 w-44 h-44 object-cover' />
                </div>
                <div className='p-5 flex mb-auto flex-col'>
                    <h2 className='text-center text-xl font-bold'>
                        {item.title}
                    </h2>
                    <p className='text-center text-sm text-gray-500'>
                        {item.description}
                    </p>
                </div>
                
            </aside>
        </>
    );
}