import axios from "axios";

const getCategoriesServices = () => {
    return axios.get("/api/categories");
};

export {
    getCategoriesServices
};