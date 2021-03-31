import axios from 'axios';

const product = axios.create({
  baseURL: 'https://corebiz-test.herokuapp.com/api/v1/products '
});

export default product;