import Logo from "../Components/Logo";
import Sidebar from "../Components/Sidebar";
import styles from "../ComponentStyles/Dashboard.module.css"

const Dashboard = () => {
  return ( 
    <div className={styles.dashboard}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.right}>
        <div className={styles.logo}>
          <Logo className={styles.logo}/>
        </div>
        <img src="/R1.png" alt="" className={styles.bg_img}/>
        <div className={styles.text}>
          <div className={styles.welcome}>Kia Ora,</div>
          <div className={styles.welcome}>Welcome</div>
        </div>
        <div className={styles.button} onClick={() => {window.location.pathname="/dashboard/questionnaire"}}>Start Questionnaire</div>
      </div>
    </div>
   );
}
 
export default Dashboard;