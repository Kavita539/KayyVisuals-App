import { Routes, Route } from "react-router-dom";
import { Explore, Playlist, Signin,Signup } from "../pages";

const NavigationRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Explore />} />
      <Route path="/playlist" element={<Playlist />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export { NavigationRoutes };