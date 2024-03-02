import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/wp-json/wc/v3/',
  headers: {
    'Content-Type': 'application/json',
  },
  auth: {
    username: 'ck_1a82de29378ab5685608209452ad5b5188e40b0e',
    password: 'cs_9cb706dd3899b0693d58afff1566548c138a2600'
  }
});

export const getProducts = async () => {
  try {
    const response = await api.get('/products');
    return response.data;
  } catch (error) {
    console.error('Error fetching products', error);
    return null;
  }
};

export const getProduct = async (id) => {
  try {
    const response = await api.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching product with id ${id}`, error);
    return null;
  }
};

// ...existing code...

export const createOrder = async (orderData) => {
    try {
      const response = await api.post('/orders', orderData);
      return response.data;
    } catch (error) {
      console.error('Error creating order', error);
      return null;
    }
  };
  
  export const updateOrder = async (id, orderData) => {
    try {
      const response = await api.put(`/orders/${id}`, orderData);
      return response.data;
    } catch (error) {
      console.error(`Error updating order with id ${id}`, error);
      return null;
    }
  };
  
  export const deleteOrder = async (id) => {
    try {
      const response = await api.delete(`/orders/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting order with id ${id}`, error);
      return null;
    }
  };
  