import axios from 'axios';

// const BASE_URL = 'http://localhost:3000/product/';

export async function getProduct(endpoint) {
  const { data } = await axios.get(`http://localhost:3000/product/${endpoint}`);
  return data;
}
