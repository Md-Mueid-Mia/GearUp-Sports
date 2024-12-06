import { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../authProvider/AuthProvider";
import {FaEye, FaEyeSlash,  FaGoogle } from "react-icons/fa";
import { sendPasswordResetEmail } from "firebase/auth";
import auth from "../firebase/firebase.config";
import toast from "react-hot-toast";

const SignIn = () => {
  const {user, userLogin, setUser, googleLogin, twitterLogin, githubLogin, facebookLogin } =
    useContext(AuthContext);
  const [error, setError] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const emailRef = useRef();
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        navigate(location.state)
        toast.success('Successfully login your account.')
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  const handleTwitterLogin = () => {
    twitterLogin()
     .then((result) => {
        const user = result.user;
        navigate(location.state)
        toast.success('Successfully login your account.')
      })
     .catch((error) => {
        console.log("Error", error);
      });
  }

  const handlePasswordReset = () => {
    
    const email = emailRef.current.value;
    if(!email){
      toast.error('Please enter your email address.')
    }else{
      sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success('Password reset link sent to your email address.')
      })
      .catch((error) => {
        toast.error('Error sending password reset link.')
      })
    }
  };

  const handleFacebookLogin = () => {
    facebookLogin()
     .then((result) => {
        const user = result.user;
        navigate(location.state)
        toast.success('Successfully login your account.')
      })
     .catch((error) => {
        console.log("Error", error);
      });
  }

  const handleGithubLogin = () => {
    githubLogin()
     .then((result) => {
        const user = result.user;
        navigate(location.state)
        toast.success('Successfully login your account.')
      })
     .catch((error) => {
        console.log("Error", error);
      });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");

    // console.log(email,password);

    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(location.state)
        toast.success('Successfully login your account.')
      })
      .catch((err) => {
        setError({ ...error, login: err.code });
        toast.error(err.message)
      });
  };
 
  return (
    <div className="min-h-[calc(100vh-120px)] flex justify-center items-center ">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-xl border">
        <h2 className="text-xl md:text-3xl font-semibold text-center pt-5">
        Sign-In Your Account
        </h2>
        <div className="divider"></div>
        <form onSubmit={handleSubmit} className="card-body pt-0">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              ref={emailRef}
              className="input input-bordered"
              required
            />
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
          <Link onClick={handlePasswordReset}>Forget Password?</Link>
          <div className="form-control mt-6">
            <button onClick={()=>navigate(location.state)} className="btn btn-neutral hover:bg-orange-600 text-white rounded-lg border-none">SIGN-IN</button>
          </div>
        </form>
        <p className="text-center font-semibold">
          Don’t Have An Account ? Please{" "}
          <Link to={"/signUp"} className="text-red-500">
            SIGN-UP
          </Link>
        </p>
        <div className="divider card-body py-1">or</div>
        <div className="grid md:grid-cols-2 gap-5 pt-2 text-center p-7">
          <button
            className="btn btn-neutral hover:bg-orange-600 text-white rounded-lg border-none "
            onClick={handleGoogleLogin}
          >
            <img className="w-6" src="https://i.ibb.co.com/YW0KKhc/R.png" alt="" /> Google
          </button>
          <button
            className="btn btn-neutral hover:bg-orange-600 text-white rounded-lg border-none "
            onClick={ handleTwitterLogin}
          >
            <img className="w-7" src="https://i.ibb.co.com/SJFHpF7/R-1.png" alt="" />  Twitter
          </button>
          <button
            className="btn btn-neutral hover:bg-orange-600 text-white rounded-lg border-none "
            onClick={ handleFacebookLogin}
          >
            <img className="w-6" src="https://i.ibb.co.com/gyx4hLH/R-2.png" alt="" />  Facebook
          </button>
          <button
            className="btn btn-neutral hover:bg-orange-600 text-white rounded-lg border-none "
            onClick={handleGithubLogin}
          >
            <img className="w-6" src="https://i.ibb.co.com/bj0xRNj/github-PNG28.png" alt="" />  Github
          </button>
         
        </div>
      </div>
    </div>
  );
};

export default SignIn;
