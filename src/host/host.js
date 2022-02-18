import axios from "axios";
export let host = "http://62.209.129.38:8000/api";  
export let access_token = "4656309ee754dca6db56dc768197c9e874ea468a";  

export const httpRequest = (config) => {
    return axios({
      ...config,
    }); 
   
  };



