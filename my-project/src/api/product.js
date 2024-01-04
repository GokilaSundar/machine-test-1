import { axios } from "../libs/axios";

export const getProducts = async ()=>{
    const {data} =await axios.get('/products')
    return data
}
export const getProduct = async (id)=>{
    try{
        const {data} =await axios.get(`/products/${id}`)
        return data

    }catch{
        alert("Can't get Product")
    }
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
export const editProduct = async ({values,id})=>{
    try{
        const {data} =await axios.put(`/products/${id}`,{...values,_id:id})
        alert("Product Successfully Updated")
        return data
    }catch{
        alert("Error While Edit The Product")
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