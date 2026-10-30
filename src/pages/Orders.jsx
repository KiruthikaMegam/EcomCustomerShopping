import { Link } from "react-router-dom";

import { useShop } from "../context/ShopContext";

import "./Orders.css";

function Orders() {
  const { orders } = useShop();

  if (orders.length === 0) {
    return (
      <div className="orders-empty">

        <div className="orders-empty-icon">
          <span>◇</span>
        </div>

        <span className="orders-empty-label">
          YOUR SHOPPING HISTORY
        </span>

        <h2>
          No Orders Yet
        </h2>

        <p>
          Your placed orders will appear here.
          Start exploring and find something you love.
        </p>

        <Link to="/products">
          Start Shopping
          <span>→</span>
        </Link>

      </div>
    );
  }

  return (
    <div className="orders-page">

      <div className="orders-header">

        <div>
          <span>
            YOUR SHOPPING HISTORY
          </span>

          <h1>
            My Orders
          </h1>

          <p>
            Track and manage all your purchases
          </p>
        </div>

        <div className="orders-count">
          <strong>
            {orders.length}
          </strong>

          <span>
            {orders.length === 1
              ? "ORDER"
              : "ORDERS"}
          </span>
        </div>

      </div>

      <div className="orders-list">

        {orders.map((order, index) => (
          <div
            className="order-card"
            key={order.id}
          >

            <div className="order-card-number">
              0{index + 1}
            </div>

            <div className="order-top">

              <div className="order-meta">

                <span>
                  ORDER ID
                </span>

                <strong>
                  #{order.id}
                </strong>

              </div>

              <div className="order-meta">

                <span>
                  ORDER DATE
                </span>

                <strong>
                  {order.createdAt}
                </strong>

              </div>

              <div className="order-status">
                <span></span>
                {order.status}
              </div>

            </div>

            <div className="order-products">

              {order.items
                .slice(0, 3)
                .map((item) => (
                  <div
                    className="order-product"
                    key={item.id}
                  >

                    <div className="order-product-image">
                      <img
                        src={item.image}
                        alt={item.name}
                      />
                    </div>

                    <div className="order-product-info">

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

                  </div>
                ))}

            </div>

            <div className="order-bottom">

              <div className="order-total">

                <span>
                  ORDER TOTAL
                </span>

                <strong>
                  ₹{order.total}
                </strong>

              </div>

              <Link
                to={`/orders/${order.id}`}
                className="order-details-link"
              >
                View Details
                <span>→</span>
              </Link>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Orders;