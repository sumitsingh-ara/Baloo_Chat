import styles from './TopNavbar.module.css';

export const TopNavbar =() => {

    return(
        <div className ={styles.mainDiv}>
            <div className={styles.topImage}>
                <img className={styles.topImage} src="https://static.remove.bg/remove-bg-web/5c20d2ecc9ddb1b6c85540a333ec65e2c616dbbd/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg" alt="" />
            </div>
            <div className={styles.topName}>Diana</div>
        </div>
    )
}