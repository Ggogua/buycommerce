import React, { useState } from "react";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
    birthdate: "",
  });
  const [formValid, setFormValid] = useState(false);

  const handleUsernameChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setUsername(e.target.value);
    setErrors((prevState) => ({ ...prevState, username: "" }));
  };

  const handleEmailChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setEmail(e.target.value);
    setErrors((prevState) => ({ ...prevState, email: "" }));
  };

  const handlePasswordChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setPassword(e.target.value);
    setErrors((prevState) => ({ ...prevState, password: "" }));
  };

  const handleRepeatPasswordChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setRepeatPassword(e.target.value);
    setErrors((prevState) => ({ ...prevState, repeatPassword: "" }));
  };

  const handleBirthdateChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setBirthdate(e.target.value);
    setErrors((prevState) => ({ ...prevState, birthdate: "" }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    let hasError = false;

    if (username.length < 3) {
      setErrors((prevState) => ({
        ...prevState,
        username: "Username must have at least 3 characters",
      }));
      hasError = true;
    }

    if (!/(?=.*[A-Z])(?=.*[a-z]).{8,}/.test(password)) {
      setErrors((prevState) => ({
        ...prevState,
        password:
          "Password must have at least 8 characters and contain at least one uppercase letter",
      }));
      hasError = true;
    }

    if (password !== repeatPassword) {
      setErrors((prevState) => ({
        ...prevState,
        repeatPassword: "Passwords do not match",
      }));
      hasError = true;
    }

    const birthdateYear = new Date(birthdate).getFullYear();
    if (birthdateYear >= 2010) {
      setErrors((prevState) => ({
        ...prevState,
        birthdate: "Birthdate year must be before 2010",
      }));
      hasError = true;
    }

    if (hasError) {
      setFormValid(false);
      return;
    }

    const userData = {
      username,
      email,
      birthdate,
    };
    localStorage.setItem("userData", JSON.stringify(userData));
    window.location.href = "/ProductsPageLogged";

    setFormValid(true);
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Sign Up</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700">
            Username
          </label>
          <input
            type="text"
            id="username"
            className={`border ${
              errors.username ? "border-red-500" : "border-gray-300"
            } rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500`}
            value={username}
            onChange={handleUsernameChange}
          />
          {errors.username && (
            <p className="text-red-500 text-sm">{errors.username}</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            className={`border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500`}
            value={email}
            onChange={handleEmailChange}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            className={`border ${
              errors.password ? "border-red-500" : "border-gray-300"
            } rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500`}
            value={password}
            onChange={handlePasswordChange}
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password}</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="repeatPassword" className="block text-gray-700">
            Repeat Password
          </label>
          <input
            type="password"
            id="repeatPassword"
            className={`border ${
              errors.repeatPassword ? "border-red-500" : "border-gray-300"
            } rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500`}
            value={repeatPassword}
            onChange={handleRepeatPasswordChange}
          />
          {errors.repeatPassword && (
            <p className="text-red-500 text-sm">{errors.repeatPassword}</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="birthdate" className="block text-gray-700">
            Birthdate
          </label>
          <input
            type="date"
            id="birthdate"
            className={`border ${
              errors.birthdate ? "border-red-500" : "border-gray-300"
            } rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500`}
            value={birthdate}
            onChange={handleBirthdateChange}
          />
          {errors.birthdate && (
            <p className="text-red-500 text-sm">{errors.birthdate}</p>
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
