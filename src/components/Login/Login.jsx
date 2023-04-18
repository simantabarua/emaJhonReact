import React, { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { loginUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    const emailValue = emailRef.current.value;
    const passwordValue = passwordRef.current.value;
    loginUser(emailValue, passwordValue)
      .then((result) => console.log(result.user))
      .catch((error) => {
        console.log("createuser", error);
      });
  };

  function handleShowPassword() {
    setShowPassword(!showPassword);
  }

  return (
    <div className=" bg-primary-100 flex items-center justify-center">
      <div className="max-w-lg w-full p-10 bg-white rounded-lg shadow-lg">
        <h2 className="font-bold text-4xl py-5 text-center">Login</h2>
        <form className="space-y-6" onSubmit={handleLogin}>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-800">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              ref={emailRef}
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-800">Password</span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="password"
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
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6 flex flex-col gap-4">
            <button type="submit" className="btn bg-orange-400">
              Login
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
            <p className="text-center font-bold">New to EmaJhon?</p>
            <Link to="/signup" className="btn bg-orange-400">
              Create an account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
