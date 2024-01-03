import { axios } from "../libs/axios";

export const getProducts = async ()=>{
    const {data} =await axios.get('/products')
    console.log({data})
    return data
}