import React from 'react'
import { NavLink } from 'react-router-dom'
import CartWidget from './CartWidget'

const categories = [
    { id: null, label: 'Todos' },
    { id: 'audio', label: 'Audio' },
    { id: 'perifericos', label: 'Periféricos' },
    { id: 'pantallas', label: 'Pantallas' }
]

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
            <div className="container-fluid">
                <NavLink className="navbar-brand fw-bold fs-4" to="/">
                    TecnoStore
                </NavLink>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        {categories.map(cat => (
                            <li key={String(cat.id)} className="nav-item">
                                <NavLink
                                    to={cat.id ? `/category/${cat.id}` : '/'}
                                    className={({ isActive }) =>
                                        `nav-link ${isActive ? 'active fw-bold' : ''}`
                                    }
                                >
                                    {cat.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                    <CartWidget />
                </div>
            </div>
        </nav>
    )
}