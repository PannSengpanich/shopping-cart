import styles from "./index.module.css";

function HomePage() {
  return (
    <div className={styles.container}>
      <div className={`${styles.content} ${styles.slidingText}`}>WELCOME</div>
    </div>
  );
}
export default HomePage;
