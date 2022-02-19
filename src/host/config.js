import { host,httpRequest,access_token } from './host'



export let getUsers = () => {
    let config = {
      url: `${host}/users/`,
      method: "GET",
        headers: {
          'Authorization': `Token ${access_token}`
        }
    };
    return httpRequest(config);
  }
  export let getStudents = () => {
    let config = {
      url: `${host}/students/`,
      method: "GET",
        headers: {
          'Authorization': `Token ${access_token}`
        }
    };
    return httpRequest(config);
  }
  export let getAdmins = () => {
    let config = {
      url: `${host}/admins/`,
      method: "GET",
        headers: {
          'Authorization': `Token ${access_token}`
        }
    };
    return httpRequest(config);
  }
  export let getInstructors = () => {
    let config = {
      url: `${host}/instructors/`,
      method: "GET",
        headers: {
          'Authorization': `Token ${access_token}`
        }
    };
    return httpRequest(config);
  }

  export const deleteUser= key => {
  let config = {
      url: `${host}/users/${key}/`,
      method: "delete",
      headers: {
        'Authorization': `Token ${access_token}`,
      }
    };
    return httpRequest(config);
  };

  export const deleteStudent= key => {
    let config = {
        url: `${host}/users/${key}/`,
        method: "delete",
        headers: {
          'Authorization': `Token ${access_token}`,
        }
      };
      return httpRequest(config);
    };
  export const postUsers= (formDataObj) => {
    let config = {
        url: `${host}/users/`,
        method: "post",
        data: formDataObj,
        headers: {
          'Authorization': `Token ${access_token}`,
          "Content-Type": "multipart/form-data"
        }
      };
      return httpRequest(config);
    };

    export let getGroup = () => {
      let config = {
        url: `${host}/groups/`,
        method: "GET",
          headers: {
            'Authorization': `Token ${access_token}`
          }
      };
      return httpRequest(config);
    }


