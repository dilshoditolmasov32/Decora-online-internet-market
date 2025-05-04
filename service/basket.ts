 import API_URL from "../api/interseptor"
 
 export const saveBasketProduct= async (productId: string)=>{
    try {
        const response= await API_URL.post("/basket",  { productId })
       return (response?.data)
    } catch (error) {
        console.log(error)
    }
 }

 export const getBasketProduct= async ()=>{
    try {
        const response= await API_URL.get("/user-baskets")
        return response?.data;
    } catch (error) {
        console.log(error)
        return null;
    }
 }