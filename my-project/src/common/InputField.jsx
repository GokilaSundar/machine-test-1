import React from "react";
import { useState } from "react";
const InputField = ({ label, type, placeholder }) => {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  // console.log(value)
  return (
    <div>
      <label className="font-normal text-base text-slate-800 -tracking-wide">
        {label}
      </label>
      <input
        value={value}
        onChange={handleChange}
        className="border-[1.5px]  mt-2 rounded-[4px] py-[7px] w-full bg-slate-50 placeholder:text-[15px] pl-2"
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
