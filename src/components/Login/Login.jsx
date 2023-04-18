import React, { useRef } from 'react'

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    const emailValue = emailRef.current.value;
    const passwordValue = passwordRef.current.value;
    console.log("Email:", emailValue, "Password:", passwordValue);
  }

  return (
    <div className="h-screen bg-primary-100 flex items-center justify-center">
      <div className="max-w-lg w-full p-10 bg-white rounded-lg shadow-lg">
        <h2 className="font-bold text-4xl py-5 text-center">Login</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-800">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              className="input input-bordered"
              ref={emailRef}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-800">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              ref={passwordRef}
            />
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
          </div>
        </form>
      </div>
    </div>
  );

}

export default Login