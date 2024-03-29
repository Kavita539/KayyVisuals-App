import {
useState
}
from "react";
import {
Link, useNavigate
}
from "react-router-dom";
import {
thumbnailLink
} from "../../utils";
import { Modal } from "../modal/Modal";
import { useAuth, useWatchLaterVideos } from "../../context";
import toast from "react-hot-toast";
import "./videoCard.css";

const VideoCard = ({ video }) => {
const {
_id,
title,
creator,
creatorImg
} = video;

const [showModal, setShowModal]=useState(false);
const [showThreeDotMenu, setShowThreeDotMenu]=useState(false);
const navigate = useNavigate();
const {
authState: {
userDetails: { token },
},
} = useAuth();

const {
watchLaterState: { watchLaterVideos },
addToWatchLater,
removeFromWatchLater,
} = useWatchLaterVideos();

const isPresentInWatchLater = watchLaterVideos.find(eachVideo => eachVideo._id === video._id);

const handleWatchLater = () => {
setShowThreeDotMenu(prevState => !prevState);
if (token) {
!isPresentInWatchLater ? addToWatchLater(video) : removeFromWatchLater(video._id);
} else {
toast.error("Please login continue");
navigate("/signin");
}
};

const handleSaveToPlaylist = () => {
setShowThreeDotMenu(prevState => !prevState);
if (token) {
setShowModal(true);
} else {
toast.error("Please login continue");
navigate("/signin");
}
};

return (
<>
    <Modal showModal={showModal} setShowModal={setShowModal} video={video} />
    <div className="video-card">
        <Link to={`/explore/${_id}`} className="video-card-image-container">
        <img className="responsive-img" src={thumbnailLink(_id)} alt={title} />
        </Link>

        <div className="video-card-description-container">
            <div className="description-image-container">
                <img className="responsive-img rounded-img" src={creatorImg} alt={creator} />
            </div>

            <div>
                <Link to={`/explore/${_id}`} className="text-description">
                <span className="description-heading text-semibold">{title}</span>
                <span className="text-xs text-semibold text-gray">{creator}</span>
                </Link>
            </div>

            <div className="three-don-menu-container">
                <button className="three-don-menu-button" onClick={()=> setShowThreeDotMenu(prevState => !prevState)}
                    >
                    <i className="fas fa-ellipsis-v"></i>
                </button>

                {showThreeDotMenu && (
                <ul className="no-style-list video-card-option-list">
                    <li className={`grid-30-70 ${isPresentInWatchLater ? "text-danger" : "" }`}
                        onClick={handleWatchLater}>
                        <i className={`text-center fas fa-${isPresentInWatchLater ? "trash" : "clock" }`}></i>
                        <span className="text-sm">Watch later</span>
                    </li>
                    <li className="grid-30-70" onClick={handleSaveToPlaylist}>
                        <i className="text-center fas fa-folder-plus"></i>
                        <span className="text-sm">Save to playlist</span>
                    </li>
                </ul>
                )}
            </div>
        </div>
    </div>
</>
);
};

export {
VideoCard
};