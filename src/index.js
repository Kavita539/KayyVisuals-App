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
  VideosProvider, AuthProvider, LikesProvider, PlaylistProvider
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
            <App />
          </PlaylistProvider>
         </LikesProvider>
       </VideosProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
