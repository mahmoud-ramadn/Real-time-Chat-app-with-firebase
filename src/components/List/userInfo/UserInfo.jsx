import './userInfo.css'

import { useUserStore } from "../../../lib/useUserStore"



const UserInfo = () => {
  const { currentUser, isLoading, fetchUserInfo } = useUserStore();

console.log(currentUser);
  return (
    <div className="userInfo">
      <div className="user">
        <img src={currentUser.avatar|| "./avatar.png"} alt="" />
        <h4>{currentUser.username}</h4>
      </div>
      <div className="icons">
        <img src="./more.png" alt="" />
        <img src="./video.png" alt="" />
        <img src="./edit.png" alt="" />
    </div>
    </div>
  )
}

export default UserInfo