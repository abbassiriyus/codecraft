import axios from "axios";
export let host = "https://api.codecraft.uz/api";  
export let access_token = localStorage.getItem('token');  

export const httpRequest = (config) => {
    return axios({
      ...config,
     
    }); 
   
  };



