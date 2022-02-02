import { useState, useEffect } from "react";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import ChatListItem from "./components/ChatListItem";
import ChatIntro from "./components/ChatIntro";
import ChatWindow from "./components/ChatWindow";
import "./App.css";

function App() {
  const [chatlist, setChatList] = useState([
    {
      chatId: 1,
      title: "Fulano de tal 1",
      image: "https://www.w3schools.com/howto/img_avatar.png",
    },
    {
      chatId: 2,
      title: "Fulano de tal 2",
      image: "https://www.w3schools.com/howto/img_avatar.png",
    },
    {
      chatId: 3,
      title: "Fulano de tal 3",
      image: "https://www.w3schools.com/howto/img_avatar.png",
    },
    {
      chatId: 4,
      title: "Fulano de tal 4",
      image: "https://www.w3schools.com/howto/img_avatar.png",
    },
    {
      chatId: 5,
      title: "Fulano de tal 5",
      image: "https://www.w3schools.com/howto/img_avatar.png",
    },
  ]);
  const [activeChat, setActiveChat] = useState({});

  return (
    <div className="app-window">
      <div className="sidebar">
        <header className="sidebar-header">
          <img
            className="header-avatar"
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt=""
          />
          <div className="header-buttons">
            <div className="header-btn">
              <DonutLargeIcon className="icon-color" />
            </div>
            <div className="header-btn">
              <ChatIcon className="icon-color" />
            </div>
            <div className="header-btn">
              <MoreVertIcon className="icon-color" />
            </div>
          </div>
        </header>
        <div className="search">
          <div className="search-input">
            <SearchIcon fontSize="small" className="icon-color" />
            <input
              type="search"
              placeholder="Procurar ou começar uma nova conversa"
            />
          </div>
        </div>
        <div className="chat-list">
          {chatlist.map((item, key) => (
            <ChatListItem
              key={key}
              data={item}
              active={activeChat.chatId === chatlist[key].chatId}
              onClick={() => setActiveChat(chatlist[key])}
            />
          ))}
        </div>
      </div>
      <div className="app-content">
        {activeChat.chatId !== undefined && <ChatWindow />}
        {activeChat.chatId === undefined && <ChatIntro />}
      </div>
    </div>
  );
}

export default App;
