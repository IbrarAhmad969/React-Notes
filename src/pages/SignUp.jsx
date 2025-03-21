import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

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
            Already have an Account? <u className="cursor-pointer">Login</u>
          </p>

          <div className="flex flex-col md:flex-row mt-10 gap-3">
            <input
              className="w-full md:flex-1 border rounded p-2.5 bg-gray-700"
              type="text"
              placeholder="First Name"
            />
            <input
              className="w-full md:flex-1 border rounded p-2.5 bg-gray-700"
              type="text"
              placeholder="Last Name"
            />
          </div>

          <input
            className="w-full mt-5 border rounded p-2.5 bg-gray-700"
            type="text"
            placeholder="Email"
          />
          <div className="relative w-full">
            <input
              className=" w-full mt-5 border rounded p-2.5 bg-gray-700"
              type={showPassword ? "text" : "password"} // toggle
              placeholder="Password"
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/10 text-gray-400"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <label className="flex items-center space-x-2 mt-5">
            <input
              className="w-5 h-5 border-2 border-white rounded-md checked:border-white"
              type="checkbox"
            />
            <span>
              I agree to the{" "}
              <span className="text-purple-400 cursor-pointer">
                Terms & Conditions
              </span>
            </span>
          </label>

          <button className="w-full mt-5 rounded p-2.5 bg-purple-700 cursor-pointer hover:bg-purple-800 transition">
            Create Account
          </button>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
