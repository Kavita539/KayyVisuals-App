import "./loader.css";

const Loader = () => {
  return (
    <div className="loading-container">
        <div className="loader">
            <img className="responsive-img" src="/assets/Rolling-loading.svg" alt="loader" />
        </div>
    </div>
  );
};

export {
    Loader
};