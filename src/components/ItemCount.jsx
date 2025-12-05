import React, { useState } from 'react'

export default function ItemCount({ initial = 1, stock = 0, onAdd }) {
    const [qty, setQty] = useState(initial)

    function inc() { setQty(q => Math.min(stock, q + 1)) }
    function dec() { setQty(q => Math.max(1, q - 1)) }
    function handleAdd() { if (onAdd) onAdd(qty) }

    return (
        <div className="mt-4">
            <div className="input-group mb-3" style={{ maxWidth: '300px' }}>
                <button
                    className="btn btn-outline-secondary"
                    onClick={dec}
                    disabled={qty <= 1}
                >
                    <strong>−</strong>
                </button>
                <input
                    type="text"
                    className="form-control text-center fw-bold"
                    value={qty}
                    readOnly
                />
                <button
                    className="btn btn-outline-secondary"
                    onClick={inc}
                    disabled={qty >= stock}
                >
                    <strong>+</strong>
                </button>
            </div>

            <button
                className="btn btn-primary btn-lg w-100"
                onClick={handleAdd}
                disabled={stock <= 0}
                style={{ maxWidth: '300px' }}
            >
                Agregar al carrito
            </button>

            {stock === 0 && (
                <div className="alert alert-danger mt-3" role="alert">
                    Producto sin stock disponible!
                </div>
            )}
        </div>
    )
}