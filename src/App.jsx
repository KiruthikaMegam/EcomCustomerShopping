import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation
} from "react-router-dom";

import { useEffect } from "react";

import { ShopProvider } from "./context/ShopContext";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Toast from "./components/Toast";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import Orders from "./pages/Orders";
import OrderDetails from "./pages/OrderDetails";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import "./App.css";

function ProtectedRoute({ children }) {
  const user = localStorage.getItem("shopUser");

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <ShopProvider>
      <BrowserRouter>

        <ScrollToTop />

        <Routes>
          <Route path="/login" element={<Login />} />

          <Route path="/signup" element={<Signup />} />

          <Route
            path="*"
            element={
              <>
                <Header />

                <main className="main-content">
                  <Routes>

                    <Route
                      path="/"
                      element={<Home />}
                    />

                    <Route
                      path="/products"
                      element={<Products />}
                    />

                    <Route
                      path="/product/:id"
                      element={<ProductDetails />}
                    />

                    <Route
                      path="/cart"
                      element={
                        <ProtectedRoute>
                          <Cart />
                        </ProtectedRoute>
                      }
                    />

                    <Route
                      path="/wishlist"
                      element={
                        <ProtectedRoute>
                          <Wishlist />
                        </ProtectedRoute>
                      }
                    />

                    <Route
                      path="/checkout"
                      element={
                        <ProtectedRoute>
                          <Checkout />
                        </ProtectedRoute>
                      }
                    />

                    <Route
                      path="/order-success/:id"
                      element={
                        <ProtectedRoute>
                          <OrderSuccess />
                        </ProtectedRoute>
                      }
                    />

                    <Route
                      path="/orders"
                      element={
                        <ProtectedRoute>
                          <Orders />
                        </ProtectedRoute>
                      }
                    />

                    <Route
                      path="/orders/:id"
                      element={
                        <ProtectedRoute>
                          <OrderDetails />
                        </ProtectedRoute>
                      }
                    />

                    <Route
                      path="/profile"
                      element={
                        <ProtectedRoute>
                          <Profile />
                        </ProtectedRoute>
                      }
                    />

                  </Routes>
                </main>

                <Footer />

                <Toast />
              </>
            }
          />
        </Routes>

      </BrowserRouter>
    </ShopProvider>
  );
}

export default App;