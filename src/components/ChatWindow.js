import SearchIcon from "@material-ui/icons/Search";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import CloseIcon from "@material-ui/icons/Close";
import SendIcon from "@material-ui/icons/Send";
import MicIcon from "@material-ui/icons/Mic";
import EmojiPicker from "emoji-picker-react";
import { useState } from "react";
import MessageItem from "./MessageItem";
import "./ChatWindow.css";

const ChatWindow = () => {
  const [emojiAreaOpen, setEmojiAreaOpen] = useState(false);
  const [text, setText] = useState("");
  const [listening, setListening] = useState(false);
  const [list, setList] = useState([{}, {}, {}]);

  let recognition = null;
  let SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  if (SpeechRecognition !== undefined) {
    recognition = new SpeechRecognition();
  }

  const handleEmojiClick = (e, emojiObject) => {
    setText(text + emojiObject.emoji);
  };

  const handleOpenAreaEmoji = () => {
    setEmojiAreaOpen(true);
  };

  const handleCloseAreaEmoji = () => {
    setEmojiAreaOpen(false);
  };

  const handleMicClick = () => {
    if (recognition !== null) {
      recognition.onstart = () => {
        setListening(true);
      };
      recognition.onend = () => {
        setListening(false);
      };
      recognition.result = (e) => {
        setText(e.results[0][0].transcript);
      };

      recognition.start();
    }
  };

  const handleSendClick = () => {};

  return (
    <div className="chat-window">
      <div className="chat-window-header">
        <div className="chat-window-header-info">
          <img
            className="chat-window-avatar"
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt=""
          />
          <div className="chat-window-name">Robson Correia</div>
        </div>
        <div className="chat-window-header-buttons">
          <div className="chat-window-btn">
            <SearchIcon className="icon-color" />
          </div>
          <div className="chat-window-btn">
            <AttachFileIcon className="icon-color" />
          </div>
          <div className="chat-window-btn">
            <MoreVertIcon className="icon-color" />
          </div>
        </div>
      </div>
      <div className="chat-window-body">
        {list.map((item, key) => (
          <MessageItem key={key} data={item} />
        ))}
      </div>

      <div
        className="chat-window-emoji-area"
        style={{ height: emojiAreaOpen ? "200px" : "0" }}
      >
        <EmojiPicker
          onEmojiClick={handleEmojiClick}
          disableSearchBar
          disableSkinTonePicker
        />
      </div>

      <div className="chat-window-footer">
        <div className="chat-window-pre">
          <div
            className="chat-window-btn"
            onClick={handleCloseAreaEmoji}
            style={{ width: emojiAreaOpen ? 40 : 0 }}
          >
            <CloseIcon fontSize="small" className="icon-color" />
          </div>
          <div className="chat-window-btn" onClick={handleOpenAreaEmoji}>
            <InsertEmoticonIcon
              fontSize="small"
              className="icon-color"
              style={{ color: emojiAreaOpen ? "#009688" : "#919191" }}
            />
          </div>
        </div>
        <div className="chat-window-input-area">
          <input
            className="chat-window-input"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Digite uma mensagem"
          ></input>
        </div>
        <div className="chat-window-pos">
          {text === "" && (
            <div onClick={handleMicClick} className="chat-window-btn">
              <MicIcon
                fontSize="small"
                className="icon-color"
                style={{ color: listening ? "#125ece" : "#919191" }}
              />
            </div>
          )}
          {text !== "" && (
            <div onClick={handleSendClick} className="chat-window-btn">
              <SendIcon fontSize="small" className="icon-color" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
