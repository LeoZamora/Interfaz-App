import axios from "axios";
import { BASE_URL } from "./Serviceshttp.js";

const token  = localStorage.getItem('token');

export const getList = async () => {
    try {
        const result = await axios.get(`${BASE_URL}/dynamic`, {
            headers: {
                Authorization: token
            }
        });
        return result.data
    } catch (error) {
        console.log({error: 'Error al obener los datos'});
    }
}