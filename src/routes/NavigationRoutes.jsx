import { Routes, Route } from "react-router-dom";
import { Explore, Playlist, Signin, Signup, SingleVideo } from "../pages";

const NavigationRoutes = () => {
  return (
    <Routes>
      <Route path="/explore" element={<Explore />} />
      <Route path="/playlist" element={<Playlist />} />
      <Route path="/explore/:videoId" element={<SingleVideo />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export { NavigationRoutes };