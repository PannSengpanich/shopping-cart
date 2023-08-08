import * as React from "react";
import styles from "./cart.module.css";
import CheckoutProduct from "@/components/CheckoutProduct";

import { useSelector, useDispatch } from "react-redux";

function Cart() {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.product.checkoutProduct);

  return (
    <div className={styles.productContainer}>
      {allProducts.length === 0 ? (
        <></>
      ) : (
        allProducts.map((product) => {
          return <CheckoutProduct product={product} />;
        })
      )}
    </div>
  );
}
export default Cart;
