import { useNavigate } from "react-router-dom";

import { useShop } from "../context/ShopContext";

import ProductCard from "../components/ProductCard";

import "./Wishlist.css";

function Wishlist() {
  const navigate = useNavigate();

  const { wishlist } = useShop();

  if (wishlist.length === 0) {
    return (
      <div className="empty-wishlist-page">
        <div className="empty-wishlist-card">
          <div className="empty-wishlist-icon">♡</div>

          <h2>Your Wishlist is Empty</h2>

          <p>
            Save your favorite products and find them here whenever you want.
          </p>

          <button
            onClick={() => navigate("/products")}
            className="wishlist-shop-button"
          >
            Explore Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="wishlist-page">

      <div className="wishlist-header">
        <div>
          <h1>My Wishlist</h1>

          <p>
            {wishlist.length}{" "}
            {wishlist.length === 1 ? "product" : "products"} saved
          </p>
        </div>

        <button
          className="wishlist-continue-button"
          onClick={() => navigate("/products")}
        >
          Continue Shopping
        </button>
      </div>

      <div className="wishlist-products">
        {wishlist.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

    </div>
  );
}

export default Wishlist;