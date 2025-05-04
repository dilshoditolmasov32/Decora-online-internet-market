import API_URL from "../api/interseptor";
import { IAuth } from "../types/auth";


export const sign_in = async (data: IAuth) => {
  try {
    const response = await API_URL.post("/login", data);
    return response;
  } catch (error) {
  console.log(error)
    return null;
  }
};
