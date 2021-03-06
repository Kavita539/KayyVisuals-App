import {
    createContext,
    useContext,
    useReducer,
    useEffect,
    useState
} from "react";
import {
    playlistReducer
} from "../reducers";
import {
    useAuth
} from "./authContext";
import toast from "react-hot-toast";
import {
    playlistActions
} from "../actionTypes";
import {
    getPlaylistServices,
    createPlaylistServices,
    addToPlaylistServices,
    removeFromPlaylistServices,
    removePlaylistServices,
} from "../services";

const {
    INITIALIZE,
    SET_PLAYLIST,
    SET_ERROR,
    UPDATE_PLAYLIST
} = playlistActions;

const playlistContext = createContext();

const usePlaylist = () => useContext(playlistContext);

const PlaylistProvider = ({
    children
}) => {
    const [playlistState, playlistDispatch] = useReducer(playlistReducer, {
        playlists: [],
        loading: false,
        error: "",
    });

    const {
        authState: {
            userDetails: {
                token
            },
        },
    } = useAuth();

    useEffect(() => {
        token
            ?
            (async () => {
                try {
                    playlistDispatch({
                        type: INITIALIZE
                    });

                    const res = await getPlaylistServices(token);

                    if (res.status === 200) {
                        playlistDispatch({
                            type: SET_PLAYLIST,
                            payload: res.data.playlists
                        });
                    }
                } catch (err) {
                    playlistDispatch({
                        type: SET_ERROR,
                        payload: err.response.data.errors[0]
                    });
                }
            })() :
            playlistDispatch({
                type: SET_PLAYLIST,
                payload: []
            });
    }, [token]);

    const addVideoToPlaylist = async (video, playlistId) => {
        {
            try {
                playlistDispatch({
                    type: INITIALIZE
                });

                const res = await addToPlaylistServices(token, playlistId, video);

                if (res.status === 201) {
                    playlistDispatch({
                        type: UPDATE_PLAYLIST,
                        payload: res.data.playlist
                    });
                    toast.success("Video added to playlist");
                }
            } catch (err) {playlistDispatch({
                type: SET_ERROR,
                payload: err.response.data.errors[0] });
            toast.error(err.response.data.errors[0]);
            }
        }
    };

    const removeFromPlaylist = async (playlistId, videoId) => {
        try {
            playlistDispatch({
                type: INITIALIZE
            });

            const res = await removeFromPlaylistServices(token, playlistId, videoId);

            if (res.status === 200) {
                playlistDispatch({
                    type: UPDATE_PLAYLIST,
                    payload: res.data.playlist
                });
                toast.success("Video removed from playlist");
            }
        } catch (err) {
            playlistDispatch({
                type: SET_ERROR,
                payload: err.response.data.errors[0]
            });
            toast.error(err.response.data.errors[0]);
        }
    };

    const createPlaylist = async (playlistName, video) => {
        try {
            playlistDispatch({
                type: INITIALIZE
            });

            const res = await createPlaylistServices(token, {
                playlist: {
                    title: playlistName
                }
            });

            if (res.status === 201) {
                playlistDispatch({
                    type: SET_PLAYLIST,
                    payload: res.data.playlists
                });
                const newPlaylistId = res.data.playlists.slice(-1)[0]._id;
                video ? await addVideoToPlaylist(video, newPlaylistId) : toast.success("Playlist Created");
            }
        } catch (err) {
            playlistDispatch({
                type: SET_ERROR,
                payload: err.response.data.errors[0]
            });
            toast.error(err.response.data.errors[0]);
        }
    };

    const deletePlaylist = async playlistId => {
        try {
            const res = await removePlaylistServices(token, playlistId);
            if (res.status === 200) {
                playlistDispatch({
                    type: SET_PLAYLIST,
                    payload: res.data.playlists
                });
                toast.success("Playlist deleted");
            }
        } catch (err) {
            playlistDispatch({
                type: SET_ERROR,
                payload: err.response.data.errors[0]
            });
            toast.error(err.response.data.errors[0]);
        }
    };

    return ( 
        <playlistContext.Provider value = {
            {
                playlistState,
                playlistDispatch,
                createPlaylist,
                removeFromPlaylist,
                addVideoToPlaylist,
                deletePlaylist,
            }
        } > {
            children
        } </playlistContext.Provider>
    );
};

export {
    PlaylistProvider,
    usePlaylist
};