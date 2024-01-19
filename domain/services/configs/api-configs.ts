import axios from "axios";

const baseURL = "http://localhost:8080/api/v1";

// Crea una instancia de Axios con la URL base preconfigurada
export const api = axios.create({
    baseURL,
});
