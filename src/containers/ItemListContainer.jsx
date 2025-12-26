import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchProducts } from '../services/productService'
import ItemList from '../components/ItemList'

export default function ItemListContainer() {
    const { categoryId } = useParams()
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        setError(null)
        fetchProducts(categoryId)
            .then(res => setItems(res))
            .catch(err => setError(err.message))
            .finally(() => setLoading(false))
    }, [categoryId])

    if (loading) return (
        <div className="container mt-5 text-center">
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Cargando...</span>
            </div>
            <p className="mt-3">Cargando productos...</p>
        </div>
    )
    
    if (error) return <p>Error: {error}</p>

    return (
        <div>
            <h2>{categoryId ? `Categoría: ${categoryId}` : 'Todos los productos'}</h2>
            <ItemList items={items} />
        </div>
    )
}