import styles from "../ComponentStyles/Nav.module.css"
import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.buttons}>
        <li id={styles[window.location.pathname == "/" ? "active" : ""]} onClick={() => {window.location.pathname="/"}}>Home</li>
        <li id={styles[window.location.pathname == "/about" ? "active" : ""]} onClick={() => {window.location.pathname="/about"}}>About Us</li>
        <li id={styles[window.location.pathname == "/contact" ? "active" : ""]} onClick={() => {window.location.pathname="/contact"}}>Contact Us</li>
      </ul>
    </nav>
  );
}
 
export default Nav;