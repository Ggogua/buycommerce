import React from "react";
import Link from "next/link";

const LandingPage: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-gray-800 to-gray-900 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-8 py-12 text-center text-white">
        <h1 className="text-6xl font-bold mb-6">
          Welcome to our E-commerce Platform
        </h1>
        <p className="text-lg mb-12">
          Discover amazing products and shop with ease!
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="/ProductsPage">
            <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
              Explore Products
            </button>
          </Link>
          <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
