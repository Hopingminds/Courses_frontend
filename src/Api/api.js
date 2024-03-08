import axios from "axios"

export const BaseUrl = 'http://api.hopingminds.in/api'

export const fetchcourseByCategory = async (category) => {

    try {
        const res = await axios.get(`${BaseUrl}/courses?category=${category}`);

        console.log(res);
        return res;
    } catch (error) {
        console.log(error)
    }

}
export const fetchCategories = async () => {

    try {
        const res = await axios.get(`${BaseUrl}/categories`);

        console.log(res);
        return res;
    } catch (error) {
        console.log(error)
    }

}