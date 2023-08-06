import axios from "axios";

export async function getStaticProps() {
  let res; // Define res outside the try-catch block

  try {
    res = await axios.get(
      "https://fakestoreapi.com/products/category/jewelery"
    );
  } catch (error) {
    // Return an error or empty props if the request fails
    return {
      props: { electronics: [] },
    };
  }

  return {
    props: { electronics: res.data }, // Use res.data to access the fetched data
  };
}

function ElectronicsPage(props) {
  console.log(props.electronics);
  // Receive electronics as a prop
  return <h1>Electronics</h1>; // You can now use the electronics data within this component
}

export default ElectronicsPage;
