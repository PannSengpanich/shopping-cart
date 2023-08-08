import { useState } from "react";
import styles from "./Card.module.css";
import Rating from "@mui/material/Rating";
import { TextField } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button } from "@mui/material";

function Card(props) {
  const [quantity, setQuantity] = useState(0);

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };
  const handleAddToCart = () => {};

  const menuItems = [];

  // Use a for loop to push 20 menu items to the array
  for (let i = 1; i <= 20; i++) {
    menuItems.push(
      <MenuItem value={i} key={i}>
        {i}
      </MenuItem>,
    );
  }

  return (
    <div className={styles.container} key={props.id}>
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

      <div className={styles.price}>฿{props.info.price}</div>
      <div className={styles.addToCart}>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">
            Quantity
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={quantity}
            onChange={handleQuantityChange}
            label="Quantity"
          >
            {menuItems}
          </Select>
        </FormControl>
        <Button variant="outlined" onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </div>
    </div>
  );
}
export default Card;
