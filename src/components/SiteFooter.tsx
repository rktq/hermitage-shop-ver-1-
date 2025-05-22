export default function SiteFooter() {
  return (
    <footer className="site-footer font-gilroy">
      <div className="footer-content">
        <div className="footer-brand">
          <img src="/images/logo_hermitage.png" alt="Логотип Эрмитаж" className="footer-logo" />
          <span className="footer-title">Кондитерская «Эрмитаж»</span>
        </div>
        <div className="footer-contacts">
          <span>Телефон: <a href="tel:+79001234567">+7 900 123-45-67</a></span>
          <span>Email: <a href="mailto:info@hermitage.ru">info@hermitage.ru</a></span>
        </div>
      </div>
      <div className="footer-copyright">
        © 2025 Кондитерская «Эрмитаж»
      </div>
    </footer>
  );
}
