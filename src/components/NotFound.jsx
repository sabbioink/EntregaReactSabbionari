import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <div className="container">
            <div className="not-found">
                <div className="display-1 mb-4">Buscando</div>
                <h2 className="mb-3">404 — Página no encontrada</h2>
                <p className="lead text-muted mb-4">
                    Lo sentimos, la página que buscas no existe.
                </p>
                <Link to="/" className="btn btn-primary btn-lg">
                    Volver al inicio
                </Link>
            </div>
        </div>
    )
}