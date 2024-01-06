import { useContext, useState } from "react";
import { Context } from "../main";
import styles from "../style";
import {FaUser, FaLock} from 'react-icons/fa'
import Navbar from "./Navbar";



const RegisterForm = () => {
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const {store} = useContext(Context)

  const handleRegister = (e) => {
    e.preventDefault(); // Зупиняє типову поведінку форми (перезавантаження сторінки)
    console.log('click');
    store.signUp(email, pass);
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
                <form onSubmit={handleRegister}>
                    <h1>Sign Up</h1>
                    <div className="input-box">
                        <input onChange={e=>setEmail(e.target.value)} value={email} type="text" placeholder="Email"  required />
                        <FaUser className="icon"/>
                    </div>
                    <div className="input-box">
                        <input onChange={e=>setPass(e.target.value)} value={pass} type="password" placeholder="Password" required />
                        <FaLock className="icon"/>
                    </div>

                    <button type="submit">Sign Up</button>
                </form>
            </div>
            
        </div>
        </div>
  );
};

export default RegisterForm;
