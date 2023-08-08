import axios from "axios";
import styles from "./electronics.module.css";
import Fetch from "../../api/fetch";
import Card from "@/components/Card";
export async function getStaticProps() {
  let data = await Fetch(
    "https://fakestoreapi.com/products/category/electronics",
  );
  return { props: { electronics: data } };
}

function ElectronicsPage(props) {
  console.log(props.electronics[1]);
  // Receive electronics as a prop
  return (
    <div className={styles.container}>
      {props.electronics.map((product) => {
        return <Card info={product}></Card>;
      })}
    </div>
  );
}

export default ElectronicsPage;
