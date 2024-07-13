import { useState } from "react";
import styles from "../ComponentStyles/DashboardImprovement.module.css"
import Sidebar from "../Components/Sidebar";
import { FaLeaf } from "react-icons/fa6"
import SuggestionList from "../Components/SuggestionList";

const DashboardImprovement = () => {
  const [suggestions, setSuggestions] = useState([
    {suggestion: 'Walk buddy', id: 1},
    {suggestion: 'shower faster', id: 2}
  ])


  return (
    <div className={styles.dashboard}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.right}>
        <div className={styles.title}>
          <div className={styles.titleleft}>Suggestions</div>
          <div className={styles.titleright}>
            <div className="text">Green<span className={styles.green}>Print</span>Life</div>
            <FaLeaf className={styles.green}/>
          </div>
        </div>
        <div className="improvements">
        <SuggestionList suggestions={suggestions}/>
      </div>
      </div>
    </div>
  );
}
 
export default DashboardImprovement;