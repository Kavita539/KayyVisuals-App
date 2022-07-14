import axios from "axios";

const addToPlaylistServices = (token, playlistId, video) => {
    return axios.post(
        `/api/user/playlists/${playlistId}`, {
            video
        }, {
            headers: {
                authorization: token
            }
        }
    );
};

export {
    addToPlaylistServices
};