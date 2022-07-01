import { Routes, Route } from "react-router-dom";
import { Explore, Playlist } from "../pages";

const NavigationRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Explore />} />
      <Route path="/playlist" element={<Playlist />} />
    </Routes>
  );
};

export { NavigationRoutes };