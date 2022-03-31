import React, { useEffect, useState } from "react";
import { getCategory } from "../Services/ProductsService";
import ListingProducts from "./ListingProducts";

const Category = () => {

    const [products, setProducts] = useState()
    const [category, setCategory] = useState(window.location.pathname.split('/')[3])

    useEffect(() => {
        let cat = window.location.pathname.split('/')[3]
        console.log('category', cat)
        getCategory(cat).then(res => setProducts(res.data.products)).finally(() => console.log(products))
    },[products])

    return (
        <div className="p-4 mt-3">
        <h1 className="uppercase mb-10 text-5xl">{category}</h1>
        {products && <ListingProducts products={products} />}
        </div>
    );
}

export default Category;