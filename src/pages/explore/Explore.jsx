import {
    VideoCard
} from "../../components";
import "./explore.css";

const Explore = () => {
    return(
        <main className="video-listing-gridContainer">
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
        </main>
    );
};

export {
    Explore
};