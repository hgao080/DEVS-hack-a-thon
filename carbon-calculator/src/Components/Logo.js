import styles from "../ComponentStyles/Logo.module.css"
import { FaLeaf } from "react-icons/fa6"

const Logo = () => {
  return (
    <div className={styles.container}>
      <div className="text">Green<span className={styles.green}>Print</span>Life</div>
      <FaLeaf className={styles.green} />
    </div>
  );
}

export default Logo;