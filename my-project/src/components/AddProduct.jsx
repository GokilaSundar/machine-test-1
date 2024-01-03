import InputField from "../common/InputField";
import Button from "../common/Button";
import { addProduct } from "../api/product";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const AddProduct = () => {
  const [product, setProduct] = useState({ title: "", price: "" });
const navigate=useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
       await addProduct(product)
        navigate('/products')
        // console.log(postProduct)
    }
    catch{
        console.log("Error While Add Product")
    }
    setProduct({ title: "", price: "" });
    console.log(product);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="py-10 grid justify-center ">
        <div className="border-[1.5px] grid gap-y-10 p-5 border-gray-400 rounded-lg bg-white">
          <div className="grid gap-y-4">
            <InputField
              type="text"
              name="title"
              value={product.title}
              onChange={handleChange}
              placeholder="Enter Product Name"
              label="Product Name"
              className="w-96 border-2"
            />
            <InputField
              name="price"
              value={product.price}
              onChange={handleChange}
              type="number"
              placeholder="Enter Product Name"
              label="Product Price"
              className="w-96 border-2"
            />
          </div>

          <Button
            text="ADD"
            type="submit"
            className="border-blue-500 bg-blue-500 text-white"
          />
        </div>
      </div>
    </form>
  );
};

export default AddProduct;
