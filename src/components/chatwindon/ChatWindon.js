import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import SendIcon from "@mui/icons-material/Send";

import "./ChatWindon.css";

function ChatWindon() {
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

      <div className="chatWindow--body"></div>

      <div className="chatWindow--footer">
        <div className="pre">
          <div>
            <div className="chatWindow--btn">
              {" "}
              <EmojiEmotionsIcon fontSize="small" style={{ color: "#fff" }} />
            </div>
          </div>
        </div>

        <div className="inputarea">
          <input
            className="chatWindow--input"
            type="text"
            placeholder="Digite a mensagem"
          />
        </div>
        <div className="pos">
          <div className="chatWindow--btn">
            <SendIcon fontSize="small" style={{ color: "#fff" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatWindon;
