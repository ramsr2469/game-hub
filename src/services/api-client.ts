import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "dc7a66fd605a486fb94415cfd9848582",
  },
});
