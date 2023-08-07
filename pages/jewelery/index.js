import axios from "axios";
import styles from "./jewelery.module.css";
import Fetch from "../../api/fetch";
import Card from "@/components/Card";
export async function getStaticProps() {
  let data = await Fetch("https://fakestoreapi.com/products/category/jewelery");
  return { props: { jewelery: data } };
}

function JeweleryPage(props) {
  console.log(props.jewelery[0]);
  // Receive electronics as a prop
  return (
    <div className={styles.container}>
      {props.jewelery.map((product) => {
        return <Card info={product}></Card>;
      })}
    </div>
  );
}

export default JeweleryPage;
