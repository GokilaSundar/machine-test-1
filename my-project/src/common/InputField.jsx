import clsx from "clsx";
import { useState } from "react";
const InputField = ({ label, type, placeholder,className }) => {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  // console.log(value)
  return (
    <div className="grid gap-y-2">
      <label className="font-normal text-base text-slate-800 -tracking-wide">
        {label}
      </label>
      <input
        value={value}
        onChange={handleChange}
        className={clsx(className,"border-[1.5px]  mt-2 rounded-[4px] py-[7px] bg-slate-50 placeholder:text-[15px] pl-2")}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
