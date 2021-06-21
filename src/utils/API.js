import axios from "axios";

export default axios.create({
  baseURL: "https://glacial-shelf-70625.herokuapp.com/api/",
  responseType: "json"
});
