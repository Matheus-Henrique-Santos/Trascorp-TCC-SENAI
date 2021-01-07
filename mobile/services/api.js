import axios from "axios";

export const api = axios.create({
    baseURL: "https://transcorp-backend.herokuapp.com/"
});