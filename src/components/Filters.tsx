import { useContext, useEffect, useState } from "react"
import { BASIC_URL } from "../constanst";
import { FilterContext } from "../context/FilterContext";

interface FilterProps {}

export const Filter: React.FC<FilterProps> = () => {
    const [categories, setCategories] = useState<string[]>(['']);
    const [category, setCategory] = useState<string>('all');
    const filterContext = useContext(FilterContext);

    useEffect(() => {
        fetch(`${BASIC_URL}products/categories`)
            .then(res => res.json())
            .then(cat => setCategories(cat))
    }, []);

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        if(category === 'all') return filterContext.setUrl(`${BASIC_URL}products/`);
        return filterContext.setUrl(`${BASIC_URL}products/category/${category}`);
   }

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setCategory(event.target.value);
    }

    return (
        <form onSubmit={handleSubmit} className='grid grid-cols-[1fr_.5fr]'>
            <select name='filter' className='py-2 px-4 focus:outline-none text-md font-bold text-teal-600 border border-teal-300 border-spacing-4' onChange={handleChange}>
                <option value="all">Todas</option>
                {
                    categories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                    ))
                }
            </select>
            <input type='submit' value='Filtrar' className='py-2 px-4 font-bold bg-teal-300 text-teal-600 hover:bg-teal-500 hover:text-teal-800' />
        </form>
    )
}