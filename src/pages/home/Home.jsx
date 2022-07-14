import "./home.css";
import { useNavigate, Link} from "react-router-dom";
import { useCategory, useVideos } from "../../context";
import { videosActions } from "../../actionTypes";

const Home = () => {
const {
categoryState: { categories, loading, error },
} = useCategory();

const navigate = useNavigate();

const { videoDispatch } = useVideos();

const handleNavigate = categoryName => {
videoDispatch({ type: videosActions.SET_CATEGORY, payload: "all" });
videoDispatch({ type: videosActions.SET_CATEGORY, payload: categoryName });
navigate("/explore");
};

return (
<main className="home-main-container"
    style={{ backgroundImage: `url(/assets/kayyvisuals_bg.jpg)` }}>
    <section className="banner">
        <div className="banner-content text-center">
            <h2 className="banner-heading">The orion Play</h2>
            <div className="banner-cta">
                <Link to="/explore" className="btn btn-primary">
                Watch now
                </Link>
            </div>
        </div>
        <div className="category-section">
            <h1>Categories</h1>
            <div className="categories">
                {categories.map(({ _id, categoryName }) => {
                return (
                <div className="category-link" key={_id} onClick={()=> handleNavigate(categoryName)}
                    >
                    {categoryName}
                </div>
                );
                })}
            </div>
        </div>
    </section>
</main>
);
};

export { Home };