import Sidebar from "../Components/Sidebar";
import styles from "../ComponentStyles/dashboard.module.css"

const Dashboard = () => {
  return ( 
    <div className={styles.dashboard}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className="stuff">
        <div className="welcome">Welcome</div>
      </div>
    </div>
   );
}
 
export default Dashboard;