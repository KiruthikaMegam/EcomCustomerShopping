import { useNavigate } from "react-router-dom";
import { useShop } from "../context/ShopContext";
import ConfirmModal from "../components/ConfirmModal";
import { useState } from "react";
import "./Cart.css";

function Cart() {
  const navigate = useNavigate();

  const {
    cart,
    cartTotal,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart
  } = useShop();

  const [deleteId, setDeleteId] = useState(null);

  const deliveryCharge =
    cartTotal >= 500 ? 0 : 40;

  const discount = 0;

  const finalTotal =
    cartTotal -
    discount +
    deliveryCharge;

  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <div className="empty-cart-content">
          <div className="empty-cart-icon">
            🛍
          </div>

          <span className="empty-cart-label">
            YOUR SHOPPING BAG
          </span>

          <h2>Your Cart is Empty</h2>

          <p>
            Looks like you haven't added anything
            to your bag yet.
          </p>

          <button
            onClick={() =>
              navigate("/products")
            }
          >
            Explore Products
            <span>→</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">

      <div className="cart-heading">
        <div>
          <span>YOUR SHOPPING BAG</span>
          <h1>My Cart</h1>
        </div>

        <p>
          {cart.length} {cart.length === 1 ? "item" : "items"}
        </p>
      </div>

      <div className="cart-layout">

        <div className="cart-items">

          <div className="cart-items-header">
            <span>PRODUCT</span>
            <span>PRICE</span>
            <span>QUANTITY</span>
            <span>TOTAL</span>
          </div>

          {cart.map((item) => (
            <div
              className="cart-item"
              key={item.id}
            >

              <div className="cart-product">

                <div className="cart-item-image">
                  <img
                    src={item.image}
                    alt={item.name}
                  />
                </div>

                <div className="cart-item-info">
                  <span className="cart-item-brand">
                    {item.brand}
                  </span>

                  <h3>{item.name}</h3>

                  <button
                    className="cart-remove mobile-remove"
                    onClick={() =>
                      setDeleteId(item.id)
                    }
                  >
                    Remove
                  </button>
                </div>

              </div>

              <div className="cart-price">
                ₹{item.price}
              </div>

              <div className="cart-quantity">

                <button
                  onClick={() =>
                    decreaseQuantity(item.id)
                  }
                >
                  −
                </button>

                <span>
                  {item.quantity}
                </span>

                <button
                  onClick={() =>
                    increaseQuantity(item.id)
                  }
                >
                  +
                </button>

              </div>

              <div className="cart-item-total">
                ₹{item.price * item.quantity}
              </div>

              <button
                className="cart-remove desktop-remove"
                onClick={() =>
                  setDeleteId(item.id)
                }
              >
                Remove
              </button>

            </div>
          ))}

          <button
            className="continue-shopping"
            onClick={() =>
              navigate("/products")
            }
          >
            <span>←</span>
            Continue Shopping
          </button>

        </div>

        <aside className="price-card">

          <div className="price-card-heading">
            <span>ORDER SUMMARY</span>
            <h2>Price Details</h2>
          </div>

          <div className="price-row">
            <span>Price</span>
            <strong>
              ₹{cartTotal}
            </strong>
          </div>

          <div className="price-row">
            <span>Discount</span>
            <strong className="green">
              - ₹{discount}
            </strong>
          </div>

          <div className="price-row">
            <span>Delivery Charges</span>

            <strong>
              {deliveryCharge === 0
                ? "FREE"
                : `₹${deliveryCharge}`}
            </strong>
          </div>

          <div className="price-divider"></div>

          <div className="price-total">
            <span>Total Amount</span>

            <strong>
              ₹{finalTotal}
            </strong>
          </div>

          <div className="saving-text">
            <span>✓</span>
            You are saving ₹{discount} on this order.
          </div>

          <button
            className="checkout-btn"
            onClick={() =>
              navigate("/checkout")
            }
          >
            Proceed to Checkout
            <span>→</span>
          </button>

          <div className="secure-note">
            <span>◇</span>
            Secure &amp; safe checkout
          </div>

        </aside>

      </div>

      <ConfirmModal
        open={deleteId !== null}
        title="Remove Product?"
        message="Are you sure you want to remove this product from your cart?"
        onCancel={() =>
          setDeleteId(null)
        }
        onConfirm={() => {
          removeFromCart(deleteId);
          setDeleteId(null);
        }}
      />

    </div>
  );
}

export default Cart;