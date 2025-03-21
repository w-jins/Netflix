import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "09ec0c3695763288aeac6fd61f4934f2",
    language: "ko-KR",
  },
});

export default instance;
