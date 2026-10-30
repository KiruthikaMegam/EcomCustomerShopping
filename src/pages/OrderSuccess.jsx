import { Link, useParams } from "react-router-dom";

import "./OrderSuccess.css";

function OrderSuccess() {
  const { id } = useParams();

  return (
    <div className="order-success">

      <div className="success-decoration success-decoration-one"></div>
      <div className="success-decoration success-decoration-two"></div>

      <div className="success-card">

        <div className="success-top">
          <span>
            BUY EASY
          </span>

          <small>
            ORDER CONFIRMATION
          </small>
        </div>

        <div className="success-icon-wrapper">

          <div className="success-icon">
            ✓
          </div>

        </div>

        <div className="success-content">

          <span className="success-label">
            THANK YOU FOR YOUR ORDER
          </span>

          <h1>
            Order Placed
            <br />
            <em>Successfully!</em>
          </h1>

          <p>
            Thank you for shopping with
            ShopEasy. Your order has been
            successfully placed and is now
            being prepared.
          </p>

        </div>

        <div className="order-number">

          <span>
            ORDER ID
          </span>

          <strong>
            #{id}
          </strong>

        </div>

        <div className="success-line">
          <span></span>
          <i>YOUR ORDER IS ON ITS WAY</i>
          <span></span>
        </div>

        <div className="success-actions">

          <Link
            to="/orders"
            className="primary-success-btn"
          >
            View My Orders
            <span>→</span>
          </Link>

          <Link
            to="/products"
            className="secondary-success-btn"
          >
            Continue Shopping
          </Link>

        </div>

        <div className="success-footer">
          <span>◇</span>
          Thank you for choosing ShopEasy
        </div>

      </div>

    </div>
  );
}

export default OrderSuccess;