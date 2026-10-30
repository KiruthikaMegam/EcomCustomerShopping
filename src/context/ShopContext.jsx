import { createContext, useContext, useEffect, useState } from "react";
import productsData from "../data/products";

const ShopContext = createContext();

export function ShopProvider({ children }) {
  const [products] = useState(productsData);

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("shopCart");

    if (savedCart) {
      return JSON.parse(savedCart);
    }

    return [];
  });

  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem("shopWishlist");

    if (savedWishlist) {
      return JSON.parse(savedWishlist);
    }

    return [];
  });

  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("shopUser");

    if (savedUser) {
      return JSON.parse(savedUser);
    }

    return null;
  });

  const [orders, setOrders] = useState(() => {
    const savedOrders = localStorage.getItem("shopOrders");

    if (savedOrders) {
      return JSON.parse(savedOrders);
    }

    return [];
  });

  const [toast, setToast] = useState({
    show: false,
    message: ""
  });

  useEffect(() => {
    localStorage.setItem("shopCart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("shopWishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem("shopOrders", JSON.stringify(orders));
  }, [orders]);

  const showToast = (message) => {
    setToast({
      show: true,
      message
    });

    setTimeout(() => {
      setToast({
        show: false,
        message: ""
      });
    }, 2500);
  };

  const createAccount = (userData) => {
    const newUser = {
      id: Date.now(),
      ...userData
    };

    setUser(newUser);

    localStorage.setItem(
      "shopUser",
      JSON.stringify(newUser)
    );

    showToast("Account created successfully");
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("shopUser");

    showToast("Logged out successfully");
  };

  const addToCart = (product) => {
    if (!user) {
      return {
        requiresAccount: true
      };
    }

    let alreadyExists = false;

    for (const item of cart) {
      if (item.id === product.id) {
        alreadyExists = true;
        break;
      }
    }

    if (alreadyExists) {
      setCart((currentCart) =>
        currentCart.map((item) => {
          if (item.id === product.id) {
            return {
              ...item,
              quantity: item.quantity + 1
            };
          }

          return item;
        })
      );
    } else {
      setCart((currentCart) => [
        ...currentCart,
        {
          ...product,
          quantity: 1
        }
      ]);
    }

    showToast("Product added to cart");

    return {
      requiresAccount: false
    };
  };

  const removeFromCart = (productId) => {
    setCart((currentCart) =>
      currentCart.filter(
        (item) => item.id !== productId
      )
    );

    showToast("Product removed from cart");
  };

  const increaseQuantity = (productId) => {
    setCart((currentCart) =>
      currentCart.map((item) => {
        if (item.id === productId) {
          return {
            ...item,
            quantity: item.quantity + 1
          };
        }

        return item;
      })
    );
  };

  const decreaseQuantity = (productId) => {
    setCart((currentCart) =>
      currentCart.map((item) => {
        if (
          item.id === productId &&
          item.quantity > 1
        ) {
          return {
            ...item,
            quantity: item.quantity - 1
          };
        }

        return item;
      })
    );
  };

  const toggleWishlist = (product) => {
    if (!user) {
      return {
        requiresAccount: true
      };
    }

    let exists = false;

    for (const item of wishlist) {
      if (item.id === product.id) {
        exists = true;
        break;
      }
    }

    if (exists) {
      setWishlist((currentWishlist) =>
        currentWishlist.filter(
          (item) => item.id !== product.id
        )
      );

      showToast("Removed from wishlist");
    } else {
      setWishlist((currentWishlist) => [
        ...currentWishlist,
        product
      ]);

      showToast("Added to wishlist");
    }

    return {
      requiresAccount: false
    };
  };

  const placeOrder = (orderData) => {
    const newOrder = {
      id: `ORD-${Date.now()}`,
      userId: user.id,
      items: cart,
      ...orderData,
      status: "Placed",
      createdAt: new Date().toLocaleDateString()
    };

    setOrders((currentOrders) => [
      newOrder,
      ...currentOrders
    ]);

    setCart([]);

    return newOrder;
  };

  const cartCount = cart.length;

  let cartTotal = 0;

  for (const item of cart) {
    cartTotal += item.price * item.quantity;
  }

  const wishlistCount = wishlist.length;

  return (
    <ShopContext.Provider
      value={{
        products,
        cart,
        wishlist,
        user,
        orders,
        toast,
        cartCount,
        cartTotal,
        wishlistCount,
        showToast,
        createAccount,
        logout,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        toggleWishlist,
        placeOrder
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}

export function useShop() {
  return useContext(ShopContext);
}