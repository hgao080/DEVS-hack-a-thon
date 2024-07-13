import styles from "../ComponentStyles/Title.module.css"

const Title = () => {
  return ( 
    <div className={styles.container}>
      <img src="/mainimage.png" alt="Carbon Emission" className={styles.main_image}/>
      <h1 className={styles.text}>Making Earth Greener</h1>
    </div>
  );
}
 
export default Title;