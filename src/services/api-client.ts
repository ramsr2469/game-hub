import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "3a25bb1b2a7e4d01b28cad2117fa8277",
  },
});
