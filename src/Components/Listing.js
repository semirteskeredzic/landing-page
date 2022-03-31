import { CSpinner } from "@coreui/react";
import React, { useEffect, useRef, useState } from "react";
import { getProducts } from "../Services/ProductsService";

const Listing = () => {

    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])
    const [productLimit, setProductLimit] = useState(8)
    const [totalProducts, setTotalProducts] = useState(32)

    console.log('productLimit', productLimit)
    console.log('totalProducts', totalProducts)

    const endRef = useRef(null)

    const scrollToBottom = () => endRef.current.scrollIntoView({ behavior: "smooth" })
        
    useEffect(() => {
        setLoading(true)
        getProducts(productLimit)
        .then(res => setProducts(res.data.products))
        .finally(
            productLimit > 8 ? scrollToBottom() : null,
            setLoading(false)
        )
    }, [productLimit])

    if (loading || !products) return <CSpinner />

    return (
        <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {!products.length ? <CSpinner /> : 
                (products?.map(product => (
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
            )))}
        </div>
        <div ref={endRef} className="text-center">
            {productLimit <= totalProducts ? 
            (<button onClick={() => setProductLimit(productLimit + 4)} className="px-6 py-4 uppercase rounded-md bg-blue-600 hover:bg-blue-800 text-white cursor-pointer">
                {loading ? <CSpinner/> : 'Load More'}
            </button>)
            : <button className="px-6 py-4 uppercase rounded-md bg-gray-300 text-white" disabled>Load More</button> }
        </div>
        </section>
    );
}

export default Listing;