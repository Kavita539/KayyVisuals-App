import axios from "axios";

const removeFromLikesServices = async (id, token) => {
    return await axios.delete(`/api/user/likes/${id}`, {
        headers: {
            authorization: token
        },
    });
};

export {
    removeFromLikesServices
};