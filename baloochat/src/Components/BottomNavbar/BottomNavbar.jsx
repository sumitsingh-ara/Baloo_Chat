import styles from "./BottomNavbar.module.css";
import Home from "../../Allicons/Home.svg";
import Filter from "../../Allicons/Filter.svg";
import Search from "../../Allicons/Search.svg";
import User_add from "../../Allicons/User_add.svg";
export const BottomNavbar = () => {
  return (
    <div className={styles.bottomContainer}>
      <div className={styles.bottomIcons}>
        <img onClick={()=>{
            console.log("This is home button,can use to link homepage")
        }} src={Home} tabIndex={1} alt="" />
        <img onClick={()=>{
            console.log("This is filter button,can use to filter chats")
        }} src={Filter} tabIndex={2} alt="" />
        <img onClick={()=>{
            console.log("This is search button,can use to search chats")
        }} src={Search} tabIndex={3} alt="" />
      </div>
      <div onClick={()=>{
        alert("It can open a new window or link to add new chats")
      }} className={styles.User_add}>
        <div className={styles.alignUser}>
        <img src={User_add} alt="" />
        </div>
      </div>
    </div>
  );
};
