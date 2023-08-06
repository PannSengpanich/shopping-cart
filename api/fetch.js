import axios from "axios";

export default async function Fetch(api, categories) {
  let res;
  try {
    res = await axios.get(api);
  } catch (error) {
    // Return an error or empty props if the request fails
    return { props: { [categories]: [] } };
  }

  return {
    props: { [categories]: res.data }, // Use res.data to access the fetched data
  };
}
