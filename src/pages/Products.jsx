import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { useShop } from "../context/ShopContext";

import ProductCard from "../components/ProductCard";

import "./Products.css";

function Products() {
  const { products } = useShop();

  const [searchParams] = useSearchParams();

  const [search, setSearch] = useState(
    searchParams.get("search") || ""
  );

  const [category, setCategory] = useState(
    searchParams.get("category") || "All"
  );

  const [brand, setBrand] = useState("All");

  const [price, setPrice] = useState("All");

  const [rating, setRating] = useState("All");

  const [sort, setSort] = useState("default");

  const [page, setPage] = useState(1);

  const perPage = 6;

  useEffect(() => {
    setSearch(
      searchParams.get("search") || ""
    );

    setCategory(
      searchParams.get("category") || "All"
    );

    setPage(1);
  }, [searchParams]);

  let filteredProducts = products.filter(
    (product) => {
      const searchMatch =
        product.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        product.brand
          .toLowerCase()
          .includes(search.toLowerCase());

      const categoryMatch =
        category === "All" ||
        product.category === category;

      const brandMatch =
        brand === "All" ||
        product.brand === brand;

      let priceMatch = true;

      if (price === "under500") {
        priceMatch = product.price < 500;
      }

      if (price === "500-1000") {
        priceMatch =
          product.price >= 500 &&
          product.price <= 1000;
      }

      if (price === "1000-2000") {
        priceMatch =
          product.price > 1000 &&
          product.price <= 2000;
      }

      if (price === "above2000") {
        priceMatch = product.price > 2000;
      }

      let ratingMatch = true;

      if (rating !== "All") {
        ratingMatch =
          product.rating >= Number(rating);
      }

      return (
        searchMatch &&
        categoryMatch &&
        brandMatch &&
        priceMatch &&
        ratingMatch
      );
    }
  );

  if (sort === "low") {
    filteredProducts.sort(
      (a, b) => a.price - b.price
    );
  }

  if (sort === "high") {
    filteredProducts.sort(
      (a, b) => b.price - a.price
    );
  }

  if (sort === "rating") {
    filteredProducts.sort(
      (a, b) => b.rating - a.rating
    );
  }

  const totalPages = Math.ceil(
    filteredProducts.length / perPage
  );

  const startIndex =
    (page - 1) * perPage;

  const currentProducts =
    filteredProducts.slice(
      startIndex,
      startIndex + perPage
    );

  const resetFilters = () => {
    setSearch("");
    setCategory("All");
    setBrand("All");
    setPrice("All");
    setRating("All");
    setSort("default");
    setPage(1);
  };

  return (
    <div className="products-page">

      <div className="products-hero">

        <div className="products-hero-content">

          <span>
            THE BUY EASY COLLECTION
          </span>

          <h1>
            Discover
            <br />
            <em>Something Beautiful.</em>
          </h1>

          <p>
            Explore our carefully selected collection
            of everyday essentials, fashion and lifestyle.
          </p>

        </div>

        <div className="products-hero-side">

          <div className="hero-number">
            01
          </div>

          <div className="hero-line"></div>

          <span>
            CURATED
            <br />
            FOR YOU
          </span>

        </div>

      </div>

      <div className="products-header">

        <div>
          <span className="products-label">
            SHOP ALL
          </span>

          <h2>
            All Products
          </h2>

          <p>
            {filteredProducts.length}
            {" "}
            {filteredProducts.length === 1
              ? "product"
              : "products"}{" "}
            available
          </p>
        </div>

        <div className="products-header-note">
          <span></span>
          NEW SEASON · NEW STYLE
        </div>

      </div>

      <div className="products-layout">

        <aside className="filters">

          <div className="filter-header">

            <div>
              <span>
                REFINE
              </span>

              <h3>
                Filters
              </h3>
            </div>

            <button onClick={resetFilters}>
              Clear All
            </button>

          </div>

          <div className="filter-divider"></div>

          <div className="filter-group">

            <label>
              Search
            </label>

            <div className="filter-input-wrapper">

              <input
                type="text"
                placeholder="Search products"
                value={search}
                onChange={(event) => {
                  setSearch(event.target.value);
                  setPage(1);
                }}
              />

              <span>
                ⌕
              </span>

            </div>

          </div>

          <div className="filter-group">

            <label>
              Category
            </label>

            <select
              value={category}
              onChange={(event) => {
                setCategory(event.target.value);
                setPage(1);
              }}
            >
              <option value="All">
                All Categories
              </option>

              <option value="Electronics">
                Electronics
              </option>

              <option value="Fashion">
                Fashion
              </option>

              <option value="Footwear">
                Footwear
              </option>

              <option value="Home">
                Home
              </option>
            </select>

          </div>

          <div className="filter-group">

            <label>
              Brand
            </label>

            <select
              value={brand}
              onChange={(event) => {
                setBrand(event.target.value);
                setPage(1);
              }}
            >
              <option value="All">
                All Brands
              </option>

              <option value="TechPro">
                TechPro
              </option>

              <option value="SoundMax">
                SoundMax
              </option>

              <option value="StyleBag">
                StyleBag
              </option>

              <option value="RunX">
                RunX
              </option>

              <option value="UrbanWear">
                UrbanWear
              </option>

              <option value="GamePro">
                GamePro
              </option>

              <option value="FashionHub">
                FashionHub
              </option>

              <option value="HomeTech">
                HomeTech
              </option>

            </select>

          </div>

          <div className="filter-group">

            <label>
              Price Range
            </label>

            <select
              value={price}
              onChange={(event) => {
                setPrice(event.target.value);
                setPage(1);
              }}
            >
              <option value="All">
                All Prices
              </option>

              <option value="under500">
                Under ₹500
              </option>

              <option value="500-1000">
                ₹500 - ₹1000
              </option>

              <option value="1000-2000">
                ₹1000 - ₹2000
              </option>

              <option value="above2000">
                Above ₹2000
              </option>

            </select>

          </div>

          <div className="filter-group">

            <label>
              Customer Rating
            </label>

            <select
              value={rating}
              onChange={(event) => {
                setRating(event.target.value);
                setPage(1);
              }}
            >
              <option value="All">
                All Ratings
              </option>

              <option value="4">
                4★ & above
              </option>

              <option value="4.5">
                4.5★ & above
              </option>

            </select>

          </div>

          <div className="filter-footer">
            <span>
              BUY EASY
            </span>

            <p>
              Find pieces that feel
              right for you.
            </p>
          </div>

        </aside>

        <section className="products-content">

          <div className="sort-bar">

            <div className="results-info">

              <span>
                COLLECTION
              </span>

              <strong>
                {filteredProducts.length}
              </strong>

              <p>
                results
              </p>

            </div>

            <div className="sort-wrapper">

              <label>
                SORT BY
              </label>

              <select
                value={sort}
                onChange={(event) => {
                  setSort(event.target.value);
                  setPage(1);
                }}
              >
                <option value="default">
                  Recommended
                </option>

                <option value="low">
                  Price Low to High
                </option>

                <option value="high">
                  Price High to Low
                </option>

                <option value="rating">
                  Customer Rating
                </option>

              </select>

            </div>

          </div>

          {currentProducts.length > 0 ? (
            <div className="products-grid">

              {currentProducts.map(
                (product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                  />
                )
              )}

            </div>
          ) : (
            <div className="products-empty">

              <div className="empty-search-icon">
                ⌕
              </div>

              <span>
                NOTHING FOUND
              </span>

              <h2>
                No products found
              </h2>

              <p>
                Try changing your filters
                or search for something else.
              </p>

              <button onClick={resetFilters}>
                Clear Filters
                <span>→</span>
              </button>

            </div>
          )}

          {totalPages > 1 && (
            <div className="pagination">

              <button
                disabled={page === 1}
                onClick={() =>
                  setPage(page - 1)
                }
                aria-label="Previous page"
              >
                ←
              </button>

              {Array.from(
                { length: totalPages },
                (_, index) => index + 1
              ).map((number) => (
                <button
                  key={number}
                  className={
                    page === number
                      ? "active"
                      : ""
                  }
                  onClick={() =>
                    setPage(number)
                  }
                >
                  {number}
                </button>
              ))}

              <button
                disabled={page === totalPages}
                onClick={() =>
                  setPage(page + 1)
                }
                aria-label="Next page"
              >
                →
              </button>

            </div>
          )}

        </section>

      </div>

    </div>
  );
}

export default Products;