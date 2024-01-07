import { useContext, useState } from "react";
import { Context } from "../main";
import styles from "../style";
import {FaUser, FaLock} from 'react-icons/fa'
import Navbar from "./Navbar";
import { Link } from "react-router-dom"
import { robot } from "../assets";



const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const {store} = useContext(Context)

  const handleRegister = async (e) => {
    e.preventDefault(); 
    await store.signUp(email, pass);
  };


  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
            <div className="bg-primary w-full overflow-hidden text-white">
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
      </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
    </section>
  );
};

export default LoginForm;
