import React, { useEffect, useState } from "react";

const ListingProducts = ({products, selectedcategories }) => {

    const [date, setDate] = useState(Date.now())

    useEffect(() => {
        setDate(Date.now())
    },[products, selectedcategories])

    return (
        <div key={date}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"> 
                {
                    products?.map(product => (
                        <div key={product.id} className="border-4 h-[500px] rounded-md p-4 m-4">
                            <div className="m-0 m-auto h-2/4">
                                <img className="m-0 m-auto max-h-full" src={product.images[0]} alt={product.name} />
                            </div>
                            <div className="h-1/4 mt-3">
                                <p className="text-sm font-semibold italic text-gray-300">{product.category}</p>
                                <h3 className="text-xl mb-2">{product.title}</h3>
                                <p className="text-lg font-extrabold">{product.price}</p>     
                            </div>
                            <p className="h-[48px] mt-2 text-xs overflow-hidden">{product.description}</p>
                            <button className="w-full mt-3 botom-0 shadow-sm rounded-md p-2 bg-blue-500 text-white hover:bg-blue-700">Detail</button>
                        </div>
                ))
                }
        </div>
        </div>
    )
}

export default ListingProducts