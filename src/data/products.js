const products = [
  {
    id: "P001",
    name: "Premium Smart Watch",
    category: "Electronics",
    brand: "TechPro",
    price: 1499,
    oldPrice: 2999,
    rating: 4.5,
    reviews: 128,
    stock: 25,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
    description:
      "Premium smartwatch with fitness tracking, heart rate monitoring and multiple smart features."
  },
  {
    id: "P002",
    name: "Wireless Bluetooth Headphones",
    category: "Electronics",
    brand: "SoundMax",
    price: 1899,
    oldPrice: 3499,
    rating: 4.3,
    reviews: 215,
    stock: 18,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
    description:
      "Wireless headphones with deep bass, comfortable ear cushions and long battery life."
  },
  {
    id: "P003",
    name: "Women's Casual Handbag",
    category: "Fashion",
    brand: "StyleBag",
    price: 899,
    oldPrice: 1599,
    rating: 4.4,
    reviews: 96,
    stock: 32,
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600",
    description:
      "Stylish and spacious handbag suitable for everyday use."
  },
  {
    id: "P004",
    name: "Running Sports Shoes",
    category: "Footwear",
    brand: "RunX",
    price: 1299,
    oldPrice: 2499,
    rating: 4.6,
    reviews: 178,
    stock: 40,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
    description:
      "Lightweight running shoes designed for comfort and daily workouts."
  },
  {
    id: "P005",
    name: "Men's Casual Shirt",
    category: "Fashion",
    brand: "UrbanWear",
    price: 699,
    oldPrice: 1299,
    rating: 4.2,
    reviews: 82,
    stock: 45,
    image:
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=600",
    description:
      "Comfortable cotton casual shirt with a modern fit."
  },
  {
    id: "P006",
    name: "Wireless Gaming Mouse",
    category: "Electronics",
    brand: "GamePro",
    price: 799,
    oldPrice: 1499,
    rating: 4.5,
    reviews: 143,
    stock: 20,
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?w=600",
    description:
      "High precision wireless gaming mouse with ergonomic design."
  },
  {
    id: "P007",
    name: "Elegant Women's Dress",
    category: "Fashion",
    brand: "FashionHub",
    price: 1199,
    oldPrice: 2199,
    rating: 4.4,
    reviews: 105,
    stock: 28,
    image:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600",
    description:
      "Elegant dress designed for casual and special occasions."
  },
  {
    id: "P008",
    name: "Kitchen Mixer Grinder",
    category: "Home",
    brand: "HomeTech",
    price: 2199,
    oldPrice: 3999,
    rating: 4.3,
    reviews: 67,
    stock: 15,
    image:
      "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=600",
    description:
      "Powerful kitchen mixer grinder with multiple speed settings."
  },
  {
    id: "P009",
    name: "Smartphone Pro Max",
    category: "Electronics",
    brand: "TechOne",
    price: 24999,
    oldPrice: 29999,
    rating: 4.7,
    reviews: 342,
    stock: 12,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600",
    description:
      "Premium smartphone with a high resolution display, powerful processor and advanced camera."
  },
  {
    id: "P010",
    name: "Portable Bluetooth Speaker",
    category: "Electronics",
    brand: "SoundMax",
    price: 1299,
    oldPrice: 2499,
    rating: 4.4,
    reviews: 189,
    stock: 30,
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600",
    description:
      "Compact portable speaker with powerful sound, deep bass and long battery life."
  },
  {
    id: "P011",
    name: "Women's Denim Jacket",
    category: "Fashion",
    brand: "UrbanStyle",
    price: 1099,
    oldPrice: 1999,
    rating: 4.3,
    reviews: 74,
    stock: 24,
    image:
      "https://images.unsplash.com/photo-1543076447-215ad9ba6923?w=600",
    description:
      "Classic denim jacket with a stylish fit suitable for everyday outfits."
  },
  {
    id: "P012",
    name: "Men's Premium Sneakers",
    category: "Footwear",
    brand: "StreetStep",
    price: 1599,
    oldPrice: 2999,
    rating: 4.6,
    reviews: 156,
    stock: 35,
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600",
    description:
      "Comfortable premium sneakers designed for casual everyday wear."
  },
  {
    id: "P013",
    name: "Women's Casual Sneakers",
    category: "Footwear",
    brand: "WalkStyle",
    price: 1399,
    oldPrice: 2599,
    rating: 4.5,
    reviews: 121,
    stock: 27,
    image:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600",
    description:
      "Trendy women's sneakers with lightweight cushioning and everyday comfort."
  },
  {
    id: "P014",
    name: "Cotton Bedsheet Set",
    category: "Home",
    brand: "HomeComfort",
    price: 799,
    oldPrice: 1499,
    rating: 4.2,
    reviews: 63,
    stock: 50,
    image:
      "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600",
    description:
      "Soft and comfortable cotton bedsheet set with a stylish modern design."
  },
  {
    id: "P015",
    name: "Modern Table Lamp",
    category: "Home",
    brand: "LumaHome",
    price: 699,
    oldPrice: 1299,
    rating: 4.4,
    reviews: 91,
    stock: 22,
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600",
    description:
      "Elegant modern table lamp perfect for bedrooms, offices and living spaces."
  },
  {
    id: "P016",
    name: "Air Fryer 4.5L",
    category: "Home",
    brand: "KitchenPro",
    price: 3299,
    oldPrice: 4999,
    rating: 4.6,
    reviews: 234,
    stock: 14,
    image:
      "https://images.unsplash.com/photo-1585515320310-259814833e62?w=600",
    description:
      "Large capacity air fryer with easy temperature control and multiple cooking modes."
  },
  {
    id: "P017",
    name: "Classic Leather Wallet",
    category: "Fashion",
    brand: "LeatherCraft",
    price: 499,
    oldPrice: 999,
    rating: 4.3,
    reviews: 112,
    stock: 60,
    image:
      "https://images.unsplash.com/photo-1627123424574-724758594e93?w=600",
    description:
      "Classic compact leather wallet with multiple card and cash compartments."
  },
  {
    id: "P018",
    name: "Travel Backpack",
    category: "Fashion",
    brand: "UrbanPack",
    price: 999,
    oldPrice: 1899,
    rating: 4.5,
    reviews: 138,
    stock: 38,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600",
    description:
      "Spacious travel backpack with multiple compartments for work, college and travel."
  },
  {
    id: "P019",
    name: "USB-C Fast Charger",
    category: "Electronics",
    brand: "PowerTech",
    price: 599,
    oldPrice: 999,
    rating: 4.4,
    reviews: 201,
    stock: 55,
    image:
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=600",
    description:
      "Compact fast charger with USB-C support for smartphones, tablets and other devices."
  },
  {
    id: "P020",
    name: "Digital Kitchen Scale",
    category: "Home",
    brand: "KitchenPro",
    price: 449,
    oldPrice: 799,
    rating: 4.2,
    reviews: 86,
    stock: 42,
    image:
      "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?w=600",
    description:
      "Accurate digital kitchen scale with a compact design and easy-to-read display."
  }
];

export default products;