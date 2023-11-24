import React from "react";

import "./MenssageItem.css";

function MenssageItem({ data, user }) {
  return (
    <div
      className="messageLine"
      style={{
        justifyContent: user.id === data.author ? "flex-end" : "flex-start",
      }}
    >
      <div
        className="messageItem"
        style={{
          backgroundColor: user.id === data.author ? "#4682b4" : "#fff",
        }}
      >
        <div
          className="messageText"
          style={{ color: user.id === data.author ? "#fff" : "#000" }}
        >
          {" "}
          {data.body}
        </div>
        <div className="messageDate">11:00</div>
      </div>
    </div>
  );
}

export default MenssageItem;
