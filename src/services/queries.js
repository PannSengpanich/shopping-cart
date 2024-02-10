import axios from "axios";

const instance = axios.create({ baseURL: "https://fakestoreapi.com" });

export async function getProducts() {
  try {
    const response = await instance.get("/products");
    console.log(response.status);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}
