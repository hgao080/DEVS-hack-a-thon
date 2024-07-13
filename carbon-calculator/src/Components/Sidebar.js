import { SidebarData } from "./SidebarData"
import styles from "../ComponentStyles/Sidebar.module.css"

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.img}>
        <img src="/Ming.jpg" alt="" className={styles.profile}/>
        <div className="">My Account</div>
      </div>
      <ul className={styles.sidebarList}>
        {SidebarData.map((val, key) => {
          return (
            <li key={key} className={styles.row} id={styles[window.location.pathname == val.link ? "active" : ""]} onClick={() => {window.location.pathname = val.link}}>
              <div className={styles.spacing}></div>
              <div className={styles.title}>{val.title}</div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Sidebar