import "./overlayContainer.css"

const OverlayContainer = ({ children, display }) => {
    return <div className={display ? "overlay-container" : "hide-overlay-container"}>{children}</div>;
};

export {
    OverlayContainer
};