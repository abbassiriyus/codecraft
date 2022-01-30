import { host,httpRequest } from './host'



export let getStudents = () => {
    let config = {
      url: `${host}/students/`,
      method: "GET",
    };
    return httpRequest(config);
  }