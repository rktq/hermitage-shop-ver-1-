import { useCart } from "../context/CartContext";

export type Product = {
  id: number;
  name: string;
  description: string;
  weight?: string;
  price: number;
  image: string;
  category: string;
};

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  return (
    <div className="product-card-main">
      <img src={product.image} alt={product.name} className="product-img-main" />
      <div>
        <div className="product-title-main">{product.name}</div>
        <div className="product-desc-main">{product.description}</div>
      </div>
      <div className="product-card-bottom-fixed">
        <div>
          {product.weight && (
            <div className="product-weight-main">{product.weight}</div>
          )}
          <span className="product-price-main">{product.price}&nbsp;₽</span>
        </div>
        <button
          className="add-cart-btn-main"
          onClick={() => addToCart({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
          })}
        >
          В корзину
        </button>
      </div>
    </div>
  );
}

