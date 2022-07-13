import axios from "axios";

const removeFromPlaylistServices = (token, playlistId, videoId) => {
    return axios.delete(`/api/user/playlists/${playlistId}/${videoId}`, {
        headers: {
            authorization: token
        },
    });
};
export {
    removeFromPlaylistServices
};