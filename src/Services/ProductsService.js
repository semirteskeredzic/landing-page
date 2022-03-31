import axios from "axios"

export const getProducts = (query) => {
    const res = axios.get(`https://dummyjson.com/products?limit=${query}`)
    return res
}

export const getCategories = () => {
    const res = axios.get(`https://dummyjson.com/products/categories`)
    return res
}

export const getCatWithLimit = (category, limit) => {
    const res = axios.get(`https://dummyjson.com/products/category/${category}?limit=${limit}`)
    return res
}

export const getCategory = (category) => {
    const res = axios.get(`https://dummyjson.com/products/category/${category}`)
    return res
}

export const getProduct = (id) => {
    const res = axios.get(`https://dummyjson.com/products/${id}`)
    return res
}