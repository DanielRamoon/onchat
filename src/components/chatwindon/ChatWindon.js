import React, { useState, useEffect, useRef } from "react";
import SearchIcon from "@mui/icons-material/Search";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import ClearIcon from "@mui/icons-material/Clear";
import SendIcon from "@mui/icons-material/Send";
import MicNoneIcon from "@mui/icons-material/MicNone";
import EmojiPicker from "emoji-picker-react";

import MenssageItem from "../messageItem/MenssageItem";

import "./ChatWindon.css";

function ChatWindon({ user }) {
  const body = useRef();
  let recognition = null;
  let speechRecognition =
    window.webkitSpeechRecognition || window.speechRecognition;

  if (speechRecognition !== undefined) {
    recognition = new speechRecognition();
  }

  const [emojiOpen, setEmojiOpen] = useState(false);
  const [text, setText] = useState("");
  const [listening, setListening] = useState(false);
  const [list, setList] = useState([
    { author: 12345, body: "Olá,tudo bem ?" },
    { author: 123, body: "Sim , e com você ??" },
    { author: 12345, body: "Estou bem!" },
    { author: 12345, body: "Olá,tudo bem ?" },
    { author: 123, body: "Sim , e com você ??" },
    { author: 12345, body: "Estou bem!" },
    { author: 12345, body: "Olá,tudo bem ?" },
    { author: 123, body: "Sim , e com você ??" },
    { author: 12345, body: "Estou bem!" },
    { author: 12345, body: "Olá,tudo bem ?" },
    { author: 123, body: "Sim , e com você ??" },
    { author: 12345, body: "Estou bem!" },
    { author: 12345, body: "Olá,tudo bem ?" },
    { author: 123, body: "Sim , e com você ??" },
    { author: 12345, body: "Estou bem!" },
    { author: 12345, body: "Olá,tudo bem ?" },
    { author: 123, body: "Sim , e com você ??" },
    { author: 12345, body: "Estou bem!" },
    { author: 12345, body: "Olá,tudo bem ?" },
    { author: 123, body: "Sim , e com você ??" },
    { author: 12345, body: "Estou bem!" },
    { author: 12345, body: "Olá,tudo bem ?" },
    { author: 123, body: "Sim , e com você ??" },
    { author: 12345, body: "Estou bem!" },
    { author: 12345, body: "Olá,tudo bem ?" },
    { author: 123, body: "Sim , e com você ??" },
    { author: 12345, body: "Estou bem!" },
  ]);

  useEffect(() => {
    if (body.current.scrollHeight > body.current.offsetHeight) {
      body.current.scrollTop =
        body.current.scrollHeight - body.current.offsetHeight;
    }
  }, [list]);

  const handleClickEmoji = (e, objectEmoji) => {
    setText(text + objectEmoji.emoji);
  };

  const handleOpenEmoji = () => {
    setEmojiOpen(true);
  };

  const handleCloseEmoji = () => {
    setEmojiOpen(false);
  };

  const handlemicClick = () => {
    if (recognition !== null && !listening) {
      recognition.onstart = () => {
        setListening(true);
      };

      recognition.onend = () => {
        setListening(false);
      };

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setText(text + transcript);
      };

      recognition.start();
    }
  };

  const handleSendClick = () => {};

  return (
    <div className="chatWindow">
      <div className="chatWindow--header">
        <div className="chatWindow--headerinfor">
          <img
            className="chatWindow--avatar"
            src="https://img.freepik.com/vetores-premium/avatar-icon002_750950-52.jpg"
            alt=""
          />
          <div className="chatWindow--name">Bianca Passos</div>
        </div>

        <div className="chatWindow--headerbuttons">
          <div className="chatWindow--btn">
            <SearchIcon fontSize="small" style={{ color: "#fff" }} />
          </div>
          <div className="chatWindow--btn">
            <AttachFileIcon fontSize="small" style={{ color: "#fff" }} />
          </div>
          <div className="chatWindow--btn">
            <MoreVertIcon fontSize="small" style={{ color: "#fff" }} />
          </div>
        </div>
      </div>

      <div ref={body} className="chatWindow--body">
        {list.map((item, key) => (
          <MenssageItem key={key} data={item} user={user} />
        ))}
      </div>

      <div
        className="chatWindow--emojiarea"
        style={{ height: emojiOpen ? "300px" : "0px" }}
      >
        <EmojiPicker
          searchDisabled
          skinTonesDisabled
          onEmojiClick={handleClickEmoji}
        />
      </div>

      <div className="chatWindow--footer">
        <div className="pre">
          <div className="chatWindow--btn" onClick={handleCloseEmoji}>
            <ClearIcon
              fontSize="small"
              style={{ height: emojiOpen ? 40 : 0, color: "#fff" }}
            />
          </div>
          <div className="chatWindow--btn" onClick={handleOpenEmoji}>
            <EmojiEmotionsIcon
              fontSize="small"
              style={{ color: emojiOpen ? "#4682b4" : "#fff" }}
            />
          </div>
        </div>

        <div className="inputarea">
          <input
            className="chatWindow--input"
            type="text"
            placeholder="Digite a mensagem"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="pos">
          {text === "" && (
            <div className="chatWindow--btn" onClick={handlemicClick}>
              <MicNoneIcon
                fontSize="small"
                style={{ color: listening ? "#4682b4" : "#fff" }}
              />
            </div>
          )}
          {text !== "" && (
            <div className="chatWindow--btn" onClick={handleSendClick}>
              <SendIcon fontSize="small" style={{ color: "#fff" }} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ChatWindon;
