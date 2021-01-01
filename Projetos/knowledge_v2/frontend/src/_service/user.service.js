import axios from 'axios';
import { baseApiUrl, userKey } from "@/global";

export const userService = {
    login
};

function login({ email, password }) {
    axios
        .post(`${baseApiUrl}/signin`, { email, password })
        .then((res) => {
            localStorage.setItem(userKey, JSON.stringify(res.data));
        })
}



