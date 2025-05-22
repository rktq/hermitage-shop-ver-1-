import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, addToCart, removeFromCart, clearCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-page font-gilroy">
      <h2 className="cart-title font-source-serif-semibold">Корзина</h2>
      {cart.length === 0 ? (
        <div className="cart-empty">
          <p>Тут пока пусто 😔</p>
          <Link to="/">
            <button className="cart_button back" style={{ marginTop: "2rem" }}>
              ← Обратно в каталог
            </button>
          </Link>
        </div>
      ) : (
        <>
          <ul className="cart-list">
            {cart.map(item => (
              <li key={item.id} className="cart-item">
                <span className="cart-item-name font-source-serif">{item.name}</span>
                <span className="cart-item-price">{item.price} ₽</span>
                <span className="cart-item-qty">{item.quantity} шт.</span>
                <div className="cart-item-controls">
                  <button onClick={() => removeFromCart(item.id)} className="cart_button">−</button>
                  <button onClick={() => addToCart(item)} className="cart_button">+</button>
                </div>
              </li>
            ))}
          </ul>

          {/* Строка: Очистить корзину + Итого */}
          <div className="cart-total-row">
            <button onClick={clearCart} className="cart_button gray">Очистить корзину</button>
            <div className="cart-total">
              <span>Итого:</span>
              <span className="cart-sum">{total} ₽</span>
            </div>
          </div>

          {/* Строка: Обратно + Перейти к оформлению */}
          <div className="cart-bottom-row">
            <div className="cart-bottom-left">
              <Link to="/">
                <button className="cart_button back">← Обратно в каталог</button>
              </Link>
            </div>
            <div className="cart-bottom-right">
              <Link to="/checkout">
                <button className="cart_button checkout">Перейти к оформлению</button>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
