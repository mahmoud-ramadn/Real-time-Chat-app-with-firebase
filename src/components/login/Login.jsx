import { useState } from 'react';
import './login.css';
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../lib/firebase';
import { setDoc, doc } from 'firebase/firestore';
import upload from '../../lib/upload';

const Login = () => {
  const [avatar, setAvatar] = useState({
    file: null,
    url: ""
  });
  const [loading, setLoading] = useState(false);

  const handleAvatar = (e) => {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0])
      });
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const { email, password } = Object.fromEntries(formData);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success('Successfully logged in!');
    } catch (error) {
      console.log(error);
      toast.error(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const { username, email, password } = Object.fromEntries(formData);
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const imgUrl = await upload(avatar.file);
      await setDoc(doc(db, "users", res.user.uid), {
        username,
        email,
        avatar: imgUrl,
        id: res.user.uid,
        blocked: []
      });
      await setDoc(doc(db, "userChats", res.user.uid), {
        chats: []
      });
      toast.success('Account created! You can log in now!');
    } catch (error) {
      console.log(error);
      toast.error(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='login'>
      <div className="item">
        <h2>Welcome back</h2>
        <form onSubmit={handleLogin}>
          <input type="email" placeholder='Email' name='email' required />
          <input type="password" placeholder='Password' name='password' required />
          <button type="submit" disabled={loading}>
            {loading ? 'Loading...' : 'Sign In'}
          </button>
        </form>
      </div>

      <div className="separator"></div>
      <div className="item">
        <h2>Create an Account</h2>
        <form onSubmit={handleRegister}>
          <label htmlFor="file">
            <img src={avatar.url || "./avatar.png"} alt="Avatar" />
            Upload an Image
          </label>
          <input type="file" id='file' style={{ display: "none" }} onChange={handleAvatar} />
          <input type="text" name="username" placeholder='Username' required />
          <input type="email" placeholder='Email' name='email' required />
          <input type="password" placeholder='Password' name='password' required />
          <button type="submit" disabled={loading}>
            {loading ? 'Loading...' : 'Sign Up'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
