import styles from "../ComponentStyles/Nav.module.css"

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.buttons}>
        <li>Home</li>
        <li>Daily Inputted Emissions</li>
        <li>About Us</li>
        <li>Contact Us</li>
      </ul>
    </nav>
  );
}
 
export default Nav;