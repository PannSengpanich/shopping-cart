import styles from "./Card.module.css";
import Rating from "@mui/material/Rating";
import { TextField } from "@mui/material";
function Card(props) {
  return (
    <div className={styles.container}>
      <img src={props.info.image} alt="" className={styles.img} />
      <div className={styles.title}>{props.info.title}</div>
      <div className={styles.rating}>
        <Rating
          name="read-only"
          value={props.info.rating.rate}
          precision={0.1}
          readOnly
        />
        <div>{props.info.rating.count}</div>
      </div>

      <div>{props.info.price}</div>
    </div>
  );
}
export default Card;
