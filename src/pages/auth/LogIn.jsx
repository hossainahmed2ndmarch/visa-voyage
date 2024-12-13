import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";

const LogIn = () => {
  const { userLogIn, setUser, signUpWithGoogle, setResetEmail } =
    useContext(AuthContext);
  const [error, setError] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state || "/";
  const [showPassword, setShowPassword] = useState(false);

  // Validation Input Field
  const validateForm = (email, password) => {
    const errors = {};

    if (!email) {
      errors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      errors.email = "Invalid email address.";
    }

    if (!password) {
      errors.password = "Password is required.";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters long.";
    }

    return errors;
  };

  // Submit functionality
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const validationErrors = validateForm(email, password);
    if (Object.keys(validationErrors).length > 0) {
      setError(validationErrors);
      return;
    }

    // Login
    userLogIn(email, password)
      .then((res) => {
        const user = res.user;
        setUser(user);
        e.target.reset();
        toast.success(`🎉 Welcome back! ${user?.displayName} Happy learning!`);
        navigate(from);
      })
      .catch((err) => {
        const errorMessage =
          err.code === "auth/wrong-password"
            ? "Incorrect password. Please try again."
            : err.message;
        setError({ login: errorMessage });
      });
  };

  // Sign up with Google
  const handleGoogleSignUp = () => {
    signUpWithGoogle().then((res) => {
      toast.success("🎉 Welcome! Your Google signup was successful!", {
        icon: "🌟",
      });
      navigate(from);
    });
  };

  // Forgot password functionality
  const handleForgotPasswordRedirect = (e) => {
    e.preventDefault();
    const email = document.querySelector("input[name='email']").value;
    setResetEmail(email);
    navigate("/auth/forgot-password");
  };

  return (
    <div className="min-h-screen flex items-center justify-center  py-8">
      <Helmet>
        <title>Login | VisaVoyage</title>
      </Helmet>
      <div className="card bg-white/20 backdrop-blur-sm rounded-3xl shadow-2xl w-full max-w-lg p-6 md:p-12 flex flex-col items-center">
        <h2 className="text-4xl font-semibold text-navyText text-center mb-6">
          Login to your account
        </h2>
        <form onSubmit={handleSubmit} className="w-full">
          {/* Email */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text text-xl text-navyText font-semibold">
                Email address
              </span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="py-2 px-4 rounded-lg shadow-[inset_4px_4px_8px_rgba(0,0,0,0.2),inset_-4px_-4px_8px_rgba(255,255,255,0.7)] bg-gray-100 dark:bg-gray-700 text-blue-600 dark:text-teal-300 font-semibold transition-all  w-full focus:outline-none"
              required
            />
            {error.email && (
              <p className="text-red-600 text-sm mt-2 font-semibold">
                {error.email}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="form-control relative mb-6">
            <label className="label">
              <span className="label-text text-xl text-navyText font-semibold">
                Password
              </span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              className="py-2 px-4 rounded-lg shadow-[inset_4px_4px_8px_rgba(0,0,0,0.2),inset_-4px_-4px_8px_rgba(255,255,255,0.7)] bg-gray-100 dark:bg-gray-700 text-blue-600 dark:text-teal-300 font-semibold transition-all  w-full focus:outline-none"
              required
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="btn btn-xs bg-transparent hover:bg-transparent shadow-none border-none absolute right-4 top-14"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
            {error.password && (
              <p className="text-red-600 text-sm mt-2 font-semibold">
                {error.password}
              </p>
            )}
            {error.login && (
              <p className="text-red-600 text-sm mt-2 font-semibold">
                {error.login}
              </p>
            )}
            <label className="label">
              <a
                href="#"
                onClick={handleForgotPasswordRedirect}
                className="label-text-alt text-navyText font-semibold link link-hover"
              >
                Forgot password?
              </a>
            </label>
          </div>

          {/* Submit Button */}
          <div className="form-control mt-6">
            <button className="py-2 px-4 rounded-lg bg-white shadow-[4px_4px_8px_rgba(0,0,0,0.2),-4px_-4px_8px_rgba(255,255,255,0.7)] font-semibold text-blue-600 transition-all hover:shadow-[5px_5px_10px_rgba(0,0,0,0.3),-5px_-5px_10px_rgba(255,255,255,0.2)] w-full">
              Login
            </button>
          </div>

          {/* Google Signup Button */}
          <div className="form-control mt-6">
            <h5 className="text-3xl font-semibold text-navyText text-center mb-6">
              Or
            </h5>
            <button
              onClick={handleGoogleSignUp}
              className="py-2 px-4 rounded-lg bg-white  shadow-[4px_4px_8px_rgba(0,0,0,0.2),-4px_-4px_8px_rgba(255,255,255,0.7)] font-semibold text-blue-600 transition-all hover:shadow-[5px_5px_10px_rgba(0,0,0,0.3),-5px_-5px_10px_rgba(255,255,255,0.2)] w-full flex items-center justify-center"
            >
              <FaGoogle />
              <span className="ml-2">Sign Up With Google</span>
            </button>
          </div>
        </form>
        <p className="font-semibold text-navyText text-center mt-6">
          Don’t Have An Account?{" "}
          <Link to={"/registration"} className="text-[#F75B5F]">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LogIn;
