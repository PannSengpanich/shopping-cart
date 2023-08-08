import styles from "./CheckoutProduct.module.css";
import { TextField } from "@mui/material";

function CheckoutProduct({ product }) {
  return (
    <div className={styles.product}>
      <div className={styles.productLeft}>
        <div>{product.title}</div>
      </div>
      <div className={styles.productRight}>
        <div className={styles.price}>{product.price}</div>
        <div className={styles.quantity}>
          Qty:
          <TextField
            id="outlined-basic"
            variant="outlined"
            defaultValue={product.quantity}
            className={styles.customTextField}
            size="small"
            inputProps={{ style: { textAlign: "center" } }}
          />
        </div>
      </div>
    </div>
  );
}
export default CheckoutProduct;
