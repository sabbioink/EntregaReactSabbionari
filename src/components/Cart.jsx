import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { FaTrash, FaPlus, FaMinus } from 'react-icons/fa'

export default function Cart() {
    const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart()
    const navigate = useNavigate()

    if (cart.length === 0) {
        return (
            <div className="container mt-5 text-center">
                <h2>Tu carrito está vacío</h2>
                <p className="text-muted mt-3">Agrega productos para comenzar tu compra</p>
                <button 
                    className="btn btn-primary mt-3"
                    onClick={() => navigate('/')}
                >
                    Ir al catálogo
                </button>
            </div>
        )
    }

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Carrito de Compras</h2>
            
            <div className="row">
                <div className="col-lg-8">
                    {cart.map(item => (
                        <div key={item.id} className="card mb-3">
                            <div className="card-body">
                                <div className="row align-items-center">
                                    <div className="col-md-2">
                                        <img 
                                            src={item.image} 
                                            alt={item.name}
                                            className="img-fluid rounded"
                                            style={{ maxHeight: '80px', objectFit: 'cover' }}
                                        />
                                    </div>
                                    <div className="col-md-4">
                                        <h5 className="mb-0">{item.name}</h5>
                                        <small className="text-muted">{item.category}</small>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="d-flex align-items-center justify-content-center">
                                            <button 
                                                className="btn btn-sm btn-outline-secondary"
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                            >
                                                <FaMinus size={12} />
                                            </button>
                                            <span className="mx-3 fw-bold">{item.quantity}</span>
                                            <button 
                                                className="btn btn-sm btn-outline-secondary"
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                            >
                                                <FaPlus size={12} />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col-md-2 text-center">
                                        <p className="mb-0 fw-bold">${(item.price * item.quantity).toLocaleString()}</p>
                                    </div>
                                    <div className="col-md-1 text-end">
                                        <button 
                                            className="btn btn-sm btn-danger"
                                            onClick={() => removeFromCart(item.id)}
                                        >
                                            <FaTrash />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Resumen de compra</h4>
                            <hr />
                            <div className="d-flex justify-content-between mb-2">
                                <span>Subtotal:</span>
                                <span>${getCartTotal().toLocaleString()}</span>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <span>Envío:</span>
                                <span className="text-success">Gratis</span>
                            </div>
                            <hr />
                            <div className="d-flex justify-content-between mb-4">
                                <strong>Total:</strong>
                                <strong className="text-primary">${getCartTotal().toLocaleString()}</strong>
                            </div>
                            
                            <button 
                                className="btn btn-primary w-100 mb-2"
                                onClick={() => navigate('/checkout')}
                            >
                                Finalizar compra
                            </button>
                            
                            <button 
                                className="btn btn-outline-primary w-100 mb-2"
                                onClick={() => navigate('/')}
                            >
                                Seguir comprando
                            </button>
                            
                            <button 
                                className="btn btn-outline-danger w-100"
                                onClick={clearCart}
                            >
                                Vaciar carrito
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}