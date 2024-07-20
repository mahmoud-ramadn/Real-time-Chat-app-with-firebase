import { useState } from 'react'
import './chat.css'
import EmojiPicker from 'emoji-picker-react'

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [Text, setText] = useState("");
  const hanldeEmojilClick = (e) => {
    setText((prv)=>prv + e["emoji"])
}
  
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
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat saepe labore praesentium suscipit alias consequatur eum blanditiis, ab culpa ex veniam modi doloremque, corrupti dolore incidunt, quasi impedit facilis magni.</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat saepe labore praesentium suscipit alias consequatur eum blanditiis, ab culpa ex veniam modi doloremque, corrupti dolore incidunt, quasi impedit facilis magni.</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat saepe labore praesentium suscipit alias consequatur eum blanditiis, ab culpa ex veniam modi doloremque, corrupti dolore incidunt, quasi impedit facilis magni.</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat saepe labore praesentium suscipit alias consequatur eum blanditiis, ab culpa ex veniam modi doloremque, corrupti dolore incidunt, quasi impedit facilis magni.</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat saepe labore praesentium suscipit alias consequatur eum blanditiis, ab culpa ex veniam modi doloremque, corrupti dolore incidunt, quasi impedit facilis magni.</p>
            <span>1 min ago</span>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        
   <input value={Text} type="text" placeholder="Type a message..." onChange={(e)=>setText(e.target.value)} />
        <div className="emoji">
          
          <img src="./emoji.png" alt="" onClick={() => setOpen((prev) => !prev)} />
          <div className="picker">
          <EmojiPicker  open={open}  onEmojiClick={hanldeEmojilClick} />

          </div>
      </div>
<button className="sendButton">Send</button>
        
      </div>

    </div>
  )
}

export default Chat