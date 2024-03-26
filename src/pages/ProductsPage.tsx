import React, { useState } from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import "../globals.css";
import { mockProducts } from "../components/List";
import { Product } from "../components/List";
import Link from "next/link";

const ProductsPage: React.FC = () => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

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
              />
              <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="/CheckProduct"
                className="text-gray-700 hover:text-blue-500"
              >
                Products
              </Link>
              <a href="#" className="text-gray-700 hover:text-blue-500">
                Wishlist
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-500">
                Cart
              </a>
              <span className="text-gray-500">({cart.length})</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mockProducts.map((product) => (
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
                onClick={() => addToCart(product)}
                className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 flex items-center"
              >
                <FaShoppingCart className="mr-2" />
                Add to Cart
              </button>
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
    </div>
  );
};

export default ProductsPage;
