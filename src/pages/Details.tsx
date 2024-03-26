import { useRouter } from "next/router";
import { mockProducts } from "../components/List";
import { Product } from "../components/List";
import Link from "next/link";

const Details: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const productId: number | undefined =
    typeof id === "string" ? parseInt(id, 10) : undefined;

  const product: Product | undefined = productId
    ? mockProducts.find((p) => p.id === productId)
    : undefined;

  const productSuggestions: Product[] = mockProducts
    .filter((p) => p.id !== productId)
    .slice(0, 3);

  const handlePurchase = () => {
    if (product) {
      router.push({
        pathname: "/Purchase",
        query: {
          name: product.name,
          price: product.price,
        },
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/ProductsPage" passHref>
            <button className="text-black underline px-4 py-2 rounded-md">
              &lt; Go Back
            </button>
          </Link>
        </div>
      </header>
      {product ? (
        <div className="flex-1">
          <div className="container mx-auto py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto rounded-md"
                />
              </div>
              <div>
                <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                <p className="text-lg mb-4">{product.description}</p>
                <div className="flex items-center mb-4">
                  <span className="text-xl font-semibold mr-2">
                    ${product.price}
                  </span>
                  <span className="text-green-600">Available</span>
                </div>
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-500"
                  onClick={handlePurchase}
                >
                  Purchase
                </button>
              </div>
            </div>
          </div>
          <div className="container mx-auto py-8">
            <h2 className="text-2xl font-bold mb-4">You might also like</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {productSuggestions.map((suggestion) => (
                <div key={suggestion.id}>
                  <img
                    src={suggestion.image}
                    alt={suggestion.name}
                    className="w-64 h-auto rounded-md mb-2"
                  />
                  <p className="text-lg font-semibold mb-2">
                    {suggestion.name}
                  </p>
                  <p className="text-gray-600">${suggestion.price}</p>
                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-500 mt-2"
                    onClick={() => console.log("Add to Cart clicked")}
                  >
                    Purchase
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <p className="container mx-auto py-8">Product not found</p>
      )}
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

export default Details;
