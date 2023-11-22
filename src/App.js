import React from "react";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./App.css";

function App() {
  return (
    <div className="App-window">
      <div className="sidebar">
        <header>
          <img
            src="https://img.freepik.com/vetores-premium/avatar-icon002_750950-52.jpg"
            alt="image"
            className="header--avatar"
          />
          <div className="header--buttons">
            <div className="header--btn">
              <DonutLargeIcon style={{ color: "#919191" }} />
              <ChatIcon style={{ color: "#919191" }} />
              <MoreVertIcon style={{ color: "#919191" }} />
            </div>
          </div>
        </header>
        <div className="search">...</div>
        <div className="chatlist">...</div>
      </div>
      <div className="contentarea">...</div>
    </div>
  );
}

export default App;
