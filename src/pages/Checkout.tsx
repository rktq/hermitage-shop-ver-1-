import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext"; // если cart уже подключён

export default function Checkout() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();
  const { cart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <div className="checkout-root">
      <div className="checkout-container">
        {/* Левая колонка */}
        <div className="checkout-left">
          {/* Логотип (можно вынести выше, если он общий для всех страниц) */}
          <img src="/images/logo_hermitage.png" alt="Эрмитаж" className="checkout-logo" />

          <Link to="/cart" className="checkout-back-link">
            Назад в корзину
          </Link>
          <h2 className="checkout-title font-source-serif-semibold">Оформление заказа</h2>

          {submitted ? (
            <div className="checkout-success">
              <p>Спасибо за заказ! 🥳<br />Мы скоро свяжемся с вами.</p>
            </div>
          ) : (
            <form className="checkout-form" onSubmit={handleSubmit}>
              <div className="checkout-field">
                <label htmlFor="name" className="checkout-label font-source-serif">Имя</label>
                <input
                  className="checkout-input"
                  id="name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  required
                  autoFocus
                />
              </div>
              <div className="checkout-field">
                <label htmlFor="phone" className="checkout-label font-source-serif">Номер телефона</label>
                <input
                  className="checkout-input"
                  id="phone"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  required
                />
              </div>
              <div className="checkout-field">
                <label htmlFor="address" className="checkout-label font-source-serif">Адрес доставки</label>
                <textarea
                  className="checkout-input"
                  id="address"
                  value={address}
                  onChange={e => setAddress(e.target.value)}
                  required
                  rows={2}
                />
              </div>
              <button type="submit" className="cart_button checkout order-btn">
                Оформить заказ
              </button>
            </form>
          )}
        </div>

        {/* Правая колонка — Состав заказа */}
        <div className="checkout-summary">
          <div className="summary-title">Состав заказа</div>
          <div className="summary-list">
            {cart.map(item => (
              <div className="summary-item" key={item.id}>
                <div>
                  <div className="summary-item-title">{item.name}</div>
                  <div className="summary-item-desc">{item.quantity} шт</div>
                </div>
                <div className="summary-item-price">{item.price} ₽</div>
              </div>
            ))}
          </div>
          <div className="summary-divider" />
          <div className="summary-details-row">
            <span>{cart.length} товара</span>
            <span>{total} ₽</span>
          </div>
          <div className="summary-details-row">
            <span>Доставка</span>
            <span>Бесплатно</span>
          </div>
          <div className="summary-divider" />
          <div className="summary-total-row">
            <span>Сумма заказа</span>
            <span>{total} ₽</span>
          </div>
        </div>
      </div>
    </div>
  );
}
