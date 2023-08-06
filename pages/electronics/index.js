import axios from "axios";
import styles from "./electronics.module.css";
import Fetch from "../../api/fetch";
export async function getStaticProps() {
  Fetch()
}

function ElectronicsPage(props) {
  console.log(props.electronics);
  // Receive electronics as a prop
  return <div className={styles.container}></div>; // You can now use the electronics data within this component
}

export default ElectronicsPage;
