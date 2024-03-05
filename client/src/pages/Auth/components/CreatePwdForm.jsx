import React, { useState } from "react";
import { Button, Input } from "../../../components/elements";
import { FaCheck } from "react-icons/fa";

const CreatePwdForm = ({
  formData,
  setFormData,
  handleInputChange,
  handleSignup,
  isLoading,
}) => {
  const [criteria, setCriteria] = useState({
    isMinLength: false,
    hasCapitalLetter: false,
    hasSymbol: false,
    hasNumber: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setCriteria({
      isMinLength: value.length >= 8,
      hasCapitalLetter: /[A-Z]/.test(value),
      hasSymbol: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(value),
      hasNumber: /\d/.test(value),
    });
  };
  return (
    <form className="flex flex-col gap-6">
      <Input
        label={`Create New Password`}
        labelClass={`text-[14px]`}
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Enter your password"
        required
      />
      <Input
        label={`Enter Password`}
        labelClass={`text-[14px]`}
        name="confirmPassword"
        type="password"
        value={formData.confirmPassword}
        onChange={handleInputChange}
        placeholder="Enter your password"
        required
      />
      <ul>
        <li className="flex gap-2">
          {criteria.isMinLength ? <FaCheck style={{ color: "green" }} /> : null}{" "}
          Minimum of 8 characters long
        </li>
        <li className="flex gap-2">
          {criteria.hasCapitalLetter ? (
            <FaCheck style={{ color: "green" }} />
          ) : null}{" "}
          At least one capital letter
        </li>
        <li className="flex gap-2">
          {criteria.hasSymbol ? <FaCheck style={{ color: "green" }} /> : null}{" "}
          At least one symbol
        </li>
        <li className="flex gap-2">
          {criteria.hasNumber ? <FaCheck style={{ color: "green" }} /> : null}{" "}
          At least one number
        </li>
      </ul>

      <Button type={"submit"} className={`bg-purple2`}>
        Reset Password
      </Button>
    </form>
  );
};

export default CreatePwdForm;
