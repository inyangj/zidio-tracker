import React, { useState } from "react";
import { Button, Input } from "../../../components/elements";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import routes from "../../../router/routes";

const SignUpForm = ({
  formData,
  setFormData,
  handleInputChange,
  handleLogin,
  isLoading,
}) => {
   const [showPassword, setShowPassword] = useState(false);

   const togglePasswordVisibility = () => {
     setShowPassword(!showPassword);
   };


  return (
    <form className="flex flex-col ">
      <Input
        label={`Email Address`}
        labelClass={`text-[14px]`}
        name="email"
        onChange={handleInputChange}
        value={formData.email}
        type="email"
        placeholder="Enter your email address"
        required
      />
      <Input
        label={`Password`}

        inputClass={`mt-6`}
        labelClass={`text-[14px]`}
        name="password"
        type={showPassword ? "text" : "password"}
        value={formData.password}
        onChange={handleInputChange}
        placeholder="Enter your password"
        required
      >
        <button onClick={togglePasswordVisibility}>
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      </Input>
      <Link
        to={routes.FORGOT_PASSWORD}
        className="w-full text-end text-xs text-danger font-semibold mt-4 mb-8"
      >
        Forgot Password?
      </Link>

      <Button type={"submit"} className={`bg-purple2`}>
        Sign In
      </Button>
    </form>
  );
};

export default SignUpForm;
