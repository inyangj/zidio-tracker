import React, { Children } from "react";

const Input = ({
  label,
  type,
  name,
  value,
  onChange,
  required,
  placeholder,
  className,
  labelClass,
  inputClass,
  coverClass,
  children,
}) => {
  return (
    <div className={inputClass}>
      <label className={`mb-[0.25rem] ${labelClass}`}>{label}</label>

      <div className= {`p-[0.75rem] border w-full rounded-[0.27rem] flex items-center ${coverClass}`} >
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          className={`w-full  bg-transparent pl-1 outline-none ${className}`}
        />
        {children}
      </div>
    </div>
  );
};

export default Input;
