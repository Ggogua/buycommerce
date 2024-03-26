import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Purchase: React.FC = () => {
  const router = useRouter();
  const { name, price } = router.query;

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    birthday: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { firstName, lastName, birthday, cardNumber, expiryDate, cvv } =
      formData;
    if (firstName && lastName && birthday && cardNumber && expiryDate && cvv) {
      setSubmitted(true);
      setFormData({
        firstName: "",
        lastName: "",
        birthday: "",
        cardNumber: "",
        expiryDate: "",
        cvv: "",
      });
      localStorage.removeItem("cart");
      setTimeout(() => {
        router.push("/ProductsPage");
      }, 3000);
    } else {
      alert("Please fill in all fields.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let newValue = value;
    if (name === "cardNumber" || name === "expiryDate" || name === "cvv") {
      newValue = newValue.replace(/\D/g, ""); // Remove non-numeric characters
    }
    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  return (
    <div className="container mx-auto grid grid-cols-2 gap-8 mt-8 p-8">
      <div className="p-4">
        <div className="w-full">
          <h1 className="text-3xl font-bold mb-4">Product Information</h1>
          <div className="border border-gray-300 rounded-lg p-4 mb-4 bg-gray-50">
            <p className="mb-2">
              <strong>Name:</strong> {name}
            </p>
            <p className="mb-2">
              <strong>Price:</strong> ${price}
            </p>
          </div>
        </div>
        <Link href="/ProductsPage">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4 focus:outline-none focus:ring focus:border-blue-500">
            &lt; Go Back
          </button>
        </Link>
      </div>
      <div className="p-4">
        <div className="w-full">
          <h1 className="text-3xl font-bold mb-4">Card Information</h1>
          <form
            className="border border-gray-300 rounded-lg p-4 bg-gray-50"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="birthday"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Birthday
              </label>
              <input
                type="date"
                id="birthday"
                name="birthday"
                value={formData.birthday}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="cardNumber"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Card Number
              </label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="expiryDate"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Expiry Date
              </label>
              <input
                type="text"
                id="expiryDate"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="cvv"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                CVV
              </label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-4 focus:outline-none focus:ring focus:border-blue-500"
            >
              Submit
            </button>
            {submitted && (
              <div
                className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mt-4"
                role="alert"
              >
                <strong className="font-bold">
                  Congrats on your purchase!
                </strong>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
