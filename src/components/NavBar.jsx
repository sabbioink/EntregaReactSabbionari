import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import "../App.css";

function Navbar() {
    return (
        <header className="header">
            <div className="logo">TecnoStore</div>

            <nav className="nav-center">
                <a href="#">Inicio</a>
                <a href="#">Productos</a>
                <a href="#">Contacto</a>
            </nav>

            <div className="cart">
                <FaShoppingCart />
            </div>
        </header>
    );
}

export default Navbar;
