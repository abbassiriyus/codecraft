import { host,httpRequest } from './host'



export let getStudents = () => {
    let config = {
      url: `${host}/users/`,
      method: "GET",
    };
    return httpRequest(config);
  }

  export const deleteUser= (id) => {
  let config = {
      url: `${host}/users/${id}/`,
      method: "delete",
    };
    return httpRequest(config);
  };

  export let getContact=()=>{
    let config = {
      url:`${host}/contact/`,
      method: 'GET',
    };
    return httpRequest(config);
  }
  export let getContactPut=()=>{
    let config = {
      url:`${host}/contact/`,
      method: 'PUT',
    };
    return httpRequest(config);
  }
  

