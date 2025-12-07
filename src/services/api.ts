import axios from 'axios';
import type { Book, User } from '../types';

const API_URL = "https://localhost:7234/api"; 

export const api = {
  // --- AUTH ---
  login: async (user: User) => (await axios.post(`${API_URL}/Auth/login`, user)).data,
  
  // Add this new function:
  register: async (user: User) => (await axios.post(`${API_URL}/Auth/register`, user)).data,
  
  // --- BOOKS ---
  getBooks: async () => (await axios.get<Book[]>(`${API_URL}/Book`)).data,
  createBook: async (book: Omit<Book, 'id'>) => (await axios.post<Book>(`${API_URL}/Book`, book)).data,
  updateBook: async (id: number, book: Book) => (await axios.put(`${API_URL}/Book/${id}`, book)).data,
  deleteBook: async (id: number) => (await axios.delete(`${API_URL}/Book/${id}`)).data
};