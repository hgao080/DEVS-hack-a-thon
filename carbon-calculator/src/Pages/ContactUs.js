import Header from "../Components/Header";
import Nav from "../Components/Nav";
import styles from "../ComponentStyles/ContactUs.module.css"

const ContactUs = () => {
  return ( 
    <div className="">
      <Header />
      <Nav />
      <div className={styles.header}>
        <h1 className={styles.header_text}>Contact Us</h1>
      </div>
      <div className={styles.container}>
        <form action="/action_page.php">
          <label htmlFor="fname">First Name</label>
          <input type="text" id="fname" name="firstname" placeholder="Your name.." className={styles.inputText}/>

          <label htmlFor="lname">Last Name</label>
          <input type="text" id="lname" name="lastname" placeholder="Your last name.." className={styles.inputText}/>

          <label htmlFor="subject">Subject</label>
          <textarea id="subject" name="subject" placeholder="Write something.." style={{height: "200px"}} className={styles.inputText}></textarea>

          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default ContactUs;