import React, { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig"; // Import Firebase auth
import { signInWithEmailAndPassword } from "firebase/auth";
import { CircularProgress } from "@mui/material";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    setErrorMessage("");
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      console.log("User Logged In: ", userCredential);
      navigate("/signup"); // Redirect to dashboard after login
    } catch (error) {
      if (error.code === "auth/invalid-credential") {
        setErrorMessage("Invalid username or password. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen bg-gradient-to-r from-slate-900 to-slate-700 text-white">
      {/* Left Container */}
      <section className="hidden md:flex flex-1 items-center justify-center text-center p-6">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-4xl font-bold leading-tight font-serif">
            Welcome Back!
          </h1>
          <p className="mt-5 ml-9 text-lg text-gray-200 max-w-md">
            Log in to continue your journey with us. Your adventure is just one
            step away!
          </p>
        </motion.div>
      </section>

      {/* Right Container */}
      <section className="flex-1 flex justify-center items-center">
        <div className="w-full sm:w-96 md:w-3/4 lg:w-7/9 mx-auto">
          <h1 className="font-bold text-3xl text-center md:text-left">Login</h1>
          <p className="text-gray-400 mt-1.5 text-center md:text-left">
            Don't have an account?{"  "}
            <span
              className="text-purple-400 cursor-pointer"
              onClick={() => navigate("/signup")}
            >
              <u>Sign Up</u>
            </span>
          </p>

          {/* ReactHook form */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="w-full mt-5 border rounded p-2.5 bg-gray-700"
              type="text"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid Email Address",
                },
              })}
            />
            {errors.email && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <p className="text-red-400 text-sm mt-1">
                  {errors.email.message}
                </p>
              </motion.div>
            )}

            <div className="relative w-full">
              <input
                className="w-full mt-5 border rounded p-2.5 bg-gray-700"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 5,
                    message: "Password must be at least 5 characters long",
                  },
                })}
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/10 text-gray-400"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff size={20} className="cursor-pointer" />
                ) : (
                  <Eye size={20} className="cursor-pointer" />
                )}
              </button>
            </div>
            {errors.password && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <p className="text-red-400 text-sm mt-1">
                  {errors.password.message}
                </p>
              </motion.div>
            )}
            {errorMessage && (
              <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
            )}

            <button
              type="submit"
              className="w-full mt-5 rounded p-2.5 bg-purple-700 cursor-pointer hover:bg-purple-800 transition"
            >
              {loading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                "Login"
              )}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;
