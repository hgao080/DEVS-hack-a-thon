import { useEffect, useState } from "react";
import styles from "../ComponentStyles/DashboardImprovement.module.css"
import Sidebar from "../Components/Sidebar";
import SuggestionList from "../Components/SuggestionList";
import Logo from "../Components/Logo";

const avgValues = [192, 12, 42, 0, 15]

const DashboardImprovement = () => {
  const [suggestions, setSuggestions] = useState([])
  const results = ["100", "15", "44", "2", "17"]

  useEffect(() => {
    const updatedSuggestions = results.map((result, index) => {
      const avg = avgValues[index];
      const res = parseInt(result, 10);

      if (index == 4) {
        if (res < avg) {
          return "AT Transport ain't that bad"
        }
      }

      if (res > avg) {
        switch (index) {
          case 0:
            return "Consider driving less and utilising other means of transport such as walking, biking and public transport"
          case 1:
            return "You're taking too long to shower buddy. How about hurrying up, the water ain't free"
          case 2:
            return "Man you rotted really badly this week. Go outside and touch some grass"
          case 3:
            return "Why'd you hop on a flight dude, could've just swam"
          case 4:
            return ""
          default:
            return "The coders are useless"
        }
      }
      return "";
    }).filter(suggestion => suggestion !== "");

    setSuggestions(updatedSuggestions);
  }, [])


  return (
    <div className={styles.dashboard}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.right}>
        <div className={styles.blue}>
          <Logo />
          <div className={styles.suggestions}>Today's Suggestions</div></div>
        <div className={styles.improvements}>
          <SuggestionList suggestions={suggestions} />
        </div>
      </div>
    </div>
  );
}

export default DashboardImprovement;