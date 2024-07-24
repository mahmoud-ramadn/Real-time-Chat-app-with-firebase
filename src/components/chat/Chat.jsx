import { useEffect, useRef, useState } from 'react';
import './chat.css';
import EmojiPicker from 'emoji-picker-react';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../../lib/firebase';

const Chat = () => {
  const [chat, setChat] = useState(null);
  const [open, setOpen] = useState(false);
  const [text, setText] = useState('');
  
  const handleEmojiClick = (e) => {
    setText((prev) => prev + e.emoji);
  };
  
  const endRef = useRef(null);

  useEffect(() => {
    if (endRef.current) {
      endRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chat]);

  useEffect(() => {
    const unsubscribe = onSnapshot(doc(db, 'chats', '3sG0Ps6DZloqoUwEgTgK'), (doc) => {
      setChat(doc.data());
    });
    return () => {
      unsubscribe();
    };
  }, []);


  return (
    <div className='chat'>
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Lorem ipsum dolor sit.</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>

      <div className="center">
        {chat?.messages.map((message, index) => (
          <div className={`message ${message.sender === 'own' ? 'own' : ''}`} key={index}>
            {message.sender !== 'own' && <img src="./avatar.png" alt="" />}
            <div className="texts">
              {message.image && <img src={message.image} alt="" />}
              <p>{message.text}</p>
              <span>{message.timestamp}</span>
            </div>
          </div>
        ))}
        <div ref={endRef}></div>
      </div>

      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input 
          value={text} 
          type="text" 
          placeholder="Type a message..." 
          onChange={(e) => setText(e.target.value)} 
        />
        <div className="emoji">
          <img src="./emoji.png" alt="" onClick={() => setOpen((prev) => !prev)} />
          {open && (
            <div className="picker">
              <EmojiPicker onEmojiClick={handleEmojiClick} />
            </div>
          )}
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  );
};

export default Chat;
