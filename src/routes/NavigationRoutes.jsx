import { Routes, Route } from "react-router-dom";
import { Explore, Playlist, Signin, Signup, SingleVideo, LikedVideos } from "../pages";
import { PrivateRoutes } from "./PrivateRoutes";
import Mockman from "mockman-js";

const NavigationRoutes = () => {
  return (
    <Routes>
      <Route path="/explore" element={<Explore />} />
      <Route path="/playlist" element={<Playlist />} />
      <Route path="/explore/:videoId" element={<SingleVideo />} />
      <Route path="/liked" element={<PrivateRoutes element={LikedVideos} />} />
      {!token ? (
        <>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </>
      ) : (
        <>
          <Route path="/signin" element={<Navigate replace to="/" />} />
          <Route path="/signup" element={<Navigate replace to="/" />} />
        </>
      )}
      <Route path="/mockman" element={<Mockman />} />
    </Routes>
  );
};

export { NavigationRoutes };