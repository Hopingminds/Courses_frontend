import axios from "axios";
import { BASE_URL } from "../Api/api";
import toast from "react-hot-toast";
import { jwtDecode } from "jwt-decode";

export const authenticateUser = async () => {

    try {
        const token = localStorage.getItem('COURSES_USER_TOKEN')
        const res = await axios.post(`${BASE_URL}/authenticate`, null, {
            headers: {

                Authorization: "Bearer " + token,
            },
        })
        return res.status;
    }
    catch (error) {
        console.log(error)
        return false


    }
}