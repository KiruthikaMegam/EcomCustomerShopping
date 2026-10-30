import { Link } from "react-router-dom";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-newsletter">

        <div className="newsletter-content">
          <span className="newsletter-label">
            STAY IN THE LOOP
          </span>

          <h2>
            Style starts here.
          </h2>

          <p>
            Discover new arrivals, trending picks and
            exclusive offers from ShopEasy.
          </p>
        </div>

        <Link
          to="/products"
          className="newsletter-button"
        >
          Explore Collection
          <span>→</span>
        </Link>

      </div>

      <div className="footer-container">

        <div className="footer-brand">

          <Link to="/" className="footer-logo">
            <span>Buy</span>
            <small>Easy</small>
          </Link>

          <p>
            A curated destination for fashion,
            electronics, footwear, home essentials
            and everything you love.
          </p>

          <div className="footer-socials">
            <a href="#instagram" aria-label="Instagram">
              Instagram
            </a>

            <a href="#facebook" aria-label="Facebook">
              Facebook
            </a>

            <a href="#twitter" aria-label="Twitter">
              Twitter
            </a>
          </div>

        </div>

        <div className="footer-column">

          <h4>EXPLORE</h4>

          <Link to="/products">
            All Products
          </Link>

          <Link to="/products?category=Fashion">
            Fashion
          </Link>

          <Link to="/products?category=Electronics">
            Electronics
          </Link>

          <Link to="/products?category=Footwear">
            Footwear
          </Link>

          <Link to="/products?category=Home">
            Appliances
          </Link>

        </div>

        <div className="footer-column">

          <h4>YOUR ACCOUNT</h4>

          <Link to="/profile">
            My Profile
          </Link>

          <Link to="/wishlist">
            Wishlist
          </Link>

          <Link to="/cart">
            Shopping Cart
          </Link>

          <Link to="/orders">
            My Orders
          </Link>

          <Link to="/login">
            Login
          </Link>

        </div>

        <div className="footer-column footer-contact">

          <h4>GET IN TOUCH</h4>

          <p>
            support@shopeasy.com
          </p>

          <p>
            +91 98765 43210
          </p>

          <p>
            India
          </p>

          <span className="footer-note">
            We are always happy to help.
          </span>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 ShopEasy. All rights reserved.
        </p>

        <div className="footer-bottom-links">
          <span>Privacy</span>
          <span>Terms</span>
          <span>Shipping</span>
        </div>

        <span className="footer-made">
          Made with care in India
        </span>

      </div>

    </footer>
  );
}

export default Footer;