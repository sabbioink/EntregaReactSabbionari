import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchProductById } from '../data/products'
import ItemDetail from '../components/ItemDetail'


export default function ItemDetailContainer() {
    const { productId } = useParams()
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)


    useEffect(() => {
        setLoading(true)
        setError(null)
        fetchProductById(productId)
            .then(res => setProduct(res))
            .catch(err => setError(err.message))
            .finally(() => setLoading(false))
    }, [productId])


    if (loading) return <p>Cargando detalle...</p>
    if (error) return <p>Error: {error}</p>


    return <ItemDetail product={product} />
}