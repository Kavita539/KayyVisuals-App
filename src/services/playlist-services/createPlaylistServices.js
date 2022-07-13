import axios from "axios";

const createPlaylistServices = (token, playlist) => {
    return axios.post("/api/user/playlists", {
        ...playlist
    }, {
        headers: {
            authorization: token
        }
    });
};

export {
    createPlaylistServices
};