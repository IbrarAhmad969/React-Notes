import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const[isSubmitting, setIsSubmitting] = useState(false)
  const [submittedData, setSubmittedData] = useState();

  const onSubmit = (data) => {
    setIsSubmitting(true);

    setTimeout(() => {
      alert("Form Submitted: ", data);
      setIsSubmitting(false);
    }, 5000);

    setSubmittedData(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("Email", {
          required: "Invalid Email Address",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid Email Address ",
          },
        })}
        placeholder="Email"
        className="border border-amber-500 rounded"
      />
      {errors.Email && <p className="">{errors.Email.message}</p>}

      <br />
      <br />
      <input
        {...register("Password", {
          required: "Please Enter Password greater than 5 characters. ",
          minLength: {
            value: 5,
            message: "Please Enter Password greater than 5 characters. ",
          },
        })}
        placeholder="Password"
        className="border border-amber-500 rounded"
      />
      {errors.Password && <p>{errors.Password.message}</p>}

      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          value="HTML"
          {...register("Skills")}
          className="w-4 h-4"
        />
        <span>HTML</span>
      </label>

      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          value="CSS"
          {...register("Skills")}
          className="w-4 h-4"
        />
        <span>CSS</span>
      </label>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`bg-amber-700 rounded p-2.5 text-white ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}>
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default Login;
