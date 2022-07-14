import axios from "axios";

const removeFromWatchLaterServices = (token, videoId) => {
    return axios.delete(`/api/user/watchlater/${videoId}`, {
        headers: {
            authorization: token
        }
    });
};

export {
    removeFromWatchLaterServices
};