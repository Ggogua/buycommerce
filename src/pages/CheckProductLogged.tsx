import React, { useState, useEffect } from "react";
import { FaShoppingCart, FaSearch, FaUser } from "react-icons/fa";
import { useRouter } from "next/router";
import { Product } from "../components/List";
import Link from "next/link";

const CheckProduct: React.FC = () => {
  const router = useRouter();
  const { cart } = router.query;
  const [cartProducts, setCartProducts] = useState<Product[]>(
    cart ? JSON.parse(cart as string) : []
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartProducts));
  }, [cartProducts]);

  const removeFromCart = (productId: number) => {
    const updatedCart = cartProducts.filter(
      (product) => product.id !== productId
    );
    setCartProducts(updatedCart);
  };

  const handlePurchase = (product: Product) => {
    router.push({
      pathname: "/PurchaseLogged",
      query: { id: product.id, name: product.name, price: product.price },
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto flex-grow">
        <div className="flex justify-between items-center mb-6 p-8">
          <h1 className="text-3xl font-bold">Added Products</h1>
          <div className="flex items-center space-x-4">
            <div className="relative mr-4">
              <input
                type="text"
                placeholder="Search..."
                className="border border-gray-300 rounded-md py-1 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <Link
              href="/ProductsPageLogged"
              className="text-gray-700 hover:text-blue-500"
            >
              Products
            </Link>
            <a href="#" className="text-gray-700 hover:text-blue-500">
              Cart
              <span className="text-gray-500">({cartProducts.length})</span>
            </a>
            <p>
              <FaUser className="cursor-pointer" />
            </p>
          </div>
        </div>
        {cartProducts.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">No products</p>
        ) : (
          <div className="flex flex-wrap gap-8">
            {cartProducts.map((product) => (
              <div
                key={product.id}
                className="flex flex-col bg-white shadow-lg rounded-lg p-6"
                style={{ width: "300px" }}
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
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-4 flex items-center justify-center"
                  onClick={() => removeFromCart(product.id)}
                >
                  <FaShoppingCart className="mr-2" />
                  Remove from Cart
                </button>
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4 flex items-center justify-center"
                  onClick={() => handlePurchase(product)}
                >
                  Purchase
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      <footer className="bg-gray-800 text-white py-4 mt-auto">
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

export default CheckProduct;
