import {
    VideoCard,
    Loader
} from "../../components";
import {
    useVideos
} from "../../context";
import "./explore.css";

const Explore = () => {
const {
    videoState: {
        videos,
        loader,
        error
    },
} = useVideos();

return(
<>
    {loader &&
    <Loader />}
    {error && <span>{error}</span>}
    <main className="video-listing-gridContainer">
        {videos?.map(video => (
        <VideoCard key={video._id} video={video} />
        ))}
    </main>
</>
);
};

export {
Explore
};