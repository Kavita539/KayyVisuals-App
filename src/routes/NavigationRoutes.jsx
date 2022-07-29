import { Routes, Route } from "react-router-dom";
import { Explore, Playlist, Signin, Signup, SingleVideo, LikedVideos, WatchLater, Home, History, SinglePlaylist} from "../pages";
import { PrivateRoutes } from "./PrivateRoutes";
import Mockman from "mockman-js";
import { useAuth } from "../context";

const NavigationRoutes = () => {
  const {
    authState: { token },
  } = useAuth();
  
  return (
    <Routes>
       <Route path="/" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/explore/:videoId" element={<SingleVideo />} />
      <Route path="/playlist/:playlistId" element={<SinglePlaylist />} />
      <Route path="/liked" element={<PrivateRoutes element={LikedVideos} />} />
      <Route path="/playlist" element={<PrivateRoute element={Playlist} />} />
      <Route path="/watch-later" element={<PrivateRoutes element={WatchLater} />} />
      <Route path="/history" element={<PrivateRoutes element={History} />} />
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