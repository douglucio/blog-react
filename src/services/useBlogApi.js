import axios from "axios"

const useBlogApi = axios.create({
	baseURL: "https://api.digitalreis.com.br",
    headers: {
        "Content-Type": "application/json",
    }
});

export default useBlogApi;