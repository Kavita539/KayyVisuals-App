import axios from "axios";

const getWatchLaterServices = token => {
    return axios.get("/api/user/watchlater", {
        headers: {
            authorization: token
        }
    });
};

export {
    getWatchLaterServices
};