import React, { useState, useEffect } from "react";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";

import CheckListItem from "./components/checkListItem/checkListItem";
import ChatInfor from "./components/chatInfor/ChatInfor";
import ChatWindon from "./components/chatwindon/ChatWindon";
import NewChat from "./components/nweChat/NewChat";
import Login from "./components/login/Login";
import Api from "./api";

import "./App.css";

function App() {
  const [checkList, setCheckList] = useState([]);

  const [activeChat, setActiveChat] = useState({});
  const [user, setUser] = useState(null);
  const [shownewChat, setShowNewChat] = useState(false);

  const handleOpen = () => {
    setShowNewChat(true);
  };

  const handleLoginData = async (u) => {
    let newUser = {
      id: u.uid || u.id,
      name: u.displayName || u.name,
      avatar: u.photoURL || u.avatar,
    };
    await Api.addUser(newUser);
    setUser(newUser);
  };

  if (user === null) {
    return <Login onReceive={handleLoginData} />;
  }

  return (
    <div className="App-window">
      <div className="sidebar">
        <header>
          <img src={user.avatar} alt="image" className="header--avatar" />
          <div className="header--buttons">
            <div className="header--btn" onClick={handleOpen}>
              <DonutLargeIcon style={{ color: "#fff" }} />
              <ChatIcon style={{ color: "#ffff" }} />
              <MoreVertIcon style={{ color: "#fff" }} />
            </div>
          </div>
        </header>
        <NewChat
          checkList={checkList}
          user={user}
          show={shownewChat}
          setShow={setShowNewChat}
        />
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
          {checkList.map((item) => (
            <CheckListItem
              key={item.id}
              data={item}
              onClick={() => setActiveChat(item)}
            />
          ))}
        </div>
      </div>
      <div className="contentarea">
        {Object.keys(activeChat).length !== 0 ? (
          <ChatWindon user={user} />
        ) : (
          <ChatInfor />
        )}
      </div>
    </div>
  );
}

export default App;
