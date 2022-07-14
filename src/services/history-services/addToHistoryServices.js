import axios from "axios";

const addToHistoryServices = (token, video) => {
    return axios.post("/api/user/history", {
        video
    }, {
        headers: {
            authorization: token
        }
    });
};

export {
    addToHistoryServices
};