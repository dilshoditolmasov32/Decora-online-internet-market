  import axios from "axios"
  import { getAccessToken } from "../helpers/helpers"

  const API_URL=axios.create({
    baseURL:"https://store.go-clothes.uz/v1/"
  })

  API_URL.interceptors.request.use((config)=>{
      const access_token=getAccessToken()
      if (access_token) {
          config.headers["Authorization"]=access_token
      }
      return config
  })

  export default API_URL