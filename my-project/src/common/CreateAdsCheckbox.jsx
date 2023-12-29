import clsx from "clsx";
const CreateAdsCheckbox = ({
  img,
  text,
  alt,
  id,
  className,
  onChange,
  checked,
}) => {
  return (
    <div className="cursor-pointer  rounded-lg bg-white">
      <div className=" rounded-lg shadow-lg">
        <div className="pl-5 pt-5 ">
          <input
            type="checkbox"
            className="w-5 h-5"
            id={id}
            onChange={onChange}
            checked={checked}
          />
        </div>
        <label htmlFor={id} className="cursor-pointer ">
          <div className="px-10  pt-5">
            <img
              src={img}
              alt={alt}
              className={clsx(className, "object-fill  h-96")}
            />
          </div>
          <div className="text-center bg-gray-100 p-4 rounded-b-md">
            <h4 className="text-base font-normal text-slate-500">Create</h4>
            <h1 className="text-gray-700 text-lg font-bold">{text}</h1>
          </div>
        </label>
      </div>
    </div>
  );
};

export default CreateAdsCheckbox;
