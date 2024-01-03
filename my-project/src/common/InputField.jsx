import clsx from "clsx";
const InputField = ({ label, type, placeholder,className,name,onChange,value }) => {
  
  // console.log(value)
  return (
    <div className="grid gap-y-2">
      <label className="font-normal text-base text-slate-800 -tracking-wide">
        {label}
      </label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        className={clsx(className,"border-[1.5px]  mt-2 rounded-[4px] py-[7px] bg-slate-50 placeholder:text-[15px] pl-2")}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
