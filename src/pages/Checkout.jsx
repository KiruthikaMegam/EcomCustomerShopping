import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useShop } from "../context/ShopContext";

import "./Checkout.css";

function Checkout() {
  const navigate = useNavigate();

  const {
    cart,
    cartTotal,
    user,
    placeOrder,
    showToast
  } = useShop();

  const [address, setAddress] = useState({
    name: user?.name || "",
    phone: user?.phone || "",
    address: user?.address || "",
    city: user?.city || "",
    pincode: user?.pincode || ""
  });

  const [payment, setPayment] =
    useState("COD");

  const [errors, setErrors] =
    useState({});

  const delivery =
    cartTotal >= 500 ? 0 : 40;

  const total =
    cartTotal + delivery;

  const handleChange = (event) => {
    setAddress({
      ...address,
      [event.target.name]:
        event.target.value
    });

    setErrors({
      ...errors,
      [event.target.name]: ""
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!address.name) {
      newErrors.name =
        "Name is required";
    }

    if (!address.phone) {
      newErrors.phone =
        "Phone is required";
    } else if (
      address.phone.length !== 10
    ) {
      newErrors.phone =
        "Enter a valid 10 digit phone number";
    }

    if (!address.address) {
      newErrors.address =
        "Address is required";
    }

    if (!address.city) {
      newErrors.city =
        "City is required";
    }

    if (!address.pincode) {
      newErrors.pincode =
        "Pincode is required";
    }

    setErrors(newErrors);

    return (
      Object.keys(newErrors).length === 0
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    const order = placeOrder({
      address,
      payment,
      total
    });

    showToast("Order placed successfully");

    navigate(
      `/order-success/${order.id}`
    );
  };

  if (cart.length === 0) {
    return (
      <div className="checkout-empty">
        <div className="checkout-empty-content">

          <div className="checkout-empty-icon">
            🛍
          </div>

          <span>
            YOUR SHOPPING BAG
          </span>

          <h2>Your Cart is Empty</h2>

          <p>
            Add some beautiful products to
            your bag before checking out.
          </p>

          <button
            onClick={() =>
              navigate("/products")
            }
          >
            Explore Products
            <b>→</b>
          </button>

        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">

      <div className="checkout-heading">
        <span>SECURE CHECKOUT</span>

        <h1>Complete Your Order</h1>

        <p>
          Review your details and choose
          your preferred payment method.
        </p>
      </div>

      <form
        className="checkout-layout"
        onSubmit={handleSubmit}
      >

        <div className="checkout-main">

          <section className="checkout-card">

            <div className="checkout-card-heading">
              <div className="checkout-number">
                01
              </div>

              <div>
                <span>DELIVERY DETAILS</span>
                <h2>Delivery Address</h2>
              </div>
            </div>

            <div className="checkout-form">

              <div className="checkout-field">
                <label>
                  Full Name
                </label>

                <input
                  name="name"
                  value={address.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                />

                {errors.name && (
                  <small>
                    {errors.name}
                  </small>
                )}
              </div>

              <div className="checkout-field">
                <label>
                  Phone Number
                </label>

                <input
                  name="phone"
                  value={address.phone}
                  maxLength="10"
                  onChange={handleChange}
                  placeholder="10 digit mobile number"
                />

                {errors.phone && (
                  <small>
                    {errors.phone}
                  </small>
                )}
              </div>

              <div className="checkout-field full">
                <label>
                  Address
                </label>

                <textarea
                  name="address"
                  rows="4"
                  value={address.address}
                  onChange={handleChange}
                  placeholder="House / Flat number, street, area"
                />

                {errors.address && (
                  <small>
                    {errors.address}
                  </small>
                )}
              </div>

              <div className="checkout-field">
                <label>
                  City
                </label>

                <input
                  name="city"
                  value={address.city}
                  onChange={handleChange}
                  placeholder="Enter your city"
                />

                {errors.city && (
                  <small>
                    {errors.city}
                  </small>
                )}
              </div>

              <div className="checkout-field">
                <label>
                  Pincode
                </label>

                <input
                  name="pincode"
                  value={address.pincode}
                  maxLength="6"
                  onChange={handleChange}
                  placeholder="6 digit pincode"
                />

                {errors.pincode && (
                  <small>
                    {errors.pincode}
                  </small>
                )}
              </div>

            </div>

          </section>

          <section className="checkout-card">

            <div className="checkout-card-heading">
              <div className="checkout-number">
                02
              </div>

              <div>
                <span>PAYMENT</span>
                <h2>Payment Method</h2>
              </div>
            </div>

            <div className="payment-options">

              <label
                className={
                  payment === "COD"
                    ? "payment-option active"
                    : "payment-option"
                }
              >
                <input
                  type="radio"
                  value="COD"
                  checked={payment === "COD"}
                  onChange={(event) =>
                    setPayment(
                      event.target.value
                    )
                  }
                />

                <span className="payment-radio">
                  <i></i>
                </span>

                <span className="payment-info">
                  <strong>
                    Cash on Delivery
                  </strong>

                  <small>
                    Pay when your order arrives
                  </small>
                </span>
              </label>

              <label
                className={
                  payment === "UPI"
                    ? "payment-option active"
                    : "payment-option"
                }
              >
                <input
                  type="radio"
                  value="UPI"
                  checked={payment === "UPI"}
                  onChange={(event) =>
                    setPayment(
                      event.target.value
                    )
                  }
                />

                <span className="payment-radio">
                  <i></i>
                </span>

                <span className="payment-info">
                  <strong>
                    UPI
                  </strong>

                  <small>
                    Google Pay, PhonePe, Paytm & more
                  </small>
                </span>
              </label>

              <label
                className={
                  payment === "CARD"
                    ? "payment-option active"
                    : "payment-option"
                }
              >
                <input
                  type="radio"
                  value="CARD"
                  checked={payment === "CARD"}
                  onChange={(event) =>
                    setPayment(
                      event.target.value
                    )
                  }
                />

                <span className="payment-radio">
                  <i></i>
                </span>

                <span className="payment-info">
                  <strong>
                    Credit / Debit Card
                  </strong>

                  <small>
                    Visa, Mastercard and more
                  </small>
                </span>
              </label>

            </div>

          </section>

        </div>

        <aside className="checkout-summary">

          <div className="summary-heading">
            <span>YOUR ORDER</span>
            <h2>Order Summary</h2>
          </div>

          <div className="checkout-products">

            {cart.map((item) => (
              <div
                className="checkout-product"
                key={item.id}
              >

                <div className="checkout-product-image">
                  <img
                    src={item.image}
                    alt={item.name}
                  />

                  <span>
                    {item.quantity}
                  </span>
                </div>

                <div className="checkout-product-info">
                  <p>{item.name}</p>

                  <small>
                    {item.quantity} × ₹{item.price}
                  </small>
                </div>

                <strong>
                  ₹{item.price * item.quantity}
                </strong>

              </div>
            ))}

          </div>

          <div className="summary-details">

            <div className="summary-line">
              <span>Subtotal</span>

              <strong>
                ₹{cartTotal}
              </strong>
            </div>

            <div className="summary-line">
              <span>Delivery</span>

              <strong>
                {delivery === 0
                  ? "FREE"
                  : `₹${delivery}`}
              </strong>
            </div>

          </div>

          <div className="summary-total">
            <span>Total</span>

            <strong>
              ₹{total}
            </strong>
          </div>

          <button
            className="place-order-btn"
            type="submit"
          >
            <span>Place Order</span>
            <b>→</b>
          </button>

          <div className="checkout-security">
            <span>✓</span>
            <p>
              Your information is protected
              with secure checkout.
            </p>
          </div>

        </aside>

      </form>
    </div>
  );
}

export default Checkout;