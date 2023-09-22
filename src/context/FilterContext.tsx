import React, { createContext, useState, Dispatch, SetStateAction } from "react";
import { BASIC_URL } from "../constanst";


interface basic {
    url: string,
    setUrl: Dispatch<SetStateAction<string>>
}

export const FilterContext = createContext<basic>({url: `${BASIC_URL}products`, setUrl: ()=>{}});

export function FilterProvider({ children }: {children:React.ReactNode}) {
    const [url, setUrl] = useState<string>(`${BASIC_URL}products`);
    return (
        <FilterContext.Provider value={{
            url,
            setUrl
        }}>
            {children}
        </FilterContext.Provider>
    )
}

