import axios from "axios";
const baseUrl = "http://localhost:3003/api";

export const getAllOrders = (email = '') => {
  const request = axios.post(`${baseUrl}/orders`, { email } );
  return request.then((response) => response.data);
};

export const getOrderArticles = (trakingNum = '') => {
  const request = axios.get(`${baseUrl}/orders/${trakingNum}`);
  return request.then((response) => response.data);
};

export const getOrderStatus = (trakingNum = '') => {
    const request = axios.get(`${baseUrl}/status/${trakingNum}`);
    return request.then(response => response.data);
}
