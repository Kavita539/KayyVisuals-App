import axios from "axios";

const addToLikesServices = async (video, token) => {
    return await axios.post("/api/user/likes", {
        video
    }, {
        headers: {
            authorization: token
        }
    });
};

export {
    addToLikesServices
};