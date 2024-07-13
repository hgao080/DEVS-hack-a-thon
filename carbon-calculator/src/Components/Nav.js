import styles from "../ComponentStyles/Nav.module.css"
import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.buttons}>
        <Link to="/" style={{ textDecoration: 'none', color: "black" }}><li id={styles[window.location.pathname == "/" ? "active" : ""]} className={styles.button}>Home</li></Link>
        <Link to="/daily" style={{ textDecoration: 'none', color: "black" }}><li id={styles[window.location.pathname == "/daily" ? "active" : ""]}>Daily Inputted Emissions</li></Link>
        <Link to="/about" style={{ textDecoration: 'none', color: "black" }}><li id={styles[window.location.pathname == "/about" ? "active" : ""]}>About Us</li></Link>
        <Link to="/contact" style={{ textDecoration: 'none', color: "black" }}><li id={styles[window.location.pathname == "/contact" ? "active" : ""]}>Contact Us</li></Link>
      </ul>
    </nav>
  );
}
 
export default Nav;