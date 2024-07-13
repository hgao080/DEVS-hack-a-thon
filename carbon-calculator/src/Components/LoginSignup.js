import styles from "../ComponentStyles/LoginSignup.module.css"

import user_icon from "../Assets/person.png"
import email_icon from "../Assets/email.png"
import password_icon from "../Assets/password.png"
import { useState } from "react"

const LoginSignup = () => {
  const handleClick = (actionType) => {
    if (actionType === action) {
      window.location.pathname = "/dashboard"
    } else {
      if (actionType == "Sign Up") {
        setAction("Sign Up")
      } else {
        setAction("Login")
      }
    }
  };

  const [action, setAction] = useState("Sign Up")

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.text}>{action}</div>
        <div className={styles.underline}></div>
      </div>
      <div className={styles.inputs}>
        {action==="Login"?<div></div>:<div className={styles.input}>
          <img src={user_icon} alt="" />
          <input type="text" placeholder="Name"/>
        </div>}
        <div className={styles.input}>
          <img src={email_icon} alt="" />
          <input type="email" placeholder="Email"/>
        </div>
        <div className={styles.input}>
          <img src={password_icon} alt="" />
          <input type="password" placeholder="Password"/>
        </div>
      </div>
      {action==="Sign Up"?<div></div>:<div className={styles.forgot_password}>Lost Password? <span>Click Here!</span></div>}
      <div className={styles.submit_container}>
        <div className={`${styles.submit} ${action === "Login" ? styles.gray : ""}`} onClick={() => {handleClick("Sign Up")}}>Sign Up</div>
        <div className={`${styles.submit} ${action === "Sign Up" ? styles.gray : ""}`} onClick={() => {handleClick("Login")}}>Login</div>
      </div>
    </div>
  );
}
 
export default LoginSignup;