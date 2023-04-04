import { instance } from '../axios/index';

// Function for register user endpoint
export async function registerUser(name, email, password) {
  try {
    const response = await instance.post('/register', { name, email, password });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Something went wrong');
  }
}

// Function for login user endpoint
export async function loginUser(email, password) {
  try {
    const response = await instance.post('/login', { email, password });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Something went wrong');
  }
}

// Function for create book endpoint
export async function createBook(formData) {
  try {
    const response = await instance.post('/books', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Something went wrong');
  }
}

// Function for edit book endpoint
export async function editBook(bookId, formData) {
  try {
    const response = await instance.put(`/books/${bookId}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Something went wrong');
  }
}

// Function for delete book endpoint
export async function deleteBook(bookId) {
  try {
    const response = await instance.delete(`/books/${bookId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Something went wrong');
  }
}

// Function for get book detail by id endpoint
export async function getBookDetail(bookId) {
  try {
    const response = await instance.get(`/books/${bookId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Something went wrong');
  }
}
