import {
    useContext,
    createContext,
    useReducer,
    useEffect
} from "react";
import {
    videosActions
} from "../actionTypes";
import {
    videosReducer
} from "../reducers";
import { 
    getVideosServices
} from "../services";

const {
    INITIALIZE_VIDEO,
    SET_VIDEOS,
    SET_ERROR
} = videosActions;

const videosContext = createContext();

const useVideos = () => useContext(videosContext);

const VideosProvider = ({
    children
}) => {
    const [videoState, videoDispatch] = useReducer(videosReducer, {
        loading: false,
        videos: [],
        error: "",
    });

    useEffect(() => {
        (async () => {
            try {
                videoDispatch({
                    type: INITIALIZE_VIDEO
                });

                const res = await getVideosServices();
                if (res.status === 200) {
                    videoDispatch({
                        type: SET_VIDEOS,
                        payload: res.data.videos
                    });
                }
            } catch (err) {
                videoDispatch({
                    type: SET_ERROR,
                    payload: err.message
                });
            }
        })();
    }, []);

    return ( <videosContext.Provider value = {
            {
                videoState,
                videoDispatch
            }
        }> {
            children
        } </videosContext.Provider>
    );
};


export {
    useVideos,
    VideosProvider
};