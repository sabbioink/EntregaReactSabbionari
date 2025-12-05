import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import ItemListContainer from './containers/ItemListContainer'
import ItemDetailContainer from './containers/ItemDetailContainer'
import './App.css'


function NotFound() {
    return (
        <div style={{ padding: 40 }}>
            <h2>404 — Página no encontrada</h2>
            <p>Revisa la url o vuelve al catálogo.</p>
        </div>
    )
}


export default function App() {
    return (
        <div>
            <NavBar />
            <main style={{ padding: 20 }}>
                <Routes>
                    <Route path="/" element={<ItemListContainer />} />
                    <Route path="/category/:categoryId" element={<ItemListContainer />} />
                    <Route path="/item/:productId" element={<ItemDetailContainer />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
        </div>
    )
}