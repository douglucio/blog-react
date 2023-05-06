import axios from "axios"

const useBlogApi = axios.create({
	baseURL: "https://jsonplaceholder.typicode.com",
    headers: {
        "Content-Type": "application/json",
    }
});

export default useBlogApi;