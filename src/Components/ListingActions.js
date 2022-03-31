import { FilterIcon, XIcon } from "@heroicons/react/solid";
import React, { useEffect, useState } from "react";
import { getCategories } from "../Services/ProductsService";

const ListingActions = ({setfilteredcategories, filter}) => {

    const [categories, setCategories] = useState([])
    const [openFilter, setOpenFilter] = useState(false)

    const setFilter = (category) => {
        setfilteredcategories(category)
        filter(true)
    }

    useEffect(() => {
        getCategories().then(res => setCategories(res.data))
    },[])

    return(
        <div className="w-full p-4 border-2 bg-gray-100">
            <button className="shadow-md bg-blue-300 text-white rounded-md py-3 px-6 hover:bg-blue-700" onClick={() => setOpenFilter(!openFilter)}>
                <span className="uppercase">Filter</span> 
                <FilterIcon className="ml-2 inline-block w-6 h-6 text-blue-500" />
            </button>
            {openFilter && (
                <div className='inline-block h-1/2 w-full mt-2'>
                <form className="flex flex-wrap">
                    {categories.map(category => (
                        <label key={category} className="inline-block px-4">
                            <input
                                id="category"
                                type="radio"
                                name="filter"
                                value={category} 
                                onChange={() => setFilter(category)} 
                                />
                            <span className="ml-2">{category}</span>
                        </label>
                    ))}
                </form>
                <button onClick={() => {
                    setfilteredcategories([])
                    setOpenFilter(false)
                    filter(false)
                }} className="text-white mt-6 rounded-sm py-2 px-4 w-auto bg-blue-500 shadow-md hover:bg-blue-700 uppercase"><XIcon className="w-5 mr-2 inline-block align-sub" />Clear</button>
            </div>
            )}          
        </div>
    )
}

export default ListingActions