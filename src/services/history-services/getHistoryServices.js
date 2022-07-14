import axios from "axios";

const getHistoryServices = token => {
    return axios.get("/api/user/history", {
        headers: {
            authorization: token
        }
    });
};

export {
    getHistoryServices
};