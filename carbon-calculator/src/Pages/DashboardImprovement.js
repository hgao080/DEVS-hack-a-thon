import { useEffect, useState } from "react";
import styles from "../ComponentStyles/DashboardImprovement.module.css"
import Sidebar from "../Components/Sidebar";
import SuggestionList from "../Components/SuggestionList";
import Logo from "../Components/Logo";

const DashboardImprovement = () => {
  const avgValues = [32.832, 2.8, 1.3188, 0, 1.407, 1.188, 62]

  const[date, setDate] = useState(getDate())
  const [suggestions, setSuggestions] = useState(null)
  const [results, setResults] = useState([])

  function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${month}/${date}/${year}`;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:8000/results');
        const data = await res.json();
        const correctObject = data[data.length - 1];
        setResults(correctObject.results);
      } catch (error) {
        console.error("Failed to fetch results:", error);
      }
    };
  
    fetchData();
  }, [])

  useEffect(() => {
    // Assuming avgValues is available in the component's scope
    const updatedSuggestions = results.map((result, index) => {
      const avg = avgValues[index];
      const res = parseInt(result, 10);
      console.log(result)
      console.log(avg)
      console.log(index)

      if (index === 3 && result < avg) {
        return "AT Transport ain't that bad, though it is expensive now";
      }

      if (result > avg) {
        switch (index) {
          case 0:
            return "Consider driving less and utilising other means of transport such as walking, biking and public transport";
          case 1:
            return "1 shower a day is plenty but more doesn't hurt that much I guess. Just don't stay in there for too long";
          case 2:
            return "Holy screentime dude. How about going outside or meeting up with some friends";
          case 3:
            return "Couple of flights aren't that bad for you, but they're bad for the environment";
          case 4:
            return "Utilising AT's horrible transport I like it";
          case 5:
            return "To be fair the trains actually aren't that bad";
          case 6:
            return "Holy fatty eating like a cow";
          default:
            return "The coders are useless";
        }
      }
      return "";
    }).filter(suggestion => suggestion !== "");

    setSuggestions(updatedSuggestions);
  }, [results])


  return (
    <div className={styles.dashboard}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.right}>
        <div className={styles.logo}>
          <div>
            <Logo />
          </div>
        </div>

        <div className={styles.suggestionsTitle}>Today's Suggestions</div>
        <div className={styles.improvements}>
          {suggestions === null ? <div></div> : <SuggestionList suggestions={suggestions} />}
        </div>
      </div>
    </div>
  );
}

export default DashboardImprovement;