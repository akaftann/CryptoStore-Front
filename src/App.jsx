import styles from "./style";
import {  Navbar, Hero } from "./components";
import { Context } from "./main";
import { useContext, useEffect } from "react";
import {observer} from 'mobx-react-lite'

const App = () => 
{
  const {store} = useContext(Context)
  useEffect(()=>{
    if(localStorage.getItem('USDTtoken')){
      console.log('saved token: ', localStorage.getItem('USDTtoken'))
      store.checkAuth()
    }
  }, [])

return (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar isAuth={store.isAuth} signOut={store.signOut} />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        {/*<LoginForm />
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer /> */}
      </div>
    </div>
  </div>
)
};

export default observer(App);
