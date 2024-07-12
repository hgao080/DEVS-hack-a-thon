import styles from "../ComponentStyles/Header.module.css"
import { FaLeaf } from "react-icons/fa6"

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <h1 className={styles.text}>Green<span class={styles.text_green}>Print</span>Life</h1>
        <FaLeaf className={styles.icon}/>
      </div>

      <ul className={styles.buttons}>
        <li className={styles.login}>Sign In</li>
        <li>Sign Up</li>
      </ul>
    </header>
  )
}

export default Header