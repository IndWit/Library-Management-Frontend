export interface Book {
  id: number;
  title: string;
  author: string;
  description: string;
}

// ✅ FIX: Added 'register' to the list
export type PageView = 'login' | 'register' | 'home' | 'dashboard' | 'books';

export interface User {
  username: string;
  password?: string; // ✅ FIX: Added password (optional) so you can send it
}