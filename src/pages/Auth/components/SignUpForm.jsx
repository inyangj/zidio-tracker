import React, { useState } from 'react'
import { Button, Input } from '../../../components/elements'
import { FaCheck } from "react-icons/fa";

const SignUpForm = ({formData, setFormData, handleInputChange, handleSignup, isLoading}) => {
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
        label={`First Name`}
        labelClass={`text-[14px]`}
        name="firstname"
        onChange={handleInputChange}
        value={formData.firstname}
        type="text"
        placeholder="Enter your first name"
        required
      />
      <Input
        label={`Last Name`}
        labelClass={`text-[14px]`}
        name="lastname"
        onChange={handleInputChange}
        value={formData.lastname}
        type="text"
        placeholder="Enter your last name"
        required
      />
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
        labelClass={`text-[14px]`}
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
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
        Create an Account
      </Button>
    </form>
  );
}

export default SignUpForm