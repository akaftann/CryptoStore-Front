import styles from "../style";
import PaymentForm  from "./PaymentForm";
import Navbar from "./Navbar";

const Payment = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <PaymentForm />
      </div>
    </div>
    
    
  </div>
);

export default Payment;
