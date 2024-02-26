import React, { useState } from "react";
import { Link } from "react-router-dom";
import routes from "../../router/routes";
import { google } from "../../assets/icons";
import Layout from "../../layout/AuthLayout";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignUpForm from "./components/SignUpForm";
import CreatePwdForm from "./components/CreatePwdForm";

const CreatePwd = () => {
  const [formData, setFormData] = useState({
    confirmPassword: "",
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
    if (formData.password !== formData.confirmPassword) {
      setPasswordMatch(false);
      return;
    }

    const data = {
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
      <div className="md:text-center mt-[90px] md:mt-[106px] w-full px-[30px] pt-8 ">
        <h1 className="text-basedark font-bold text-3xl md:text-5xl">
          Create New Password
        </h1>
        <p className="text-lg mt-2 mb-8">
          One more step to go and you are back into your account.
        </p>
      </div>
      <div className="w-full px-[30px] md:pt-8 pb-10 md:shadow-formShadow mb-5 rounded-btnRadius">
        <CreatePwdForm
          formData={formData}
          setFormData={setFormData}
          handleInputChange={handleInputChange}
          handleSignup={handleSignup}
          isLoading={isLoading}
        />
      </div>
    </section>
  );
};

export default CreatePwd;
