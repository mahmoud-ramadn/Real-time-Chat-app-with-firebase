import './detail.css'
import { auth } from '../../lib/firebase'
const Detail = () => {
  return (
    <div className='detail'>
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h2>Jane Doe</h2>
        <p>Lorem ipsum dolor sit.</p>
      </div>

      <div className="info"> 

        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & Help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>Shared photos</span>
            <img src="./arrowDown.png" alt="" />
          </div>
          <div className="photos">

            <div className="photoItem">

              <div className="photoDetail">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxKQoJp2UgmvuaI80EtADd7dCKhbw2dE4I5hrXtZ9rtfuXvaq_XuI1AeaCCf9Gix0wI6I&usqp=CA" alt="" />
                <span>photo_2024_.png</span>
              </div>
              <img src='./download.png' alt='' className='icon
              '/>

            </div>
            <div className="photoItem">

              <div className="photoDetail">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxKQoJp2UgmvuaI80EtADd7dCKhbw2dE4I5hrXtZ9rtfuXvaq_XuI1AeaCCf9Gix0wI6I&usqp=CA" alt="" />
                <span>photo_2024_.png</span>
              </div>
              <img src='./download.png' alt=''  className='icon
              '/>

            </div>
            <div className="photoItem">

              <div className="photoDetail">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxKQoJp2UgmvuaI80EtADd7dCKhbw2dE4I5hrXtZ9rtfuXvaq_XuI1AeaCCf9Gix0wI6I&usqp=CA" alt="" />
                <span>photo_2024_.png</span>
              </div>
              <img src='./download.png' alt='' className='icon
              ' />

            </div>




          </div>

        </div>


        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <button>Block User</button>

        <button className='logout' onClick={()=>auth.signOut() }>Logout</button>

      </div>

    </div>
  )
}

export default Detail