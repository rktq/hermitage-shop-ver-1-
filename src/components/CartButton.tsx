import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function CartButton() {
  const { cart } = useCart();
  const navigate = useNavigate();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <button
      className="cart-button"
      onClick={() => navigate("/cart")}
    >
      Корзина {totalItems > 0 && `(${totalItems})`}
    </button>
  );
}
