import axios from "axios";

export default class AjaxService {
  static setDefaults() {
    delete axios.defaults.headers.common.Authorization;

    axios.defaults.baseURL = " https://rest.bandsintown.com";
    axios.defaults.headers.post["Content-Type"] = "application/json";
    axios.defaults.headers.post.Accept = "application/json";
  }

  static async post(api, params, auth = true) {
    this.setDefaults();
    const response = await axios
      .post(api, params)
      .then(result => {
        return result.data;
      })
      .catch(error => {
        return null;
      });
    return response;
  }

  static async get(api, params, auth = true) {
    this.setDefaults();
    let parmeters = "";
    params.forEach((value, key) => {
      parmeters += `${key}=${value}&`;
    });
    const response = await axios
      .get(`${api}?${parmeters}`)
      .then(result => {
        return result.data;
      })
      .catch(error => {});
    return response;
  }

  static async put(api, params, auth = true) {
    this.setDefaults();
    const response = await axios
      .put(`${api}`, params)
      .then(result => {
        return result.data;
      })
      .catch(error => {});
    return response;
  }
}
