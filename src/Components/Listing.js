import { CSpinner } from "@coreui/react";
import React, { useEffect, useRef, useState } from "react";
import { getProducts, getCategory } from "../Services/ProductsService";
import ListingActions from "./ListingActions";
import ListingProducts from "./ListingProducts";

const Listing = () => {

    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])
    const [productLimit, setProductLimit] = useState(8)
    const [totalProducts, setTotalProducts] = useState(32)
    const [selectedCategories, setSelectedCategories] = useState([])
    const [filtered, setFiltered] = useState(false)

    const endRef = useRef(null)

    useEffect(() => {
        if(selectedCategories.length === 0 || !filtered) {
            setLoading(true)
        getProducts(productLimit)
        .then(res => setProducts(res.data.products))
        .finally(
            setLoading(false)
        )
        }
    }, [productLimit, filtered])

    useEffect(() => {
        console.log('selectedCategories', selectedCategories.length)
        if (selectedCategories.length !== 0) {            
            setLoading(true)
            getCategory(selectedCategories)
            .then(res => setProducts(res.data.products), setLoading(false))
        }
    },[selectedCategories])

    return (
        <section>
        <ListingActions setfilteredcategories={setSelectedCategories} filter={setFiltered} />
        <ListingProducts products={products} limit={productLimit} setLimit={setProductLimit} total={totalProducts} selectedcategories={selectedCategories} />
        <div ref={endRef} className="text-center">
            {selectedCategories.length === 0 && 
            (productLimit <= totalProducts ? 
            (<button onClick={() => setProductLimit(productLimit + 4)} className="px-6 py-4 uppercase rounded-md bg-blue-600 hover:bg-blue-800 text-white cursor-pointer">
                {loading ? <CSpinner/> : 'Load More'}
            </button>)
            : <button className="px-6 py-4 uppercase rounded-md bg-gray-300 text-white" disabled>Load More</button> )}
        </div>
        </section>
    );
}

export default Listing;