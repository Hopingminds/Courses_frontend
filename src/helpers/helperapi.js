import axios from "axios";
import { BASE_URL } from "../Api/api";

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

export const applyJob = async (id) => {

    try {
        // console.log(id);
        const token = localStorage.getItem('COURSES_USER_TOKEN')
        const res = await axios.post(`${BASE_URL}/apply-job`, {
            "jobID": id
        }, {
            headers: {

                Authorization: "Bearer " + token,
            },
        })
        return res;

    }
    catch (error) {
        console.log(error)
        return false


    }
}
export const getAllJobAplicants = async (id) => {

    try {
        const token = localStorage.getItem('COURSES_USER_TOKEN')
        const res = await axios.get(`${BASE_URL}/get-user-job-applications`, {
            headers: {

                Authorization: "Bearer " + token,
            },
        })
        return res;
    }
    catch (error) {
        console.log(error)
        return false


    }
}
