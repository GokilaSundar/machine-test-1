import { useState, useEffect } from "react";
import { getProducts } from "../api/product";
import Button from "../common/Button";
import { Link } from "react-router-dom";
import { deleteProduct } from "../api/product";
import { indianDate } from "../../utils/date";
const Product = () => {
  const [product, setProduct] = useState([]);
//   console.log(product)

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
      <Link to='/AddProduct'>
        
        <Button
          text="Add Product"
          className=" border-blue-500 bg-blue-500 text-white"
        />
      </Link>

      <div className="border-2 border-gray-400 my-3 mx-5">
        <div className=" border border-b-slate-400  text-lg font-bold text-slate-600">
          <div className="ml-2 grid grid-cols-5">
            <span>Product</span>
            <span>Price</span>
            <span>Date</span>
          </div>
        </div>

        {product?.map((product) => (
          <div key={product?._id} className="border-slate-300 border-b p-2">
            <div  className="ml-2 grid grid-cols-5 ">
              <span className="">{product?.title}</span>
              <span className="">{product?.price}</span>
              <span>{indianDate(product?.createdAt)}</span>
              <button className="text-[#424ef5]">Edit</button>
              <button onClick={()=>handleDelete(product._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
