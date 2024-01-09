import styles from "../style";
import PaymentForm  from "./PaymentForm";
import Navbar from "./Navbar";
import { Context } from "../main";
import { useContext, useEffect } from "react";
import {observer} from 'mobx-react-lite'

const Payment = () => {
  const {store} = useContext(Context)
  useEffect(()=>{
    if(localStorage.getItem('USDTtoken')){
      console.log('saved token: ', localStorage.getItem('USDTtoken'))
      store.checkAuth()
    }
  }, [])
  return(
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar isAuth={store.isAuth} />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <PaymentForm />
      </div>
    </div>
    
    
  </div>
)};

export default observer(Payment);
