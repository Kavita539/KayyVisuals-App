import {
    Link
} from "react-router-dom";
import "./sideBar.css";

const SideBar = () => {
    return (
        <ul className="styled-list sidebar-list">
            <li>
                <Link className="grid-30-70" to="/">
                    <i className="fas fa-home"></i>
                    <span className="text-left link-right-element">Home</span>
                </Link>
            </li>
            <li>
                <Link className="grid-30-70" to="/explore">
                    <i className="fas fa-compass"></i>
                    <span className="text-left link-right-element">Explore</span>
                </Link>
            </li>
            <li>
                <Link className="grid-30-70" to="/playlist">
                    <i className="fas fa-folder-plus"></i>
                    <span className="text-left link-right-element">Playlists</span>
                </Link>
            </li>
            <li>
                <Link className="grid-30-70" to="/liked">
                    <i className="fas fa-thumbs-up"></i>
                    <span className="text-left link-right-element">Liked Videos</span>
                </Link>
            </li>
            <li>
                <Link className="grid-30-70" to="/">
                    <i className="fas fa-clock"></i>
                    <span className="text-left link-right-element">Watch later</span>
                </Link>
            </li>
            <li>
                <Link className="grid-30-70" to="/">
                    <i className="fas fa-history"></i>
                    <span className="text-left link-right-element">History</span>
                </Link>
            </li>
        </ul>
    );
};

export { SideBar };