import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import ItemCount from './ItemCount'

export default function ItemDetail({ product }) {
    const [quantityAdded, setQuantityAdded] = useState(0)
    const { addToCart } = useCart()
    const navigate = useNavigate()

    if (!product) return null

    const handleAddToCart = (quantity) => {
        const productToAdd = {
            id: product.id,
            name: product.title,
            price: product.price,
            image: product.image,
            category: product.category,
            stock: product.stock
        }
        
        addToCart(productToAdd, quantity)
        setQuantityAdded(quantity)
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-5">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="img-fluid rounded shadow"
                    />
                </div>
                <div className="col-md-7">
                    <h1 className="display-5 mb-3">{product.title}</h1>
                    <p className="lead text-muted">{product.description}</p>
                    
                    <div className="card bg-light mb-4">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <h3 className="text-primary mb-0">
                                        ${product.price.toFixed(2)}
                                    </h3>
                                </div>
                                <div>
                                    <span className={`badge ${product.stock > 0 ? 'bg-success' : 'bg-danger'} fs-6`}>
                                        {product.stock > 0 ? `Stock: ${product.stock}` : 'Sin stock'}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {quantityAdded > 0 ? (
                        <div className="d-flex gap-2">
                            <button 
                                className="btn btn-success btn-lg flex-fill"
                                onClick={() => navigate('/cart')}
                            >
                                Ir al carrito
                            </button>
                            <button 
                                className="btn btn-outline-primary btn-lg flex-fill"
                                onClick={() => navigate('/')}
                            >
                                Seguir comprando
                            </button>
                        </div>
                    ) : (
                        <ItemCount
                            initial={1}
                            stock={product.stock}
                            onAdd={handleAddToCart}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}