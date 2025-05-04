import API_URL from "../api/interseptor"
 
export const saveLikeProduct= async (productId:string)=>{
    try {
        const response= await API_URL.post(`/like/${productId}`)
        return response?.data;
    } catch (error) {
        console.log(error)
        return null;
    }
 }

export const getLikeProduct = async (params: unknown) => {
    try {
      const response = await API_URL.get("/wishlist", { params });
      return response?.data?.products;
    } catch (error) {
      console.log(error);
      return null;
    }
  };