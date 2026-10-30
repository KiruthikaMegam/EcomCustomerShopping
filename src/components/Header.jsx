import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useShop } from "../context/ShopContext";

import "./Header.css";

function Header() {
  const navigate = useNavigate();

  const {
    user,
    cartCount,
    wishlistCount,
    logout
  } = useShop();

  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSearch = (event) => {
    event.preventDefault();

    if (search) {
      navigate(
        `/products?search=${encodeURIComponent(search)}`
      );
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/");
    setMenuOpen(false);
  };

  return (
    <header className="header">

      <div className="top-announcement">
        <p>FREE SHIPPING ON ORDERS OVER ₹999</p>
        <span>New Season · New Style · New You</span>
      </div>

      <div className="header-container">

        <Link to="/" className="logo">
          <span className="logo-main">Buy</span>
          <span className="logo-sub">Easy</span>
        </Link>

        <form
          className="header-search"
          onSubmit={handleSearch}
        >
          <input
            type="text"
            placeholder="Search products, brands & more"
            value={search}
            onChange={(event) =>
              setSearch(event.target.value)
            }
          />

          <button type="submit">
            🔍
          </button>
        </form>

        <button
          className="mobile-menu-btn"
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav
          className={
            menuOpen
              ? "header-nav mobile-open"
              : "header-nav"
          }
        >

          {user ? (
            <div className="profile-menu">

              <button className="profile-button">
                <span className="profile-icon">
                  👤
                </span>

                <span>{user.name}</span>

                <span className="profile-arrow">
                  ⌄
                </span>
              </button>

              <div className="profile-dropdown">

                <div className="dropdown-heading">
                  <span>MY ACCOUNT</span>
                </div>

                <Link
                  to="/profile"
                  onClick={() => setMenuOpen(false)}
                >
                  <span>My Profile</span>
                  <small>→</small>
                </Link>

                <Link
                  to="/orders"
                  onClick={() => setMenuOpen(false)}
                >
                  <span>My Orders</span>
                  <small>→</small>
                </Link>

                <button onClick={handleLogout}>
                  <span>Logout</span>
                  <small>→</small>
                </button>

              </div>

            </div>
          ) : (
            <Link
              to="/login"
              className="login-button"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </Link>
          )}

          <Link
            to="/wishlist"
            className="header-action"
            onClick={() => setMenuOpen(false)}
          >
            <span className="action-icon">
              ♡
            </span>

            <span className="action-label">
              Wishlist
            </span>

            {wishlistCount > 0 && (
              <b>{wishlistCount}</b>
            )}
          </Link>

          <Link
            to="/cart"
            className="header-action"
            onClick={() => setMenuOpen(false)}
          >
            <span className="action-icon cart-icon">
              🛒
            </span>

            <span className="action-label">
              Cart
            </span>

            {cartCount > 0 && (
              <b>{cartCount}</b>
            )}
          </Link>

        </nav>

      </div>

      <div className="category-bar">

        <div className="category-inner">

          <Link
            to="/"
            className="category-item"
          >
            <div className="category-circle">
              <span>⌂</span>
            </div>

            <span>Home</span>
          </Link>

          <Link
            to="/products"
            className="category-item"
          >
            <div className="category-circle">
              <span>✦</span>
            </div>

            <span>All Products</span>
          </Link>

          <Link
            to="/products?category=Electronics"
            className="category-item"
          >
            <div className="category-circle">
              <span>📱</span>
            </div>

            <span>Electronics</span>
          </Link>

          <Link
            to="/products?category=Fashion"
            className="category-item"
          >
            <div className="category-circle">
              <span>👗</span>
            </div>

            <span>Fashion</span>
          </Link>

          <Link
            to="/products?category=Footwear"
            className="category-item"
          >
            <div className="category-circle">
              <span>👟</span>
            </div>

            <span>Footwear</span>
          </Link>

          <Link
            to="/products?category=Home"
            className="category-item"
          >
            <div className="category-circle">
              <span>🏠</span>
            </div>

            <span>Appliances</span>
          </Link>

        </div>

      </div>

    </header>
  );
}

export default Header;