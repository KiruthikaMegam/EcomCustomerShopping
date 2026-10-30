import { useNavigate } from "react-router-dom";

import { useShop } from "../context/ShopContext";
import ProductCard from "../components/ProductCard";

import "./Home.css";

function Home() {
  const navigate = useNavigate();

  const { products } = useShop();

  const featuredProducts = products.slice(0, 4);

  const categories = [
    {
      name: "Electronics",
      icon: "💻"
    },
    {
      name: "Fashion",
      icon: "👗"
    },
    {
      name: "Footwear",
      icon: "👟"
    },
    {
      name: "Home",
      icon: "🏠"
    }
  ];

  return (
    <div className="home-page">

      <section className="hero">

        <div className="hero-content">

          <span className="hero-label">
            THE NEW SEASON EDIT
          </span>

          <h1>
            Style,
            <br />
            <em>Everyday.</em>
          </h1>

          <p className="hero-description">
            Discover thoughtfully selected fashion,
            lifestyle and everyday essentials
            made for your world.
          </p>

          <button
            className="hero-button"
            onClick={() => navigate("/products")}
          >
            Explore Collection
            <span>→</span>
          </button>

          <div className="hero-note">
            <span></span>
            FREE SHIPPING ON ORDERS OVER ₹999
          </div>

        </div>

        <div className="hero-visual">

          <div className="hero-circle"></div>

          <div className="hero-card hero-card-one">
            <span>01</span>
            <p>NEW</p>
          </div>

          <div className="hero-card hero-card-two">
            <span>60%</span>
            <p>OFF</p>
          </div>

          <div className="hero-bag">
            <div className="bag-handle"></div>

            <div className="bag-body">
              <span>Buy</span>
              <strong>Easy</strong>
            </div>
          </div>

          <div className="hero-vertical-text">
            NEW · CURATED · ESSENTIAL
          </div>

        </div>

      </section>

      <section className="home-section category-section">

        <div className="section-heading">

          <div>
            <span className="section-label">
              DISCOVER
            </span>

            <h2>
              Shop By Category
            </h2>

            <p>
              Find something made for you.
            </p>
          </div>

          <button
            onClick={() => navigate("/products")}
          >
            View All
            <span>→</span>
          </button>

        </div>

        <div className="category-cards">

          {categories.map((category, index) => (
            <div
              className="category-card"
              key={category.name}
              onClick={() =>
                navigate(
                  `/products?category=${category.name}`
                )
              }
            >

              <span className="category-number">
                0{index + 1}
              </span>

              <div className="category-icon">
                {category.icon}
              </div>

              <div className="category-info">
                <h3>
                  {category.name}
                </h3>

                <p>
                  Explore Collection
                  <span>→</span>
                </p>
              </div>

            </div>
          ))}

        </div>

      </section>

      <section className="home-section featured-section">

        <div className="section-heading">

          <div>
            <span className="section-label">
              CURATED FOR YOU
            </span>

            <h2>
              Featured Products
            </h2>

            <p>
              Our current favourites, selected just for you.
            </p>
          </div>

          <button
            onClick={() => navigate("/products")}
          >
            View All
            <span>→</span>
          </button>

        </div>

        <div className="home-products">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

      </section>

      <section className="offer-banner">

        <div className="offer-content">

          <span>
            LIMITED TIME OFFER
          </span>

          <h2>
            A Little More
            <br />
            <em>For Less.</em>
          </h2>

          <p>
            Enjoy up to 60% off selected
            styles and everyday essentials.
          </p>

          <button
            onClick={() =>
              navigate("/products")
            }
          >
            Shop The Sale
            <b>→</b>
          </button>

        </div>

        <div className="offer-visual">

          <div className="offer-circle">
            <strong>60</strong>
            <span>% OFF</span>
          </div>

          <div className="offer-small-circle">
            SALE
          </div>

          <div className="offer-lines"></div>

        </div>

      </section>

      <section className="home-editorial">

        <div className="editorial-number">
          04
        </div>

        <div className="editorial-content">
          <span>
            Buy EASY JOURNAL
          </span>

          <h2>
            Designed for
            <br />
            <em>everyday living.</em>
          </h2>

          <p>
            From statement pieces to everyday
            essentials, discover products that
            fit naturally into your lifestyle.
          </p>
        </div>

        <button
          onClick={() => navigate("/products")}
        >
          Discover More
          <span>→</span>
        </button>

      </section>

    </div>
  );
}

export default Home;