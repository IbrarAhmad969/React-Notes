import React, { useState } from "react";
import { animate, motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { auth } from "../firebaseConfig"; // Import Firebase auth
import { CircularProgress } from "@mui/material";

import {createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false)




  const onSubmit = async(data) => {
    setLoading(true)
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth, 
        data.email, 
        data.password,
      )
      navigate("/dashboard");
    } catch (error) {
      setErrorMessage(error.message)
    }
    finally{
      setLoading(false)
      
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
            Welcome to Your Next Adventure!
          </h1>
          <p className="mt-5 ml-9 text-lg text-gray-200 max-w-md">
            Join a community where ideas grow, friendships flourish, and
            opportunities await. Lets build something amazing together!
          </p>
        </motion.div>
      </section>

      {/* Right Container */}
      <section className="flex-1 flex justify-center items-center ">
        <div className="w-full sm:w-96 md:w-3/4 lg:w-7/9 mx-auto">
          <h1 className="font-bold text-3xl text-center md:text-left">
            Create An Account
          </h1>
          <p className="text-gray-400 mt-1.5 text-center md:text-left">
            Already have an Account?{" "}
            <span
              className="text-purple-400 cursor-pointer"
              onClick={() => navigate("/")}
            >
              <u>Login</u>
            </span>
          </p>

          {/* ReactHook form */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col md:flex-row mt-10 gap-3">
              {/* First Name Field */}
              <div className="w-full md:flex-1">
                <input
                  {...register("firstName", {
                    required: "First Name required",
                  })}
                  className="w-full border rounded p-2.5 bg-gray-700"
                  placeholder="First Name"
                  type="text"
                />
                {errors.firstName && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <p className="text-red-400 text-sm mt-1">
                      {errors.firstName.message}
                    </p>
                  </motion.div>
                )}
              </div>

              {/* Last Name Field */}
              <div className="w-full md:flex-1">
                <input
                  {...register("lastName", {
                    required: "Last Name is required",
                  })}
                  className="w-full border rounded p-2.5 bg-gray-700"
                  placeholder="Last Name"
                  type="text"
                />
                {errors.lastName && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <p className="text-red-400 text-sm mt-1">
                      {errors.lastName.message}
                    </p>
                  </motion.div>
                )}
              </div>
            </div>

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
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <p className="text-red-400 text-sm mt-1">
                  {errors.email.message}
                </p>
              </motion.div>
            )}
            <div className="relative w-full">
              <input
                className=" w-full mt-5 border rounded p-2.5 bg-gray-700"
                type={showPassword ? "text" : "password"} // toggle
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
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <p className="text-red-400 text-sm mt-1">
                  {errors.password.message}
                </p>
              </motion.div>
            )}
            <label className="flex items-center space-x-2 mt-5">
              <input
                className="w-5 h-5 border-2 border-white rounded-md checked:border-white"
                type="checkbox"
                {...register("terms", {
                  required: "Mark Checkbox",
                })}
              />

              <span>
                I agree to the{" "}
                <span className="text-purple-400 cursor-pointer">
                  Terms & Conditions
                </span>
              </span>
            </label>
            {errors.terms && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <p className="text-red-400 text-sm mt-1">
                  {errors.terms.message}
                </p>
              </motion.div>
            )}

            <button type="submit" className="w-full mt-5 rounded p-2.5 bg-purple-700 cursor-pointer hover:bg-purple-800 transition">
              {loading? <CircularProgress size={24} color="inherit"/> : "Create Account"}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
