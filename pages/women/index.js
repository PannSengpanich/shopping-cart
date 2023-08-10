import axios from "axios";
import styles from "../productPage.module.css";
import Fetch from "../../api/fetch";
import Card from "@/components/Card";
export async function getStaticProps() {
  let data = await Fetch(
    "https://fakestoreapi.com/products/category/women's clothing",
  );
  return { props: { women: data } };
}

function WomenPage(props) {
  console.log(props.women[0]);
  // Receive electronics as a prop
  return (
    <div className={styles.container}>
      {props.women.map((product) => {
        return <Card info={product}></Card>;
      })}
    </div>
  );
}

export default WomenPage;
