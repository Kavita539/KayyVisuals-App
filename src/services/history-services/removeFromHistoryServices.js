import axios from "axios";

const removeFromHistoryServices = (token, videoId) => {
    return axios.delete(`/api/user/history/${videoId}`, {
        headers: {
            authorization: token
        }
    });
};

export {
    removeFromHistoryServices
};