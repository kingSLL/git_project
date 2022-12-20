import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000/",
  timeout: 3000,
  headers: {},
});

class http {
  require(config) {
    return instance.request(config);
  }
  get(config) {
    return instance.get(config);
  }
}
export default new http();
