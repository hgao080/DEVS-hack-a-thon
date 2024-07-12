import styles from "../ComponentStyles/Title.module.css"

const Title = () => {
  return ( 
    <div className={styles.container}>
      <img src="/main_image.jpg" alt="Carbon Emission" className={styles.main_image}/>
      <h1 className={styles.text}>Did you know. . .</h1>
    </div>
  );
}
 
export default Title;