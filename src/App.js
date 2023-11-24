import React, { useState, useEffect } from "react";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";

import CheckListItem from "./components/checkListItem/checkListItem";
import ChatInfor from "./components/chatInfor/ChatInfor";
import ChatWindon from "./components/chatwindon/ChatWindon";
import "./App.css";

function App() {
  const [checkList, setCheckList] = useState([
    {
      id: 1,
      title: "Bianca Passos",
      img: "https://img.freepik.com/vetores-premium/avatar-icon002_750950-52.jpg",
    },
    {
      id: 1,
      title: "Bianca Passos",
      img: "https://img.freepik.com/vetores-premium/avatar-icon002_750950-52.jpg",
    },
    {
      id: 2,
      title: "Vitória Santos",
      img: "https://img.freepik.com/vetores-premium/avatar-icon002_750950-52.jpg",
    },
    {
      id: 3,
      title: "Cleide Santos",
      img: "https://img.freepik.com/vetores-premium/avatar-icon002_750950-52.jpg",
    },
    {
      id: 4,
      title: "Doralice Santos",
      img: "https://img.freepik.com/vetores-premium/avatar-icon002_750950-52.jpg",
    },
  ]);

  const [activeChat, setActiveChat] = useState({});

  return (
    <div className="App-window">
      <div className="sidebar">
        <header>
          <img
            src="https://www.jmatosbebidas.com.br/wp-content/uploads/2016/11/avatar-masculino.png"
            alt="image"
            className="header--avatar"
          />
          <div className="header--buttons">
            <div className="header--btn">
              <DonutLargeIcon style={{ color: "#fff" }} />
              <ChatIcon style={{ color: "#fff" }} />
              <MoreVertIcon style={{ color: "#fff" }} />
            </div>
          </div>
        </header>
        <div className="search">
          <div className="search--input">
            <SearchIcon fontSize="small" style={{ color: "#919191" }} />
            <input
              type="search"
              placeholder="Procurar ou começar uma nova conversa"
            />
          </div>
        </div>
        <div className="chatlist">
          {checkList.map((item, key) => (
            <CheckListItem
              key={key}
              data={item}
              // active={activeChat.chatid === checkList[key].chatid}
              onClick={() => setActiveChat(checkList[key])}
            />
          ))}
        </div>
      </div>
      <div className="contentarea">
        {Object.keys(activeChat).length !== 0 ? <ChatWindon /> : <ChatInfor />}
      </div>
    </div>
  );
}

export default App;
