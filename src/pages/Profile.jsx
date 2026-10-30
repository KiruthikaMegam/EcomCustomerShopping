import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useShop } from "../context/ShopContext";

import "./Profile.css";

function Profile() {
  const navigate = useNavigate();

  const {
    user,
    logout,
    orders,
    showToast
  } = useShop();

  const [editing, setEditing] =
    useState(false);

  const [form, setForm] = useState({
    ...user
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]:
        event.target.value
    });
  };

  const handleSave = () => {
    localStorage.setItem(
      "shopUser",
      JSON.stringify(form)
    );

    showToast(
      "Profile updated successfully"
    );

    setEditing(false);

    window.location.reload();
  };

  const handleLogout = () => {
    logout();

    navigate("/");
  };

  return (
    <div className="profile-page">

      <div className="profile-hero">

        <div className="profile-hero-content">

          <span>
            YOUR BUY EASY ACCOUNT
          </span>

          <h1>
            Hello,
            <br />
            <em>{user.name}</em>
          </h1>

          <p>
            Manage your personal information,
            orders and shopping preferences
            from one place.
          </p>

        </div>

        <div className="profile-hero-side">

          <div className="profile-avatar">
            {user.name
              ? user.name.charAt(0).toUpperCase()
              : "U"}
          </div>

          <span>
            MEMBER
          </span>

        </div>

      </div>

      <div className="profile-layout">

        <aside className="profile-sidebar">

          <div className="sidebar-heading">
            <span>ACCOUNT</span>
            <h3>
              My Space
            </h3>
          </div>

          <div className="sidebar-menu">

            <button
              className="active"
              onClick={() =>
                setEditing(false)
              }
            >
              <span className="menu-icon">
                01
              </span>

              <span>
                My Profile
              </span>

              <b>
                →
              </b>
            </button>

            <button
              onClick={() =>
                navigate("/orders")
              }
            >
              <span className="menu-icon">
                02
              </span>

              <span>
                My Orders
              </span>

              <b>
                →
              </b>
            </button>

            <button
              onClick={() =>
                navigate("/wishlist")
              }
            >
              <span className="menu-icon">
                03
              </span>

              <span>
                Wishlist
              </span>

              <b>
                →
              </b>
            </button>

            <button
              className="logout-menu"
              onClick={handleLogout}
            >
              <span className="menu-icon">
                04
              </span>

              <span>
                Logout
              </span>

              <b>
                →
              </b>
            </button>

          </div>

          <div className="sidebar-note">

            <span>
              BUY EASY
            </span>

            <p>
              Everything you need,
              all in one place.
            </p>

          </div>

        </aside>

        <section className="profile-content">

          <div className="profile-title">

            <div>
              <span>
                ACCOUNT DETAILS
              </span>

              <h2>
                Personal Information
              </h2>

              <p>
                Keep your information up to date.
              </p>
            </div>

            <button
              className={
                editing
                  ? "editing"
                  : ""
              }
              onClick={() =>
                setEditing(!editing)
              }
            >
              {editing
                ? "Cancel"
                : "Edit Profile"}
            </button>

          </div>

          <div className="profile-divider"></div>

          <div className="profile-form">

            <div className="profile-field">

              <label>
                Full Name
              </label>

              <input
                name="name"
                value={form.name || ""}
                onChange={handleChange}
                disabled={!editing}
              />

            </div>

            <div className="profile-field">

              <label>
                Email Address
              </label>

              <input
                name="email"
                value={form.email || ""}
                onChange={handleChange}
                disabled={!editing}
              />

            </div>

            <div className="profile-field">

              <label>
                Phone Number
              </label>

              <input
                name="phone"
                value={form.phone || ""}
                onChange={handleChange}
                disabled={!editing}
              />

            </div>

            <div className="profile-field">

              <label>
                City
              </label>

              <input
                name="city"
                value={form.city || ""}
                onChange={handleChange}
                disabled={!editing}
              />

            </div>

            <div className="profile-field profile-full">

              <label>
                Delivery Address
              </label>

              <textarea
                name="address"
                value={form.address || ""}
                onChange={handleChange}
                disabled={!editing}
                rows="4"
              />

            </div>

          </div>

          {editing && (
            <div className="profile-save-area">

              <p>
                Your updated details will be
                saved to your ShopEasy account.
              </p>

              <button
                className="save-profile"
                onClick={handleSave}
              >
                Save Changes
                <span>→</span>
              </button>

            </div>
          )}

          <div className="profile-statistics">

            <div className="profile-stat">

              <span>
                01
              </span>

              <div>
                <strong>
                  {orders.length}
                </strong>

                <p>
                  Total Orders
                </p>
              </div>

            </div>

            <div className="profile-stat">

              <span>
                02
              </span>

              <div>
                <strong className="location-stat">
                  {user.city || "India"}
                </strong>

                <p>
                  Location
                </p>
              </div>

            </div>

            <div className="profile-stat">

              <span>
                03
              </span>

              <div>
                <strong>
                  ACTIVE
                </strong>

                <p>
                  Account Status
                </p>
              </div>

            </div>

          </div>

        </section>

      </div>

    </div>
  );
}

export default Profile;