import React, { useState, useEffect } from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { mockProducts } from "../components/List";
import { Product } from "../components/List";
import Link from "next/link";

const ProductsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [cart, setCart] = useState<Product[]>([]);
  const [showNotification, setShowNotification] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState<any>(null);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }

    fetchUserInfo();
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const fetchUserInfo = () => {
    const userData = localStorage.getItem("userData");
    if (userData) {
      setUserInfo(JSON.parse(userData));
    }
  };

  const addToCart = (product: Product) => {
    const isProductInCart = cart.some((item) => item.id === product.id);

    if (!isProductInCart) {
      setCart([...cart, { ...product, added: true }]);
      setShowNotification(true);

      setTimeout(() => {
        setShowNotification(false);
      }, 2000);
    }
  };

  const filteredProducts = mockProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold">Products</h1>
          </div>
          <div className="flex items-center">
            <div className="relative mr-4">
              <input
                type="text"
                placeholder="Search..."
                className="border border-gray-300 rounded-md py-1 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <div className="flex items-center space-x-4">
              <Link href="#" className="text-gray-700 hover:text-blue-500">
                Products
              </Link>
              <Link
                href={{
                  pathname: "/CheckProductLogged",
                  query: { cart: JSON.stringify(cart) },
                }}
                className="text-gray-700 hover:text-blue-500"
              >
                Cart
                <span className="text-gray-500">({cart.length})</span>
              </Link>
              <p onClick={fetchUserInfo}>
                <FaUser className="cursor-pointer" />
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="flex flex-col bg-white shadow-lg rounded-lg p-6 mt-10"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-32 object-contain mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <p className="text-lg font-semibold text-green-500">
                ${product.price}
              </p>
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4 flex items-center justify-center"
                onClick={() => addToCart(product)}
                disabled={product.added}
              >
                <FaShoppingCart className="mr-2" />
                {product.added ? "Added" : "Add to Cart"}
              </button>
              <Link
                href={`/Details?id=${product.id}`}
                className="text-black hover:text-blue-800 transition-colors duration-20 py-2 px-4 rounded mt-4 flex items-center justify-center"
              >
                <button>See Full Info</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <p>&copy; 2024 My E-commerce</p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              Facebook
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Twitter
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Instagram
            </a>
          </div>
        </div>
      </footer>
      {showNotification && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg opacity-100 transition-opacity duration-500">
            <p className="text-lg text-center font-semibold">Added</p>
          </div>
        </div>
      )}
      {userInfo && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <p className="text-lg font-semibold">User Information</p>
            <p>
              Username:{" "}
              <span className="font-semibold">{userInfo.username}</span>
            </p>
            <p>
              Email: <span className="font-semibold">{userInfo.email}</span>
            </p>
            <p>
              Birthdate:{" "}
              <span className="font-semibold">{userInfo.birthdate}</span>
            </p>
            <p>
              Balance: <span className="font-semibold">20000$</span>
            </p>
            <button
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              onClick={() => setUserInfo(null)}
            >
              Close
            </button>
            <button
              className="mt-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded ml-2"
              onClick={() => setUserInfo(null)}
            >
              <Link href="/">Log Out</Link>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
