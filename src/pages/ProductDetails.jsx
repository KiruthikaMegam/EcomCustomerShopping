import { useState } from "react";
import {
  Link,
  useNavigate,
  useParams
} from "react-router-dom";

import { useShop } from "../context/ShopContext";

import ProductCard from "../components/ProductCard";

import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();

  const navigate = useNavigate();

  const {
    products,
    addToCart,
    toggleWishlist,
    wishlist,
    showToast
  } = useShop();

  const [quantity, setQuantity] = useState(1);

  let product = null;

  for (const item of products) {
    if (String(item.id) === String(id)) {
      product = item;
      break;
    }
  }

  if (!product) {
    return (
      <div className="details-not-found">

        <div className="details-not-found-icon">
          ?
        </div>

        <span>PRODUCT INFORMATION</span>

        <h2>
          Product Not Found
        </h2>

        <p>
          We couldn't find the product you're looking for.
        </p>

        <Link to="/products">
          Back to Products
          <b>→</b>
        </Link>

      </div>
    );
  }

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

  const handleCart = () => {
    for (let i = 0; i < quantity; i++) {
      const result = addToCart(product);

      if (result.requiresAccount) {
        showToast("Please login first");
        navigate("/login");
        return;
      }
    }

    showToast("Product added to cart");
  };

  const handleBuyNow = () => {
    const result = addToCart(product);

    if (result.requiresAccount) {
      showToast("Please login first");
      navigate("/login");
      return;
    }

    navigate("/cart");
  };

  const handleWishlist = () => {
    const result = toggleWishlist(product);

    if (result.requiresAccount) {
      showToast("Please login first");
      navigate("/login");
    }
  };

  const relatedProducts = products.filter(
    (item) =>
      item.category === product.category &&
      item.id !== product.id
  );

  return (
    <div className="product-details-page">

      <div className="details-breadcrumb">

        <Link to="/">
          Home
        </Link>

        <span>›</span>

        <Link to="/products">
          Products
        </Link>

        <span>›</span>

        <span>
          {product.name}
        </span>

      </div>

      <section className="product-details-card">

        <div className="details-image-section">

          <div className="details-image-label">
            <span>01</span>
            PRODUCT VIEW
          </div>

          {discount > 0 && (
            <div className="details-discount">
              -{discount}%
            </div>
          )}

          <button
            className={
              isWishlisted
                ? "image-wishlist active"
                : "image-wishlist"
            }
            onClick={handleWishlist}
          >
            {isWishlisted ? "♥" : "♡"}
          </button>

          <img
            src={product.image}
            alt={product.name}
          />

          <div className="image-bottom-note">
            <span></span>
            BUY EASY COLLECTION
          </div>

        </div>

        <div className="details-info">

          <div className="details-top-label">
            <span></span>
            {product.category}
          </div>

          <p className="details-brand">
            {product.brand}
          </p>

          <h1>
            {product.name}
          </h1>

          <div className="details-rating">

            <div className="rating-badge">
              <span>★</span>
              {product.rating}
            </div>

            <span>
              {product.reviews} Ratings & Reviews
            </span>

          </div>

          <div className="details-price">

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

          <p className="tax-note">
            Inclusive of all applicable taxes
          </p>

          <div className="details-line"></div>

          <div className="details-offer">

            <div className="offer-heading">
              <span>✦</span>
              <strong>Available Offers</strong>
            </div>

            <p>
              <span>✓</span>
              Special price available
            </p>

            <p>
              <span>✓</span>
              Free delivery on eligible orders
            </p>

            <p>
              <span>✓</span>
              Secure payment
            </p>

          </div>

          <div className="quantity-section">

            <div>
              <label>
                Quantity
              </label>

              <small>
                {product.stock > 0
                  ? `${product.stock} available`
                  : "Currently unavailable"}
              </small>
            </div>

            <div className="quantity-control">

              <button
                disabled={quantity === 1}
                onClick={() =>
                  setQuantity(quantity - 1)
                }
              >
                −
              </button>

              <span>
                {quantity}
              </span>

              <button
                disabled={
                  quantity >= product.stock
                }
                onClick={() =>
                  setQuantity(quantity + 1)
                }
              >
                +
              </button>

            </div>

          </div>

          <div className="details-actions">

            <button
              className="details-cart"
              onClick={handleCart}
            >
              <span>
                Add to Cart
              </span>

              <b>
                →
              </b>
            </button>

            <button
              className="details-buy"
              onClick={handleBuyNow}
            >
              <span>
                Buy Now
              </span>

              <b>
                →
              </b>
            </button>

          </div>

          <button
            className={
              isWishlisted
                ? "details-wishlist active"
                : "details-wishlist"
            }
            onClick={handleWishlist}
          >
            <span>
              {isWishlisted ? "♥" : "♡"}
            </span>

            {isWishlisted
              ? "Remove from Wishlist"
              : "Add to Wishlist"}
          </button>

          <div className="details-description">

            <div className="description-heading">

              <span>
                ABOUT THIS PRODUCT
              </span>

              <b>
                02
              </b>

            </div>

            <h3>
              Description
            </h3>

            <p>
              {product.description}
            </p>

          </div>

        </div>

      </section>

      <section className="details-service-strip">

        <div className="service-item">
          <span>◇</span>
          <div>
            <strong>
              Secure Shopping
            </strong>
            <small>
              Safe & trusted checkout
            </small>
          </div>
        </div>

        <div className="service-item">
          <span>↗</span>
          <div>
            <strong>
              Easy Delivery
            </strong>
            <small>
              Fast delivery to your door
            </small>
          </div>
        </div>

        <div className="service-item">
          <span>✓</span>
          <div>
            <strong>
              Quality Assured
            </strong>
            <small>
              Products you'll love
            </small>
          </div>
        </div>

      </section>

      {relatedProducts.length > 0 && (
        <section className="related-section">

          <div className="related-heading">

            <div>
              <span>
                YOU MAY ALSO LIKE
              </span>

              <h2>
                Related Products
              </h2>

              <p>
                More styles selected for you.
              </p>
            </div>

            <Link to="/products">
              View All
              <span>→</span>
            </Link>

          </div>

          <div className="related-products">
            {relatedProducts
              .slice(0, 4)
              .map((item) => (
                <ProductCard
                  key={item.id}
                  product={item}
                />
              ))}
          </div>

        </section>
      )}

    </div>
  );
}

export default ProductDetails;