import axios from "axios";

const clearHistoryServices = token => {
    return axios.delete("/api/user/history/all", {
        headers: {
            authorization: token
        }
    });
};

export {
    clearHistoryServices
};