import React, { useRef, useState } from "react";
import { FaBeer, FaEye, FaEyeSlash } from "react-icons/fa";
const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    const nameValue = nameRef.current.value;
    const emailValue = emailRef.current.value;
    const passwordValue = passwordRef.current.value;
    const confirmPasswordValue = confirmPasswordRef.current.value;

    if (passwordValue !== confirmPasswordValue) {
      setPasswordError("Passwords do not match");
    } else if (passwordValue.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
    } else if (!/(?=.*[a-z])/.test(passwordValue)) {
      setPasswordError("Password must contain at least one lowercase letter");
    } else if (!/(?=.*[A-Z])/.test(passwordValue)) {
      setPasswordError("Password must contain at least one uppercase letter");
    } else if (!/(?=.*\d)/.test(passwordValue)) {
      setPasswordError("Password must contain at least one number");
    } else if (!/(?=.*[@#$%^&+=])/.test(passwordValue)) {
      setPasswordError(
        "Password must contain at least one special character (@#$%^&+=)"
      );
    } else {
      setPasswordError("");
    }
  }

  function handleShowPassword() {
    setShowPassword(!showPassword);
  }

  function handleShowConfirmPassword() {
    setShowConfirmPassword(!showConfirmPassword);
  }

  return (
    <div className="h-screen bg-primary-100 flex items-center justify-center">
      <div className="max-w-lg w-full p-10 bg-white rounded-lg shadow-lg">
        <h2 className="font-bold text-4xl py-5 text-center">Sign Up</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-800">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered"
              ref={nameRef}
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-800">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered"
              ref={emailRef}
              required
            />
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text text-gray-800">Password</span>
            </label>
            <div className="relative ">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="input input-bordered w-full"
                ref={passwordRef}
                required
              />
              <button
                type="button"
                onClick={handleShowPassword}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                {showPassword ? (
                  <FaEye className="h-5 w-5 text-gray-500" />
                ) : (
                  <FaEyeSlash className="h-5 w-5 text-gray-500" />
                )}
              </button>
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-800">Confirm Password</span>
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                className="input input-bordered w-full"
                ref={confirmPasswordRef}
              />
              <button
                type="button"
                onClick={handleShowConfirmPassword}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                {showConfirmPassword ? (
                  <FaEye className="h-5 w-5 text-gray-500" />
                ) : (
                  <FaEyeSlash className="h-5 w-5 text-gray-500" />
                )}
              </button>
            </div>
            <p className="text-red-500">{passwordError}</p>
          </div>
          <div className="form-control mt-6 flex flex-col gap-4">
            <button
              type="submit"
              className="btn bg-orange-400 border-none hover:bg-orange-300"
            >
              Sign up
            </button>
            <button
              type="submit"
              className="btn bg-white text-black hover:bg-orange-300"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="Google logo"
                className="inline-block h-6 w-6 mr-2"
              />
              Google Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
