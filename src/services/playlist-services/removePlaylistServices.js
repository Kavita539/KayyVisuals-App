import axios from "axios";

const removePlaylistServices = (token, playlistId) => {
    return axios.delete(`/api/user/playlists/${playlistId}`, {
        headers: {
            authorization: token
        },
    });
};

export {
    removePlaylistServices
};