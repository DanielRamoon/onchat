import React from "react";
import "./checkListItem.css";

function CheckListItem({ onClick }) {
  return (
    <div className="chatListItem" onClick={onClick}>
      <img
        className="chatListItem--avatar"
        src="https://img.freepik.com/vetores-premium/avatar-icon002_750950-52.jpg"
      />
      <div className="chatListItem--lines">
        <div className="chatListItem--line">
          <div className="chatListItem--name">Bianca Passos</div>
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
