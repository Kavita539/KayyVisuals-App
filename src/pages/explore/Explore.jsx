import {
VideoCard,
Loader
} from "../../components";
import {
useVideos, useCategory
} from "../../context";
import { videosActions } from "../../actionTypes";
import "./explore.css";

const Explore = () => {
const {
videoState: { loading, selectedCategory },
videoDispatch,
finalVideoList,
} = useVideos();

const {
categoryState: { categories },
} = useCategory();

const { SET_CATEGORY } = videosActions;


return(
<>
    {loading ? (
    <Loader />
    ) : (
    <div className="explore-category-section">
        <button className={`btn outline-btn-primary chip-btn ${ selectedCategory==="all" ? "chip-btn-active" : "" }`}
            onClick={()=> videoDispatch({ type: SET_CATEGORY, payload: "all" })}
            >
            All
        </button>
        {categories.map(({ _id, categoryName }) => (
        <button key={_id} className={`btn outline-btn-primary chip-btn ${ selectedCategory===categoryName
            ? "chip-btn-active" : "" }`} onClick={()=> videoDispatch({ type: SET_CATEGORY, payload: categoryName })}
            >
            {categoryName}
        </button>
        ))}
    </div>
    )}
    <main className="video-listing-gridContainer">
        {finalVideoList?.map(video => (
        <VideoCard key={video._id} video={video} />
        ))}
    </main>
</>
);
};

export {
Explore
};