import axios from "axios";
export let host = "http://62.209.129.38:8000/api";  

export const httpRequest = (config) => {
    return axios({
      ...config,
    }); 
   
  };



