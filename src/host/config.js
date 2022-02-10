import { host,httpRequest } from './host'



export let getStudents = () => {
    let config = {
      url: `${host}/users/`,
      method: "GET",
    };
    return httpRequest(config);
  }

  export const deleteUser= key => {
  let config = {
      url: `${host}/users/${key}/`,
      method: "delete",
    };
    return httpRequest(config);
  };
  export const postUsers= (formDataObj) => {
    let config = {
        url: `${host}/users/`,
        method: "post",
        data: formDataObj
      };
      return httpRequest(config);
    };