import React from 'react'
import Item from './Item'

const ItemList = ({ items }) => {
    if (!items || items.length === 0) {
        return (
            <div className="alert alert-info text-center" role="alert">
                No hay productos disponibles en esta categoría
            </div>
        )
    }

    return (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {items.map((prod) => (
                <div key={prod.id} className="col">
                    <Item product={prod} />
                </div>
            ))}
        </div>
    )
}

export default ItemList