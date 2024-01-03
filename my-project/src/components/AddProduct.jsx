import InputField from "../common/InputField";
import Button from "../common/Button";
const AddProduct = () => {
  return (
    <div className="py-10 grid justify-center ">
      <div className="border-[1.5px] grid gap-y-10 p-5 border-gray-400 rounded-lg bg-white">
        <div className="grid gap-y-4">
          <InputField
            type="text"
            placeholder="Enter Product Name"
            label="Product Name"
            className="w-96 border-2"
          />
          <InputField
            type="number"
            placeholder="Enter Product Name"
            label="Product Price"
            className="w-96 border-2"
          />
        </div>

        <Button text="ADD" className="border-blue-500 bg-blue-500 text-white" />
      </div>
    </div>
  );
};

export default AddProduct;
