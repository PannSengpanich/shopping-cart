import styles from "./index.module.css";

function HomePage() {
  return (
    <div className={styles.container}>
      <div className={`${styles.content} ${styles.slidingText}`}>
        WELCOME TO MY SHOP
      </div>
    </div>
  );
}
export default HomePage;
