import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {
  App
} from "./App";
import {
  makeServer
} from "./server";
import {
  BrowserRouter as Router
} from "react-router-dom";
import {
  VideosProvider, AuthProvider, LikesProvider, PlaylistProvider, WatchLaterVideosProvider, CategoryProvider, HistoryProvider
} from "./context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
       <VideosProvider>
         <LikesProvider>
          <PlaylistProvider>
            <WatchLaterVideosProvider>
              <HistoryProvider>
              <CategoryProvider>
              <App />
              </CategoryProvider>
              </HistoryProvider>
            </WatchLaterVideosProvider>
          </PlaylistProvider>
         </LikesProvider>
       </VideosProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
