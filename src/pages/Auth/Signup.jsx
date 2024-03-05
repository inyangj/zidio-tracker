import React, { useState } from "react";
import { Link } from "react-router-dom";
import routes from "../../router/routes";
import { google } from "../../assets/icons";
import Layout from "../../layout/AuthLayout";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignUpForm from "./components/SignUpForm";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [passwordMatch, setPasswordMatch] = useState(true);
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
        firstName: formData.firstname,
        lastName: formData.lastname,
        email: formData.email,
        password: formData.password,
        
      };

      try {
        setIsLoading(true);
        const response = await axios.post(`${url}/api/v1/users/signup`, data);

        if (response.status === 201) {
          toast.success("Registration successful!");
          localStorage.setItem("userData", response.data);
          setIsLoading(false);
          navigate("/");
        } else {
          toast.error("Registration failed.");
        }
      } catch (error) {
        toast.error("Registration failed.");
      }
  };

  return (
    <section className="grid justify-center w-full items-center">
      <div className="md:text-center md:mt-[106px] w-full px-[30px] pt-8 ">
        <h1 className="text-basedark font-bold text-4xl md:text-5xl">
          Get Started
        </h1>
        <p className="text-lg mt-2 mb-8">
          Enter your company email account to get started
        </p>
      </div>
      <div className="w-full px-[30px] pt-8 pb-4 md:shadow-formShadow mb-5 rounded-btnRadius">
        <SignUpForm formData={formData} setFormData={setFormData} handleInputChange={handleInputChange} handleSignup={handleSignup} isLoading={isLoading} />
        <div className="text-center ">
          <p className=" flex gap-2 w-full bg-gray_7 mt-8 mb-4 justify-center items-center py-4 rounded-btnRadius">
            <img src={google} alt="google-icon" />
            Sign up with Google
          </p>
          <p>
            By signing up, you agree to our{" "}
            <span className="text-blue1">Terms of Service</span> and{" "}
            <span className="text-blue1">Privacy Policy</span>
          </p>
          <p className="text-textgray text-sm mt-4 mb-10">
            Already have an account?{" "}
            <Link to={routes.LOGIN} className="text-based font-semibold">
              sign in with email
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Signup;
