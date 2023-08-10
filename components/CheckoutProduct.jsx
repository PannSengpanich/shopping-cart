import styles from "./CheckoutProduct.module.css";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import { productActions } from "@/store/product";
import DeleteIcon from "@mui/icons-material/Delete";
function CheckoutProduct({ product }) {
  const dispatch = useDispatch();
  const removeHandler = () => {
    dispatch(productActions.remove({ id: product.id }));
  };
  const addHandler = () => {
    dispatch(productActions.add({ id: product.id }));
  };
  const deleteHandler = () => {
    dispatch(productActions.delete({ id: product.id }));
  };
  const typeQuantityHandler = (e) => {
    dispatch(
      productActions.typeQuantity({ id: product.id, quantity: e.target.value }),
    );
  };
  return (
    <div className={styles.product}>
      <div className={styles.productLeft}>
        <div>{product.title}</div>
      </div>
      <div className={styles.productRight}>
        <div className={styles.price}>฿{product.price * product.quantity}</div>
        <div className={styles.quantity}>
          <IconButton variant="text">
            <RemoveIcon onClick={removeHandler}></RemoveIcon>
          </IconButton>
          <TextField
            id="outlined-basic"
            variant="outlined"
            value={product.quantity}
            className={styles.customTextField}
            size="small"
            inputProps={{ style: { textAlign: "center" } }}
            onChange={typeQuantityHandler}
          />
          <IconButton variant="text">
            <AddIcon onClick={addHandler}></AddIcon>
          </IconButton>
          <IconButton>
            <DeleteIcon onClick={deleteHandler}></DeleteIcon>
          </IconButton>
        </div>
      </div>
    </div>
  );
}
export default CheckoutProduct;
