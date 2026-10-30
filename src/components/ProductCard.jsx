import { useNavigate } from "react-router-dom";

import { useShop } from "../context/ShopContext";

import "./ProductCard.css";

function ProductCard({ product }) {
  const navigate = useNavigate();

  const {
    user,
    wishlist,
    addToCart,
    toggleWishlist,
    showToast
  } = useShop();

  let isWishlisted = false;

  for (const item of wishlist) {
    if (item.id === product.id) {
      isWishlisted = true;
      break;
    }
  }

  const discount = Math.round(
    ((product.oldPrice - product.price) /
      product.oldPrice) *
      100
  );

  const handleCart = (event) => {
    event.stopPropagation();

    const result = addToCart(product);

    if (result.requiresAccount) {
      showToast("Please login to add products to cart");
      navigate("/login");
    }
  };

  const handleWishlist = (event) => {
    event.stopPropagation();

    const result = toggleWishlist(product);

    if (result.requiresAccount) {
      showToast("Please login to use wishlist");
      navigate("/login");
    }
  };

  return (
    <div
      className="product-card"
      onClick={() =>
        navigate(`/product/${product.id}`)
      }
    >

      <div className="product-image-wrapper">

        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />

        {discount > 0 && (
          <span className="discount-badge">
            -{discount}%
          </span>
        )}

        <button
          className={
            isWishlisted
              ? "wishlist-btn active"
              : "wishlist-btn"
          }
          onClick={handleWishlist}
          aria-label="Add to wishlist"
        >
          {isWishlisted ? "♥" : "♡"}
        </button>

        {product.stock === 0 && (
          <div className="out-stock-overlay">
            <span>OUT OF STOCK</span>
          </div>
        )}

        <div className="quick-view">
          View Details
          <span>→</span>
        </div>

      </div>

      <div className="product-card-content">

        <p className="product-brand">
          {product.brand}
        </p>

        <h3>{product.name}</h3>

        <div className="product-rating">
          <div className="rating-box">
            <span>★</span>
            <strong>{product.rating}</strong>
          </div>

          <small>
            {product.reviews} ratings
          </small>
        </div>

        <div className="product-price">

          <strong>
            ₹{product.price}
          </strong>

          <del>
            ₹{product.oldPrice}
          </del>

          <span>
            {discount}% off
          </span>

        </div>

        <p className="product-stock">
          {product.stock > 0
            ? `${product.stock} available`
            : "Currently unavailable"}
        </p>

        <button
          className="add-cart-btn"
          onClick={handleCart}
          disabled={product.stock === 0}
        >
          <span>
            {product.stock === 0
              ? "Out of Stock"
              : "Add to Cart"}
          </span>

          {product.stock > 0 && (
            <b>→</b>
          )}
        </button>

      </div>

    </div>
  );
}

export default ProductCard;