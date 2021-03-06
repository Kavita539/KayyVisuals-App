import {
    createContext,
    useContext,
    useReducer,
    useEffect
} from "react";
import {
    historyReducer
} from "../reducers";
import {
    getHistoryServices,
    addToHistoryServices,
    removeFromHistoryServices,
    clearHistoryServices,
} from "../services";
import {
    useAuth
} from "./authContext";
import {
    historyActions
} from "../actionTypes";
import toast from "react-hot-toast";

const {
    INITIALIZE,
    SET_ERROR,
    SET_HISTORY
} = historyActions;

const historyContext = createContext();

const useHistory = () => useContext(historyContext);

const HistoryProvider = ({
    children
}) => {
    const [historyState, historyDispatch] = useReducer(historyReducer, {
        loading: false,
        history: [],
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
                    historyDispatch({
                        type: INITIALIZE
                    });

                    const {
                        status,
                        data
                    } = await getHistoryServices(token);

                    if (status === 200) {
                        historyDispatch({
                            type: "SET_HISTORY",
                            payload: data.history
                        });
                    }
                } catch (err) {
                    historyDispatch({
                        type: SET_ERROR,
                        payload: err.response.data.errors[0]
                    });
                }
            })() :
            historyDispatch({
                type: "SET_HISTORY",
                payload: []
            });
    }, [token]);

    const addToHistory = async video => {
        try {
            historyDispatch({
                type: INITIALIZE
            });

            const {
                status,
                data
            } = await addToHistoryServices(token, video);

            if (status === 201) {
                historyDispatch({
                    type: SET_HISTORY,
                    payload: data.history
                });
            }
        } catch (err) {
            historyDispatch({
                type: SET_ERROR,
                payload: err.response.data.errors[0]
            });
        }
    };

    const removeFromHistory = async videoId => {
        try {
            historyDispatch({
                type: INITIALIZE
            });

            const {
                status,
                data
            } = await removeFromHistoryServices(token, videoId);

            if (status === 200) {
                historyDispatch({
                    type: SET_HISTORY,
                    payload: data.history
                });
                toast.success("Video removed from history");
            }
        } catch (err) {
            historyDispatch({
                type: SET_ERROR,
                payload: err.response.data.errors[0]
            });
        }
    };

    const clearHistory = async () => {
        try {
            historyDispatch({
                type: INITIALIZE
            });

            const {
                status,
                data
            } = await clearHistoryServices(token);

            if (status === 200) {
                historyDispatch({
                    type: SET_HISTORY,
                    payload: data.history
                });
                toast.success("History cleared");
            }
        } catch (err) {
            historyDispatch({
                type: SET_ERROR,
                payload: err.response.data.errors[0]
            });
        }
    };

    return ( 
        <historyContext.Provider value = {
            {
                historyState,
                historyDispatch,
                addToHistory,
                removeFromHistory,
                clearHistory
            }
        } >
        {
            children
        } </historyContext.Provider>
    );
};

export {
    useHistory,
    HistoryProvider
};