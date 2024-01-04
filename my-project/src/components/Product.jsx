import InputField from "../common/InputField";
import Button from "../common/Button";
import { addProduct, getProduct, editProduct } from "../api/product";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Product = ({ id }) => {
  console.log(id, "product");
  const [product, setProduct] = useState({
    title: "",
    price: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  useEffect(() => {
    const getProductFromApi = async () => {
      try { if(id){
        const indiProduct = await getProduct(id);
        setProduct({
          title: indiProduct.title ,
          price: indiProduct.price ,
        })
       
      } else{
setProduct({ title: "", price: "" })
      }
      
      } catch {}
    };
    getProductFromApi();
  },[id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try { if(id){
      await editProduct({id,values:product})
    }else{
      await addProduct(product);
    }
    navigate("/products")
  
    } catch {
      console.log("Error While Add Product");
    }
    setProduct({ title: "", price: "" });
    // console.log(product);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="py-10 grid justify-center ">
        <div className="border-[1.5px] grid gap-y-10 p-5 border-gray-400 rounded-lg bg-white">
          <div className="grid gap-y-4">
            <InputField
              type="text"
              name="title"
              value={
               product.title
              }
              onChange={handleChange}
              placeholder={
                "Enter Product Name"
              }
              label="Product Name"
              className="w-96 border-2"
            />
            <InputField
              name="price"
              value={
               product.price
              }
              onChange={handleChange}
              type="number"
              placeholder={
                 "Enter Product Name"
              }
              label="Product Price"
              className="w-96 border-2"
            />
          </div>
          <div className="flex gap-4">
          <Link to='/products'>
          <Button
           text="Back" className="border-[1.5px] text-black " 
          />

          </Link>
         
          <Button
            text={id?"UPDATE":"ADD"}
            type="submit"
            className="border-blue-500 bg-blue-500 text-white"
          />
          </div>
        
        </div>
      </div>
    </form>
  );
};

export default Product;
