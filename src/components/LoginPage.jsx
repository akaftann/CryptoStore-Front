import styles from "../style";
import LoginForm from "./LoginForm2";
import Navbar from "./Navbar";

const LoginPage = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <LoginForm />
      </div>
    </div>
  </div>
);

export default LoginPage;
