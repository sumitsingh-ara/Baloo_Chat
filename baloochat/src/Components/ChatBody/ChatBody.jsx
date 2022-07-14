import styles from "./ChatBody.module.css";

export const ChatBody = () => {
  return (
    <div className={styles.mainContainer}>

    {[...new Array(20)].map((item,index) => {
        return<div key={index} className={styles.chatMain}>
        <div className={styles.topImage}>
          <img
            className={styles.topImage}
            src="https://static.remove.bg/remove-bg-web/5c20d2ecc9ddb1b6c85540a333ec65e2c616dbbd/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg"
            alt=""
          />
        </div>
        {/* Second Part Contains name and message description */}
        <div
          style={{
            display: "grid",
            width: "100%",
            gridTemplateColumns: "78% 22%",
          }}
        >
          <div onClick={()=>{
            alert("Clicking on this will open a new component with the chatid to start the live chatting with the selected user");
          }}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
            }}
          >
            <div className={styles.topName}>Diana</div>
            <div className={styles.chatRegular}>
              Hey I've done design in a lot's of world
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
            }}
          >
            <div className={styles.time}>11:35pm</div>
            <div className={styles.notification}>2</div>
          </div>
          {/* 2nd part */}
        </div>
      </div>
    })}
    </div>
  );
};
