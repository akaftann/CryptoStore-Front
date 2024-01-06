import styles from "../style";
import  Payment  from "./Payment";
import Navbar from "./Navbar";

const PaymentDashboard = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Payment />
      </div>
    </div>
    
    
  </div>
);

export default PaymentDashboard;
