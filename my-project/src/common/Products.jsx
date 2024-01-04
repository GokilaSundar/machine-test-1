import { useState, useEffect } from "react";
import { getProducts } from "../api/product";
import Button from "./Button";
import { Link } from "react-router-dom";
import { deleteProduct } from "../api/product";
import { indianDate } from "../../utils/date";
const Products = () => {
  const [product, setProduct] = useState([]);
const alignProduct=product.sort((a,b)=>new Date(b.createdAt)-new Date(a.createdAt))
  const handleDelete=async(id)=>{
    await deleteProduct(id)
    const update= product.filter(pro=>pro._id!==id)
    setProduct(update)
  }
  
  useEffect(() => {
    const getAllProduct = async () => {
      try {
        const products = await getProducts();
        setProduct(products);
      } catch (error) {
        console.log("error");
      }
    };
    getAllProduct();
  }, []);


  return (
    <div>
      <Link to='/products/add'>
        
        <Button
          text="Add Product"
          className=" border-blue-500 bg-blue-500 text-white"
        />
      </Link>

      <div className="border-2 rounded-md bg-white border-gray-400 my-3 mx-5">
        <div className=" border-b border-b-slate-400 p-2  text-lg font-bold text-slate-600">
          <div className="ml-2 grid grid-cols-5">
            <span>Product</span>
            <span>Price</span>
            <span>Date</span>
          </div>
        </div>

        {alignProduct?.map((product) => (
          <div key={product?._id} className="border-slate-300 last:border-b-0  border-b p-2">
            <div  className="ml-2 grid grid-cols-5 ">
              <span className="">{product?.title}</span>
              <span className="">{product?.price}</span>
              <span>{indianDate(product?.createdAt)}</span>
              <Link to={`/products/edit/${product?._id}`}>
              <button className="font-medium text-[#424ef5]" >Edit</button>

              </Link>
              <button className="text-red-600 font-medium" onClick={()=>handleDelete(product._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
