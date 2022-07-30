import {
    Link,
    useLocation, 
    useNavigate 
} from "react-router-dom";
import { useAuth, useVideos } from "../../context";
import "./navbar.css";

const Navbar = ({ setNavAside }) => {
    const {
        authState: {
            userDetails: { token },
        },
        logout,
    } = useAuth();

    const {
        videoState: { appliedSearchTerm },
        videoDispatch,
    } = useVideos();
    
    const pathname = useLocation();
    const navigate = useNavigate();

    return (
        <nav className="navbar">
            <div className="left-navbar">
                <button id="menu-icon-button" className="burger-menu-button navlist-link-item" onClick={() => setNavAside(true)}>
                    <i className="fas fa-bars"></i>
                </button>
                <Link  to="/" className="link-no-style">
                    <div className="nav-logo-title"> <span className="text-xl custom-color">K</span>ayy<span
                        className="text-xl custom-color">V</span>isuals</div>
                    <div className="nav-logo-tagline custom-color">ITS KAYY TO BINGE!</div>
                </Link>
            </div>

            <ul className="right-navbar">
                <li>
                    <Link to="/explore" className="navlist-link-item"> <button className="btn link-btn">Explore</button>
                    </Link>
                </li>
                {token ? (
                    <li>
                        <button className="btn outline-btn logout-btn text-center" onClick={() => logout()}>
                            Logout
                        </button>
                    </li>
                ) : (
                    <li>
                        <Link to="/signin" className="anchor-tag-badge-container"> <i className="fas fa-user"></i> <span className="text-xs">Login</span></Link>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export {
    Navbar
};