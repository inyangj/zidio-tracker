import React, { useState } from "react";
import { Link } from "react-router-dom";
import routes from "../../router/routes";
import { google } from "../../assets/icons";
import Layout from "../../layout/AuthLayout";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignInForm from "./components/SignInForm";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const navigate = useNavigate();
  const url = import.meta.env.VITE_APP_BASE_URL;

  const handleSignup = async (e) => {
    e.preventDefault();

    const data = {
      email: formData.email,
      password: formData.password,
    };

   
  };

  return (
    <section className="grid justify-center w-full items-center">
      <div className="md:text-center mt-[70px] md:mt-[106px] w-full px-[30px] pt-8 ">
        <h1 className="text-basedark font-bold text-4xl md:text-5xl">
          Welcome Back
        </h1>
        <p className="text-lg mt-2 mb-8">
          Enter your details to login to your organisation dashboard
        </p>
      </div>
      <div className="w-full px-[30px] pt-6 md:pt-8 pb-4 md:shadow-formShadow mb-5 rounded-btnRadius">
        <SignInForm
          formData={formData}
          handleInputChange={handleInputChange}
          handleSignup={handleSignup}
          isLoading={isLoading}
        />
        <div className="text-center ">
          <p className=" flex gap-2 w-full bg-gray_7 my-8 justify-center items-center py-4 rounded-btnRadius">
            <img src={google} alt="google-icon" />
            Sign up with Google
          </p>

          <p className="text-textgray text-sm mb-10">
            Don’t have an account?
            <Link to={routes.SIGN_UP} className="text-based font-semibold">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
