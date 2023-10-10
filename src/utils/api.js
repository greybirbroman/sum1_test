const BASE_URL = 'http://localhost:3001';
const POST = 'POST';

const handleResponse = async (response) => {
  if (!response.ok) {
    const errorData = await response.json();
    throw errorData;
  }
  return response.json();
};

const getHeaders = () => {
  return {
    'Content-Type': 'application/json',
  };
};

export const register = async (userData) => {
  try {
    const response = await fetch(`${BASE_URL}/register`, {
      method: POST,
      headers: getHeaders(),
      body: JSON.stringify(userData),
    });
    return handleResponse(response);
  } catch (error) {
    throw error;
  }
};

export const authorization = async (userData) => {
  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: POST,
      headers: getHeaders(),
      body: JSON.stringify(userData),
    });
    return handleResponse(response);
  } catch (error) {
    throw error;
  }
};
