import {
NavLink
} from "react-router-dom";
import "./sideBar.css";

const SideBar = () => {
return (
<ul className="styled-list sidebar-list">
    <li>
        <NavLink to="/explore" className={({ isActive })=> (isActive ? "grid-30-70 active-side-link" : "grid-30-70")}
            >
            <i className="fas fa-compass"></i>
            <span className="text-left">Explore</span>
        </NavLink>
    </li>
    <li>
        <NavLink to="/playlist" className={({ isActive })=> (isActive ? "grid-30-70 active-side-link" : "grid-30-70")}
            >
            <i className="fas fa-folder-plus"></i>
            <span className="text-left">Playlists</span>
        </NavLink>
    </li>
    <li>
        <NavLink to="/liked" className={({ isActive })=> (isActive ? "grid-30-70 active-side-link" : "grid-30-70")}
            >
            <i className="fas fa-thumbs-up"></i>
            <span className="text-left">Liked Videos</span>
        </NavLink>
    </li>
    <li>
        <NavLink to="/watch-later" className={({ isActive })=> (isActive ? "grid-30-70 active-side-link" :
            "grid-30-70")}
            >
            <i className="fas fa-clock"></i>
            <span className="text-left">Watch later</span>
        </NavLink>
    </li>
    <li>
        <NavLink to="/history" className={({ isActive })=> (isActive ? "grid-30-70 active-side-link" : "grid-30-70")}
            >
            <i className="fas fa-history"></i>
            <span className="text-left">History</span>
        </NavLink>
    </li>
</ul>
);
};

export { SideBar };