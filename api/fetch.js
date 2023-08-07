import axios from "axios";

export default async function Fetch(api) {
  let res;
  try {
    res = await axios.get(api);
  } catch (error) {
    // Return an error or empty props if the request fails
    return [];
  }

  return res.data;
}
