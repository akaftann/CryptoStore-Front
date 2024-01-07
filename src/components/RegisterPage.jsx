import styles from "../style";
import RegisterForm from "./RegisterForm";
import Navbar from "./Navbar";

const RegisterPage = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <RegisterForm />
      </div>
    </div>
  </div>
);

export default RegisterPage;
