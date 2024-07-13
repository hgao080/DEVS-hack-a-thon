import Logo from "../Components/Logo";
import Sidebar from "../Components/Sidebar";
import styles from "../ComponentStyles/dashboard.module.css"
import { FaLeaf } from "react-icons/fa6"

const Dashboard = () => {
  return ( 
    <div className={styles.dashboard}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.right}>
        <Logo/>
        <div className={styles.welcome}>Welcome</div>
      </div>
    </div>
   );
}
 
export default Dashboard;