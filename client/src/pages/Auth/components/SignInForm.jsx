import React, { useState } from "react";
import { Button, Input } from "../../../components/elements";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import routes from "../../../router/routes";
import axios  from "axios";

const SignUpForm = ({
  formData,
  setFormData,
  handleInputChange,
  isLoading,
}) => {
   const [showPassword, setShowPassword] = useState(false);
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const togglePasswordVisibility = () => {
     setShowPassword(!showPassword);
   };

   const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };  

   const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
        // Here you can use the email and password state variables
        console.log("Email:", email);
        console.log("Password:", password);

    try{
      axios.post('/api/user/loginUser', {email, password})
      .then(response => {
        if(response.ok){
          toast.success('Signed up successfully!');
          navigate(routes.DASHBOARD);
        }
        else{
          throw new Error('Failed to sign in');
        }
      })
    }
    catch(err){

      console.error('Error signing in:' , err.message);
      toast.error('Failed to sign in. Please try again.');
    }       
  };

  return (
    <form className="flex flex-col " onSubmit={handleSubmit}>
      <Input
        label={`Email Address`}
        labelClass={`text-[14px]`}
        name="email"
        onChange={handleEmailChange}
        value={email}
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
        value={password}
        onChange={handlePasswordChange}
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

      <Button type="submit" className={`bg-purple2`} disabled={isLoading}>
        {isLoading ? 'Signing In...' : 'Sign In'}
      </Button>
    </form>
  );
};

export default SignUpForm;
