import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../authProvider/AuthProvider";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import toast from "react-hot-toast";

const SignUp = () => {
  const { createNewUser, setUser, updateUserProfile, googleLogin } =
    useContext(AuthContext);
  const [error, setError] = useState({});
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const regex = /^(?=.*[A-Z])(?=.*[a-z]).*$/;

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        // console.log(user);
        setUser(user);
        navigate("/");
        toast.success('Successfully login your account.')
      })
      .catch((error) => {
        console.log("Error", error.code);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError({});
    const form = new FormData(e.target);
    const name = form.get("name");
    if (name.length < 5) {
      setError({ ...error, name: "Name must be at least 5 characters long." });
    }
    const photo = form.get("photo");
    const email = form.get("email");
    const terms = e.target.terms.checked;
    if (!terms) {
     toast.error("You must agree to the terms and conditions.")
      return;
    }

    const password = form.get("password");
    if (!regex.test(password)) {
      toast.error("Password must contain at least one uppercase and one lowercase letter.");
        
      return;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long.")
    }
    // console.log(name,photo, email, password);

     
    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        toast.success("Successfully account register")
        setUser(user);
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            // toast.success('Profile updated successfully');
            navigate("/");
          })
          .catch((error) => {
            // console.error('Error updating profile:', error);
          });
      })
      .catch((error) => {
        // console.log(error.code);
      });
  };
   
  return (
    <div className="min-h-[calc(100vh-80px)] flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl p-10 rounded-none">
        <h2 className="font-semibold text-3xl py-5 text-center">
          Register your account
        </h2>
        <div className="divider"></div>
        <form onSubmit={handleSubmit} className="card-body pt-0">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              className="input input-bordered"
              required
            />
            {error.name && <p className="text-red-500">{error.name}</p>}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="Enter your photo url"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
            {error.email && <p className="text-red-500">{error.email}</p>}
          </div>

          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>

            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="password"
              className="input input-bordered"
              required
            />
            <p
              onClick={() => setShowPassword(!showPassword)}
              className="btn btn-xs bg-transparent border-none hover:bg-transparent absolute right-4 top-12"
            >
              {showPassword ? (
                <FaEyeSlash className="text-lg" />
              ) : (
                <FaEye className="text-lg" />
              )}
            </p>
              {error.latter && <p className="text-red-500">{error.latter}</p>}
            {error.password && <p className="text-red-500">{error.password}</p>}
          </div>

          <div className="form-control mt-2">
            <label className="label justify-start cursor-pointer">
              <input name="terms" type="checkbox" className="checkbox mr-5" />
              <span className="">Accept Our Terms And Condition.</span>
            </label>
            {error.terms && <p className="text-red-500">{error.terms}</p>}
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none">Register</button>
          </div>
        </form>
        <p className="font-semibold text-center pb-5">
          Already Have An Account? Please{" "}
          <Link className="text-red-500" to={"/signIn"}>
            Login
          </Link>
        </p>
        <div className="divider card-body py-1">or</div>
        <div className="card-body pt-2 text-center ">
          <button
            className="btn btn-neutral rounded-none "
            onClick={handleGoogleLogin}
          >
            <FaGoogle /> Login with Google
          </button>
          {/* <button
            className="btn btn-neutral rounded-none "
            onClick={() => handleGithubLogin()}
          >
            <FaGithub /> Login with Github
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
