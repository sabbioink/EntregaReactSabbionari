import React from 'react'
import { Link } from 'react-router-dom'

export default function Item({ product }) {
    return (
        <div className="card h-100 shadow-sm hover-card">
            <img
                src={product.image}
                className="card-img-top"
                alt={product.title}
                style={{ height: '250px', objectFit: 'cover' }}
            />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text text-muted flex-grow-1">
                    {product.description}
                </p>
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <span className="fs-4 fw-bold text-primary">
                        ${product.price.toFixed(2)}
                    </span>
                    <span className="badge bg-secondary">
                        Stock: {product.stock}
                    </span>
                </div>
                <Link
                    to={`/item/${product.id}`}
                    className="btn btn-primary w-100"
                >
                    Ver Detalle
                </Link>
            </div>
        </div>
    )
}