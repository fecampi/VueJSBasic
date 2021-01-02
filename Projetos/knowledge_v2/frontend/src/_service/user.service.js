import axios from 'axios';
import { baseApiUrl, userKey } from "../global";

export const userService = {
    login,
    logout
};

function login({ email, password }) {
    return axios
        .post(`${baseApiUrl}/signin`, { email, password })
        .then(response => {
            localStorage.setItem(userKey, JSON.stringify(response.data));
            return response.data
        })
}
function logout() { 
    localStorage.removeItem(userKey);
}

