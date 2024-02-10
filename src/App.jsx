import { useEffect, useState } from "react";
import axios from "axios";
import "@mantine/core/styles.css";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "./services/queries";

function App() {
  const products = useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(),
  });
  console.log(products.data, products.isError);
  if (products.isLoading) return <>Loading...</>;
  if (products.isError) return <>Error occured</>;
  return (
    <>
      <ul>
        {products.data.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
    </>
  );
}

export default App;
