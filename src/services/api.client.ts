import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "95193e91c08a442dbd72d537e3a2582c",
  },
});
