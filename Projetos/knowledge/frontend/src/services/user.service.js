import { baseApiUrl, userKey } from "@/global";
import axios from "axios";

export default {login,logout};


function login(email, password) {
    return axios.post(`${baseApiUrl}/signin`, { email, password })
        .then(response => {
            localStorage.setItem(userKey, JSON.stringify(response.data));
            return response;
        });
}
function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}