import { useEffect, useState } from "react";
import axios from "axios";
import "@mantine/core/styles.css";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../services/queries";
import ProductCard from "../Components/ProductCard";
import styles from "../sass/ShoppingPage.module.scss";

function ShoppingPage({ addProductToCart }) {
  const products = useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(),
  });
  console.log(products.data, products.isError);
  if (products.isLoading) return <>Loading...</>;
  if (products.isError) return <>Error occured</>;
  return (
    <div className={styles.container}>
      {products.data.map((item) => {
        return (
          <ProductCard
            key={item.id}
            info={item}
            addProductToCart={addProductToCart}></ProductCard>
        );
      })}
    </div>
  );
}

export default ShoppingPage;
