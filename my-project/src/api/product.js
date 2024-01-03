import { axios } from "../libs/axios";

export const getProducts = async ()=>{
    const {data} =await axios.get('/products')
    return data
}
export const addProduct = async productAdd=>{
    try{
        const {data} =await axios.post('/products',productAdd)
        alert("Product Successfully Submitted")
        return data
    }catch{
        alert("Error While Add The Product")
    }
    
}
export const deleteProduct = async (id)=>{
    try{
        const {data} =await axios.delete(`/products/${id}`)
        alert("Product Successfully Deleted")
        return data
    }catch{
        alert("Error While Delete The Product")
    }
    
}