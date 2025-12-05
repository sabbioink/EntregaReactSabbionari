import React from 'react'
import ItemCount from './ItemCount'

export default function ItemDetail({ product }) {
    if (!product) return null

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

                    <ItemCount
                        initial={1}
                        stock={product.stock}
                        onAdd={(qty) => {
                            alert(`Agregaste ${qty} unidades al carrito`)
                        }}
                    />
                </div>
            </div>
        </div>
    )
}