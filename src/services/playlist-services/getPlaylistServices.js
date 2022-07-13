import axios from "axios";

const getPlaylistServices = token => {
    return axios.get("/api/user/playlists", {
        headers: {
            authorization: token
        },
    });
};

export {
    getPlaylistServices
};