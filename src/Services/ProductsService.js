import axios from "axios"

export const getProducts = (query) => {
    const res = axios.get(`https://dummyjson.com/products?limit=${query}`)
    return res
}