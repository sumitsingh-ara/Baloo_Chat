import styles from "./ChatBody.module.css";

export const ChatBody = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  return (
    <div className={styles.mainContainer}>

    {arr.map((item) => {
        return<div className={styles.chatMain}>
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
          <div
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
            <div className={styles.notification}>5</div>
          </div>
          {/* 2nd part */}
        </div>
      </div>
    })}
    </div>
  );
};
