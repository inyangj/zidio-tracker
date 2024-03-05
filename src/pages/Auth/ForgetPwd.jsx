import React, {useRef, useState } from "react";
import { Link } from "react-router-dom";
import routes from "../../router/routes";
import { success } from "../../assets/icons";
import Layout from "../../layout/AuthLayout";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ForgetPwdForm from "./components/ForgetPwdForm";


const ForgetPwd = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showError, setShowError] = useState(false);

      const emailInputRef = useRef(null);

  const handleInputChange = (e) => {
   setEmail(e.target.value)
  };

  const navigate = useNavigate();
  const url = import.meta.env.VITE_APP_BASE_URL;

  const handlePasswordReset = async (e) => {
    e.preventDefault();

    const data = {
      email,
    };

    try {
      setIsLoading(true);
      setShowSuccess(true);
    }
    catch (error) {
        setShowError(true);
        emailInputRef.current.focus();
    }
  };

  return (
    <section className="grid justify-center w-full items-center">
      <div className="md:text-center mt-[70px] md:mt-[106px] w-full px-[30px] pt-8 ">
        <h1 className="text-basedark font-bold text-4xl md:text-5xl">
          Reset your password
        </h1>
        <p className="text-lg mt-2 mb-8">
          Don’t worry it happens to the best of us 🤗
        </p>
      </div>
      <div className="w-full px-[30px] pt-6 md:pt-8 pb-4 md:shadow-formShadow mb-5 rounded-btnRadius">
        <ForgetPwdForm
          email={email}
          handleInputChange={handleInputChange}
          handleSignup={handlePasswordReset}
          isLoading={isLoading}
          emailInputRef={emailInputRef}
          showError={showError}
        />
      </div>
      <div className="text-center mt-5 md:mt-10">
        <p className="text-textgray text-sm mb-10">
          <Link to={routes.LOGIN} className="text-based font-semibold text-lg">
            Back to Sign In
          </Link>
        </p>

        {showSuccess && (
          <div className="bg-success p-4 text-white rounded-[4px] flex gap-4 items-start">
            <img src={success} alt="success" />
            <div className="">
              <p className="text-start">Success</p>

              <p className="text-start">
                An email has been sent successfully to your registered email.
                Click the link to reset your password
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ForgetPwd;
