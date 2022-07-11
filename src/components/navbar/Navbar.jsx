import {
    Link
} from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
    return(
        <nav className="navbar">
            <div className="left-navbar">
                <button id="menu-icon-button" className="burger-menu-button navlist-link-item">
                    <i className="fas fa-bars"></i>
                </button>
                <a className="link-no-style" href="./">
                    <div className="nav-logo-title"> <span className="text-xl custom-color">K</span>ayy<span
                            className="text-xl custom-color">V</span>isuals</div>
                    <div className="nav-logo-tagline custom-color">ITS KAYY TO BINGE!</div>
                </a>
            </div>
            <div className="mid-navbar">
                <div className="nav-search-bar">
                    <button className="btn search-btn"><i className="fas fa-search"></i></button>
                    <input className="form-field" type="text" placeholder="search here..." />
                </div>
            </div>
            <ul className="right-navbar">
                <li>
                    <Link to="/explore" className="navlist-link-item"> <button className="btn link-btn">Explore</button>
                    </Link>
                </li>
                <li>
                    <Link to="/signin" className="anchor-tag-badge-container"> <i className="fas fa-user "></i> <span className="text-xs">Login</span></Link>
                </li>
            </ul>
        </nav>
    );
};

export {
    Navbar 
};