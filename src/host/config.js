import { host,httpRequest } from './host'



export let getStudents = () => {
    let config = {
      url: `${host}/users/`,
      method: "GET",
    };
    return httpRequest(config);
  }