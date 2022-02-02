import React from "react";
import "./ChatListItem.css";

const ChatListItem = ({ onClick, active, data }) => {
  return (
    <div
      className={`chat-list-item ${active ? "active" : ""}`}
      onClick={onClick}
    >
      <img className="chat-list-item-avatar" src={data.image} alt="" />
      <div className="chat-list-item-lines">
        <div className="chat-list-item-line">
          <div className="chat-list-item-name">{data.title}</div>
          <div className="chat-list-item-date">19:00</div>
        </div>
        <div className="chat-list-item-line">
          <div className="chat-list-item-last-message">
            <p>Olá, tudo bem?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatListItem;
