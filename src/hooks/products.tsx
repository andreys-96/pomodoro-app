import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { IProduct } from "../interfaces/product.interface";

export function useProducts() {
    const [products, setProducts] = useState<IProduct[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    async function fetchProducts() {
        try {
            setLoading(true)
            const url = `${process.env.REACT_APP_API_URL}/products`
            console.log(url)
            const response = await axios.get(url)
            setProducts(response.data.products)
            setLoading(false)
        } catch (error) {
            const err = error as AxiosError
            setError(err.message)
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return({ products, error, loading })
}