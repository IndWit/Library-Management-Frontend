import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import BooksPage from './pages/BooksPage';
import HomePage from './pages/HomePage';       // <--- New Import
import DashboardPage from './pages/DashboardPage'; // <--- New Import
import BookModal from './components/BookModal';
import { api } from './services/api';
import './App.css';
import type { Book, PageView, User } from './types';

export default function App() {
  // --- STATE ---
  const [page, setPage] = useState<PageView>('login');
  const [user, setUser] = useState<User | null>(null);
  const [books, setBooks] = useState<Book[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingBook, setEditingBook] = useState<Book | null>(null);

  // --- API CALLS ---
  const loadBooks = async () => {
    try {
      const data = await api.getBooks();
      setBooks(data);
    } catch (e) {
      console.error("Failed to load books", e);
    }
  };

  useEffect(() => {
    if (user) loadBooks();
  }, [user]);

  // --- HANDLERS ---
  const handleLogin = async (username: string, password: string) => {
    try {
      await api.login({ username, password });
      setUser({ username });
      setPage('home');
    } catch (error) {
      alert("Login Failed! Please check your credentials.");
    }
  };

  const handleRegister = async (username: string, password: string) => {
    try {
      await api.register({ username, password });
      alert("Registration Successful! Please login.");
      setPage('login');
    } catch (error) {
      alert("Registration Failed! Username might exist.");
    }
  };

  const handleSave = async (bookData: any) => {
    try {
      if (editingBook) {
        await api.updateBook(bookData.id, bookData);
      } else {
        await api.createBook(bookData);
      }
      setIsModalOpen(false);
      setEditingBook(null);
      loadBooks();
    } catch (e) {
      alert("Error saving book");
    }
  };

  const handleDelete = async (id: number) => {
    if (confirm("Delete this book?")) {
      await api.deleteBook(id);
      loadBooks();
    }
  };

  // --- ROUTING LOGIC (Auth Pages) ---
  if (!user) {
    if (page === 'register') return <RegisterPage onRegister={handleRegister} onSwitchToLogin={() => setPage('login')} />;
    return <LoginPage onLogin={handleLogin} onSwitchToRegister={() => setPage('register')} />;
  }

  // --- MAIN APP LAYOUT ---
  return (
    <div className="app-wrapper">
      <Navbar 
        currentPage={page} 
        username={user.username} 
        onNavigate={setPage} 
        onLogout={() => { setUser(null); setPage('login'); }} 
      />
      
      <div className="page-content">
        {page === 'home' && <HomePage onNavigate={setPage} />}
        
        {page === 'dashboard' && <DashboardPage books={books} />}
        
        {page === 'books' && (
          <BooksPage 
            books={books}
            onAdd={() => { setEditingBook(null); setIsModalOpen(true); }}
            onEdit={(b) => { setEditingBook(b); setIsModalOpen(true); }}
            onDelete={handleDelete}
          />
        )}
      </div>

      {isModalOpen && (
        <BookModal 
          book={editingBook} 
          onClose={() => setIsModalOpen(false)} 
          onSave={handleSave} 
        />
      )}
    </div>
  );
}