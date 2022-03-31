import React, { useEffect, useState } from "react";
import { getProduct } from "../Services/ProductsService";

const Product = () => {

    const [product, setProduct] = useState({})
    const [image, setImage] = useState()

    useEffect(() => {
        var productId = window.location.pathname.split('/')[2]
        getProduct(productId).then(res => 
            {setProduct(res.data) 
            setImage(res.data.images[0])}).finally(() => console.log(product))
    },[])

    return (
        <div>
            {product && (
                <div className="w-full p-8">
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="w-full md:w-2/3 h-[500px]">
                    <img className="m-0 m-auto max-h-full" src={image} alt={product.name} />
                    </div>  
                    <div className="w-full md:w-1/3 border-2 p-8">
                        <div className="relative">
                            <span className="top-0 left-3 italic text-gray-400" >{product.category}</span>
                            <h1 className="text-2xl font-bold mt-9">{product?.title}</h1>
                            <p className="text-lg mt-4">{product?.price}</p>
                        </div>
                    </div>
                </div>
                <div className="w-full mt-12">
                    <span className="text-lg">Description</span>
                    <p className="text-base">{product.description}</p>
                </div>
            </div>
            )}
        </div>
    )
}

export default Product