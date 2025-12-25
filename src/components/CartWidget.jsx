import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { useCart } from '../context/CartContext'

export default function CartWidget() {
    const { getCartCount } = useCart()
    const navigate = useNavigate()
    const cartCount = getCartCount()

    return (
        <div 
            className="cart-widget" 
            onClick={() => navigate('/cart')}
            style={{ cursor: 'pointer', position: 'relative' }}
        >
            <FaShoppingCart size={24} color="white" />
            {cartCount > 0 && (
                <span 
                    className="cart-count badge bg-danger rounded-pill position-absolute"
                    style={{ 
                        top: '-8px', 
                        right: '-8px',
                        fontSize: '0.75rem',
                        minWidth: '20px',
                        height: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    {cartCount}
                </span>
            )}
        </div>
    )
}
