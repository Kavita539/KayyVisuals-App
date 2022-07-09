import axios from "axios";

const getVideosServices = async () => {
    return await axios.get("/api/videos");
};

export {
    getVideosServices
};