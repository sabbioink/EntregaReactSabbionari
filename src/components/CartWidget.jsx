import { FaShoppingCart } from "react-icons/fa";
import '../App.css';

function CartWidget() {
    const cartCount = 3;

    return (
        <div className="cart-widget">
            <FaShoppingCart />
            <span className="cart-count">{cartCount}</span>
        </div>
    );
}

export default CartWidget;