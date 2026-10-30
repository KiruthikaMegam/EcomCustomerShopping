import { useState } from "react";
import {
  Link,
  useNavigate
} from "react-router-dom";

import { useShop } from "../context/ShopContext";

import "./Signup.css";

function Signup() {
  const navigate = useNavigate();

  const {
    createAccount
  } = useShop();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    address: "",
    city: "",
    pincode: ""
  });

  const [error, setError] =
    useState("");

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]:
        event.target.value
    });

    setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.name) {
      setError("Name is required");
      return;
    }

    if (!form.email) {
      setError("Email is required");
      return;
    }

    if (!form.phone) {
      setError("Phone number is required");
      return;
    }

    if (form.phone.length !== 10) {
      setError(
        "Enter a valid 10 digit phone number"
      );
      return;
    }

    if (!form.password) {
      setError("Password is required");
      return;
    }

    createAccount(form);

    navigate("/");
  };

  return (
    <div className="signup-page">

      <div className="signup-decoration signup-decoration-one"></div>
      <div className="signup-decoration signup-decoration-two"></div>

      <div className="signup-container">

        <div className="signup-showcase">

          <div className="signup-showcase-content">

            <span>
              WELCOME TO BUY EASY
            </span>

            <h2>
              Your style,
              <br />
              <em>starts here.</em>
            </h2>

            <p>
              Create your account and discover
              a collection curated for everyday
              living, fashion and everything you love.
            </p>

            <div className="signup-showcase-line">
              <span></span>
              NEW · CURATED · ESSENTIAL
            </div>

          </div>

          <div className="signup-circle"></div>

          <div className="signup-offer-card">

            <span>
              WELCOME
            </span>

            <strong>
              60%
            </strong>

            <small>
              UP TO OFF
            </small>

          </div>

          <div className="signup-vertical">
            BUY EASY
          </div>

        </div>

        <div className="signup-box">

          <div className="signup-brand">
            <span>Buy</span>
            <strong>Easy</strong>
          </div>

          <div className="signup-heading">

            <span>
              CREATE YOUR ACCOUNT
            </span>

            <h1>
              Join ShopEasy
            </h1>

            <p>
              Create your account and start
              shopping your favourites.
            </p>

          </div>

          <form onSubmit={handleSubmit}>

            <div className="signup-row">

              <div className="signup-field">

                <label>
                  Full Name
                </label>

                <input
                  name="name"
                  placeholder="Enter your full name"
                  value={form.name}
                  onChange={handleChange}
                />

              </div>

              <div className="signup-field">

                <label>
                  Phone
                </label>

                <input
                  name="phone"
                  placeholder="10 digit phone"
                  maxLength="10"
                  value={form.phone}
                  onChange={handleChange}
                />

              </div>

            </div>

            <div className="signup-field">

              <label>
                Email Address
              </label>

              <input
                name="email"
                type="email"
                placeholder="Enter your email address"
                value={form.email}
                onChange={handleChange}
              />

            </div>

            <div className="signup-field">

              <label>
                Password
              </label>

              <input
                name="password"
                type="password"
                placeholder="Create a password"
                value={form.password}
                onChange={handleChange}
              />

            </div>

            <div className="signup-field">

              <label>
                Delivery Address
              </label>

              <textarea
                name="address"
                placeholder="House / Flat number, street, area"
                rows="3"
                value={form.address}
                onChange={handleChange}
              />

            </div>

            <div className="signup-row">

              <div className="signup-field">

                <label>
                  City
                </label>

                <input
                  name="city"
                  placeholder="Enter city"
                  value={form.city}
                  onChange={handleChange}
                />

              </div>

              <div className="signup-field">

                <label>
                  Pincode
                </label>

                <input
                  name="pincode"
                  placeholder="6 digit pincode"
                  maxLength="6"
                  value={form.pincode}
                  onChange={handleChange}
                />

              </div>

            </div>

            {error && (
              <div className="signup-error">

                <span>
                  !
                </span>

                {error}

              </div>
            )}

            <button
              type="submit"
              className="signup-submit"
            >
              <span>
                Create Account
              </span>

              <b>
                →
              </b>

            </button>

          </form>

          <div className="signup-login-divider">

            <span></span>

            <small>
              ALREADY A MEMBER?
            </small>

            <span></span>

          </div>

          <div className="signup-login">

            <p>
              Already have an account?
            </p>

            <Link
              to="/login"
              className="login-link"
            >
              Sign In
              <span>
                →
              </span>
            </Link>

          </div>

          <div className="signup-footer">
            <span>
              ◇
            </span>
            Secure shopping experience
          </div>

        </div>

      </div>

    </div>
  );
}

export default Signup;