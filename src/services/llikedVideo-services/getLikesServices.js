import axios from "axios";

const getLikesServices = async token => {
    return await axios.get("/api/user/likes", {
        headers: {
            authorization: token
        },
    });
};

export {
    getLikesServices
};