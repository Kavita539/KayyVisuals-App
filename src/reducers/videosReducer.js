import {
    videosActions
} from "../actionTypes";

const {
    SET_VIDEOS,
    SET_ERROR,
    INITIALIZE_VIDEO
} = videosActions;

const videosReducer = (state, action) => {
    switch (action.type) {
        case INITIALIZE_VIDEO:
            return {
                ...state, loading: true, error: ""
            };

        case SET_VIDEOS:
            return {
                ...state, loading: false, videos: action.payload
            };

        case SET_ERROR:
            return {
                ...state, loading: false, error: action.payload
            };

        default:
            return state;
    }
};
export {
    videosReducer
};