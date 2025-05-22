import { useNavigate } from "react-router-dom";

const categories = [
  { id: "popular", label: "Популярное" },
  { id: "desserts", label: "Десерты" },
  { id: "cookies", label: "Печенье" },
  { id: "pastry", label: "Пирожные" },
  { id: "cakes", label: "Торты" },
];

export default function HeaderWithCategories() {
  const navigate = useNavigate();

  const handleNavClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleCartClick = () => {
    navigate("/cart");
  };

  return (
    <header className="glass-header">
      <div className="glass-header-content">
        <img src="/images/logo_hermitage.png" alt="Эрмитаж" className="glass-logo" />
        {/* Вот тут добавляем внешний div */}
        <div className="glass-nav-outer">
          <nav className="glass-nav">
            {categories.map(cat => (
              <button
                key={cat.id}
                className="glass-nav-btn"
                onClick={() => handleNavClick(cat.id)}
                type="button"
              >
                {cat.label}
              </button>
            ))}
          </nav>
        </div>
        <button className="glass-cart-btn" onClick={handleCartClick}>Корзина</button>
      </div>
    </header>
  );
}
