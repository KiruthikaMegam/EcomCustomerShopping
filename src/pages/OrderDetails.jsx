import { Link, useParams } from "react-router-dom";

import { useShop } from "../context/ShopContext";

import "./OrderDetails.css";

function OrderDetails() {
  const { id } = useParams();

  const { orders } = useShop();

  let order = null;

  for (const item of orders) {
    if (String(item.id) === String(id)) {
      order = item;
      break;
    }
  }

  if (!order) {
    return (
      <div className="order-details-not-found">

        <div className="not-found-icon">
          ?
        </div>

        <span>ORDER INFORMATION</span>

        <h2>Order Not Found</h2>

        <p>
          We couldn't find the order you're looking for.
        </p>

        <Link to="/orders">
          Back to Orders
          <b>→</b>
        </Link>

      </div>
    );
  }

  return (
    <div className="order-details-page">

      <div className="order-details-header">

        <div className="order-title">

          <span>
            YOUR PURCHASE
          </span>

          <h1>
            Order Details
          </h1>

          <p>
            Order ID: <strong>#{order.id}</strong>
          </p>

        </div>

        <div className="order-status">
          <span className="status-dot"></span>
          {order.status}
        </div>

      </div>

      <div className="tracking">

        <div className="tracking-step active">
          <div className="tracking-icon">
            ✓
          </div>

          <span>
            Order Placed
          </span>
        </div>

        <div className="tracking-line active"></div>

        <div className="tracking-step">
          <div className="tracking-icon">
            2
          </div>

          <span>
            Shipped
          </span>
        </div>

        <div className="tracking-line"></div>

        <div className="tracking-step">
          <div className="tracking-icon">
            3
          </div>

          <span>
            Delivered
          </span>
        </div>

      </div>

      <section className="order-details-card products-card">

        <div className="card-heading">

          <div>
            <span>
              YOUR ITEMS
            </span>

            <h2>
              Products
            </h2>
          </div>

          <small>
            {order.items.length}{" "}
            {order.items.length === 1
              ? "item"
              : "items"}
          </small>

        </div>

        <div className="detail-products">

          {order.items.map((item) => (
            <div
              className="detail-product"
              key={item.id}
            >

              <div className="detail-product-image">
                <img
                  src={item.image}
                  alt={item.name}
                />
              </div>

              <div className="detail-product-info">

                <span>
                  {item.brand}
                </span>

                <h3>
                  {item.name}
                </h3>

                <p>
                  Quantity: {item.quantity}
                </p>

              </div>

              <div className="detail-product-price">
                <span>
                  ITEM TOTAL
                </span>

                <strong>
                  ₹{item.price * item.quantity}
                </strong>

                <small>
                  ₹{item.price} each
                </small>
              </div>

            </div>
          ))}

        </div>

      </section>

      <div className="order-info-layout">

        <section className="order-details-card">

          <div className="card-heading">

            <div>
              <span>
                DELIVERY
              </span>

              <h2>
                Delivery Address
              </h2>
            </div>

            <div className="card-number">
              01
            </div>

          </div>

          <div className="address-content">

            <h3>
              {order.address.name}
            </h3>

            <p>
              {order.address.address}
            </p>

            <p>
              {order.address.city}
              {" — "}
              {order.address.pincode}
            </p>

            <div className="phone-line">
              <span>PHONE</span>
              {order.address.phone}
            </div>

          </div>

        </section>

        <section className="order-details-card">

          <div className="card-heading">

            <div>
              <span>
                PAYMENT
              </span>

              <h2>
                Payment Details
              </h2>
            </div>

            <div className="card-number">
              02
            </div>

          </div>

          <div className="payment-content">

            <div className="payment-row">

              <span>
                Payment Method
              </span>

              <strong>
                {order.payment}
              </strong>

            </div>

            <div className="payment-row">

              <span>
                Order Total
              </span>

              <strong className="payment-total">
                ₹{order.total}
              </strong>

            </div>

            <div className="payment-note">
              <span>✓</span>
              Payment information is securely recorded.
            </div>

          </div>

        </section>

      </div>

      <div className="order-bottom">

        <Link
          to="/orders"
          className="back-orders"
        >
          <span>←</span>
          Back to My Orders
        </Link>

        <div className="order-bottom-note">
          <span></span>
          THANK YOU FOR SHOPPING WITH BUY EASY
        </div>

      </div>

    </div>
  );
}

export default OrderDetails;