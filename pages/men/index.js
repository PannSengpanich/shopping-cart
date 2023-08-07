import axios from "axios";
import styles from "./men.module.css";
import Fetch from "../../api/fetch";
import Card from "@/components/Card";
export async function getStaticProps() {
  let data = await Fetch(
    "https://fakestoreapi.com/products/category/men's clothing",
  );
  return { props: { men: data } };
}

function MenPage(props) {
  console.log(props.men[0]);
  // Receive electronics as a prop
  return (
    <div className={styles.container}>
      {props.men.map((product) => {
        return <Card info={product}></Card>;
      })}
    </div>
  );
}

export default MenPage;
