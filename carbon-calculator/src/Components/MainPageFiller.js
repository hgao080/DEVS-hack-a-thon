import styles from "../ComponentStyles/MainPageFiller.module.css"

const average = 1024386
const formattedAverage = Intl.NumberFormat("en-US").format(average)

const MainPageFiller = () => {
  return ( 
    <div className={styles.container}>
      <h2 className={styles.text}>Today's Average User Carbon Emissions</h2>
      <h2 className={styles.num}>{formattedAverage}</h2>
    </div>
  );
}
 
export default MainPageFiller;