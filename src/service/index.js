import axios from "axios";
import { API_URL } from 'config';

export const getAllOrders = (email = '') => {
  const request = axios.post(`${API_URL}/orders`, { email } );
  return request.then((response) => response.data);
};

export const getOrderArticles = (trakingNum = '') => {
  const request = axios.get(`${API_URL}/orders/${trakingNum}`);
  return request.then((response) => response.data);
};

export const getOrderStatus = (trakingNum = '') => {
    const request = axios.get(`${API_URL}/status/${trakingNum}`);
    return request.then(response => response.data);
}
