import axios from 'axios';

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "f4d3675217e554e5bd49a8afe1431d88",
        language: "ko-KR"
    }
})

export default instance;