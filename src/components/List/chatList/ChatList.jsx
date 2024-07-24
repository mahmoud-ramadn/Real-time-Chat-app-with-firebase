import { useEffect, useState } from "react";
import "./chatList.css";
import AddUser from "../../addUser/AddUser";
import { useUserStore } from "../../../lib/useUserStore";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "../../../lib/firebase";

const ChatList = () => {
  const [chats, setChats] = useState([]);
  const [addMode, setAddMode] = useState(false);

  const { currentUser } = useUserStore();

  useEffect(() => {
    if (!currentUser?.id) return;

    const unSub = onSnapshot(
      doc(db, "userChats", currentUser.id),
      async (res) => {
        try {
          const data = res.data();
          if (!data) return;

          const items = data.chats || [];

          const promises = items.map(async (item) => {
            const userDocRef = doc(db, "users", item.receiverId);
            const userDocSnap = await getDoc(userDocRef);

            const user = userDocSnap.data() || {};

            return { ...item, user };
          });

          const chatData = await Promise.all(promises);

          setChats(chatData.sort((a, b) => b.updatedAt - a.updatedAt));
        } catch (error) {
          console.error("Error fetching chat data:", error);
        }
      }
    );

    return () => {
      unSub();
    };
  }, [currentUser.id]);

  return (
    <div className="chatList">
      <div className="search">
        <div className="searchBar">
          <img src="./search.png" alt="Search Icon" />
          <input
            type="text"
            placeholder="Search"
          />
        </div>
        <img
          src={addMode ? "./minus.png" : "./plus.png"}
          alt="Toggle Add Mode"
          className="add"
          onClick={() => setAddMode((prev) => !prev)}
        />
      </div>
      {
        chats.map((chat) =>
          <div
            className="item"
            key={chat.chatId}
          >
            <img
              src={chat.user.avatar || "./avatar.png"}
              alt="User Avatar"
            />
            <div className="texts">
              <span>{chat.user.username}</span>
              <p>{chat.lastMessage}</p>
            </div>
          </div>
        )
      }

      {addMode && <AddUser />}
    </div>
  );
};

export default ChatList;
