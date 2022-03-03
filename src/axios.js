import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/clone-2161b/us-central1/api", // api for cloud func
});

export default instance;
