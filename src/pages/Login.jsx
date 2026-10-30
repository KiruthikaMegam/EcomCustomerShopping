import { useState } from "react";
import {
  Link,
  useNavigate
} from "react-router-dom";

import { useShop } from "../context/ShopContext";

import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const { createAccount } = useShop();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [error, setError] =
    useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.email) {
      setError("Email is required");
      return;
    }

    if (!form.password) {
      setError("Password is required");
      return;
    }

    const savedUser =
      localStorage.getItem("shopUser");

    if (savedUser) {
      const user = JSON.parse(savedUser);

      if (user.email === form.email) {
        navigate("/");
        return;
      }
    }

    setError(
      "Account not found. Please create an account."
    );
  };

  return (
    <div className="login-page">

      <div className="login-decoration login-decoration-one"></div>
      <div className="login-decoration login-decoration-two"></div>

      <div className="login-container">

        <div className="login-showcase">

          <div className="showcase-content">

            <span>
              WELCOME BACK
            </span>

            <h2>
              Your style,
              <br />
              <em>your way.</em>
            </h2>

            <p>
              Discover products you'll love,
              curated for your everyday lifestyle.
            </p>

            <div className="showcase-line">
              <span></span>
              BUY EASY
            </div>

          </div>

          <div className="showcase-circle"></div>

          <div className="showcase-card">
            <span>NEW</span>
            <strong>60%</strong>
            <small>UP TO OFF</small>
          </div>

        </div>

        <div className="login-box">

          <div className="login-brand">
            <span>Buy</span>
            <strong>Easy</strong>
          </div>

          <div className="login-heading">
            <span>MEMBER ACCESS</span>

            <h1>
              Welcome Back
            </h1>

            <p>
              Sign in to continue shopping with us.
            </p>
          </div>

          <form onSubmit={handleSubmit}>

            <div className="login-field">

              <label>
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={(event) =>
                  setForm({
                    ...form,
                    email: event.target.value
                  })
                }
              />

            </div>

            <div className="login-field">

              <div className="password-label">
                <label>
                  Password
                </label>

                <span>
                  Required
                </span>
              </div>

              <input
                type="password"
                placeholder="Enter your password"
                value={form.password}
                onChange={(event) =>
                  setForm({
                    ...form,
                    password:
                      event.target.value
                  })
                }
              />

            </div>

            {error && (
              <div className="login-error">
                <span>!</span>
                {error}
              </div>
            )}

            <button
              type="submit"
              className="login-submit"
            >
              <span>
                Sign In
              </span>

              <b>
                →
              </b>
            </button>

          </form>

          <div className="login-divider">
            <span></span>
            <small>OR</small>
            <span></span>
          </div>

          <div className="signup-area">

            <p>
              New to ShopEasy?
            </p>

            <Link
              to="/signup"
              className="create-account"
            >
              Create an Account
              <span>→</span>
            </Link>

          </div>

          <div className="login-footer">
            <span>◇</span>
            Secure shopping experience
          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;