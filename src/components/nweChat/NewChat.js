import React, { useState, useEffect } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Api from "../../api";
import "./NewChat.css";

function NewChat({ user, checkList, show, setShow }) {
  const [list, setList] = useState([]);

  useEffect(() => {
    const getlist = async () => {
      try {
        if (user !== null) {
          let results = await Api.getContactList(user.id);
          setList(results);
        }
      } catch (error) {
        console.error("Erro ao obter a lista de contatos:", error);
      }
    };

    getlist();
  }, [user]);

  const AddChat = async (user2) => {
    await Api.AddChat(user, user2);
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <div className="newChat" style={{ left: show ? 0 : -695 }}>
      <div className="newChat--head">
        <div className="newChat--backButton" onClick={handleClose}>
          <ArrowBackIcon style={{ color: "#fff" }} />
        </div>
        <div className="newChat--headtitle">Nova Conversa</div>
      </div>
      <div className="newChat--list">
        {list.map((item, key) => (
          <div
            onClick={() => AddChat(item)}
            key={key}
            className="newChat--item"
          >
            <img
              src={item.avatar}
              alt="image"
              className="newChat--itemavatar"
            />
            <div className="newChat--name">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewChat;
