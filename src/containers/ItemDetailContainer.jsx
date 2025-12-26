import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchProductById } from '../services/productService'
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

    if (loading) return (
        <div className="container mt-5 text-center">
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Cargando...</span>
            </div>
            <p className="mt-3">Cargando detalle del producto...</p>
        </div>
    )
    
    if (error) return <p>Error: {error}</p>

    return <ItemDetail product={product} />
}