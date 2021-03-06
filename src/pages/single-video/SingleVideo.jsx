import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useVideos, useLikes, useAuth, useWatchLaterVideos, useHistory } from "../../context";
import { embedLink, isPresent } from "../../utils";
import { Modal } from "../../components";
import toast from "react-hot-toast";
import "./singleVideo.css"

const SingleVideo = () => {
const [showModal, setShowModal] = useState(false);
const { videoId } = useParams();
const {
videoState: { videos },
} = useVideos();

const {
likesState: { likedList },
addToLike,
removeFromLike,
} = useLikes();

const {
authState: {
userDetails: { token },
}
} = useAuth();

const {
watchLaterState: { watchLaterVideos },
addToWatchLater,
removeFromWatchLater,
} = useWatchLaterVideos();

const {
historyState: { history },
addToHistory,
} = useHistory();

const navigate = useNavigate();
const video = videos.find(eachVideo => eachVideo._id === videoId);
const { isLiked, isPresentInWatchLater, isPresentInHistory } = isPresent(
videoId,
likedList,
watchLaterVideos,
history
);

const handleWatchLater = () => {
token
? isPresentInWatchLater
? removeFromWatchLater(videoId)
: addToWatchLater(video)
: navigate("/signin");
};

const handleLike = () => {
token ? (isLiked ? removeFromLike(videoId) : addToLike(video)) : navigate("/signin");
};

const handleSaveToPlaylist = () => {
if (token) {
setShowModal(true);
} else {
toast.error("Please login to continue");
navigate("/signin");
}
};

useEffect(() => {
token ? (!isPresentInHistory ? addToHistory(video) : null) : null;
}, []);

return (
<main className="video-container grid-70-30">
    <Modal showModal={showModal} setShowModal={setShowModal} video={video} />
    <section className="video-section">
        <iframe className="video-iframe" width="560" height="450" src={embedLink(videoId)} title="YouTube video player"
            frameBorder="0" loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>

        <div className="video-description">
            <h3>{video?.title}</h3>

            <div className="video-cta">
                <button className="video-cta-buttons" onClick={handleLike}>
                    <i className={`fas fa-thumbs-up ${isLiked ? "text-primary-color" : "" }`}></i>
                </button>

                <button className="video-cta-buttons" onClick={handleWatchLater}>
                    <i className={`fas fa-clock ${isPresentInWatchLater ? "text-primary-color" : "" }`}></i>
                </button>

                <button className="video-cta-buttons" onClick={handleSaveToPlaylist}>
                    <i className="fas fa-folder-plus"></i>
                </button>
            </div>

            <div className="creator-description flex-column">
                <div className="creator-img">
                    <img className="responsive-img rounded-img" src={video?.creatorImg} alt={video?.creator} />
                    <span>{video?.creator}</span>
                </div>
                <article>
                    <p>{video?.description}</p>
                </article>
            </div>
        </div>
    </section>

</main>
);
};

export { SingleVideo };