import axios from "axios";

const addToWatchLaterServices = (token, video) => {
    return axios.post("/api/user/watchlater", {
        video
    }, {
        headers: {
            authorization: token
        }
    });
};

export {
    addToWatchLaterServices
};