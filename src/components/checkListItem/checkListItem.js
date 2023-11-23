import React from "react";
import "./checkListItem.css";

function CheckListItem({ onClick, active, data }) {
  return (
    <div className={`chatListItem ${active ? "active" : ""}`} onClick={onClick}>
      <img className="chatListItem--avatar" src={data.img} />
      <div className="chatListItem--lines">
        <div className="chatListItem--line">
          <div className="chatListItem--name">{data.title}</div>
          <div className="chatListItem--date">11:00</div>
        </div>

        <div className="chatListItem--line">
          <div className="chatListItem--lastMsg">
            <p>opa, Tudo bem?</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckListItem;
