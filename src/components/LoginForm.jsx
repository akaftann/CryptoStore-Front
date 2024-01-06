import { useContext, useState } from "react";
import { Context } from "../main";
import styles from "../style";
import {FaUser, FaLock} from 'react-icons/fa'
import Navbar from "./Navbar";
import { Link } from "react-router-dom"



const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const {store} = useContext(Context)

  const handleLogin = async (e) => {
    e.preventDefault(); // Зупиняє типову поведінку форми (перезавантаження сторінки)
    console.log('click');
    await store.signIn(email, pass);
  };


  return (
    <div className="bg-primary w-full overflow-hidden text-white">

        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Navbar />
            </div>
        </div>

        <div className="wrapper-outer">
            <div className="wrapper">
                <form onSubmit={handleLogin}>
                    <h1>Login</h1>
                    <div className="input-box">
                        <input onChange={e=>setEmail(e.target.value)} value={email} type="text" placeholder="Email"  required />
                        <FaUser className="icon"/>
                    </div>
                    <div className="input-box">
                        <input onChange={e=>setPass(e.target.value)} value={pass} type="password" placeholder="Password" required />
                        <FaLock className="icon"/>
                    </div>

                    <div className="remember-forgot">
                        <label><input type="checkbox" />Remember me</label>
                        <a href="#">Forgot password?</a>
                    </div>

                    <button type="submit">Login</button>

                    <div className="register-link">
                        <p>Don't have an account? <Link to="/register">Register</Link></p>
                    </div>
                </form>
            </div>
            
        </div>
        </div>
  );
};

export default LoginForm;
