import {
    PlaylistCard
} from "../../components";
import "./playlist.css";

const Playlist = () => {
    return(
        <main className="playlist-listing-gridContainer">
            <PlaylistCard />
            <PlaylistCard />
        </main>
    );
};

export {
    Playlist
};