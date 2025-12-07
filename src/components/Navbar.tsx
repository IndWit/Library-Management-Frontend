import { BookOpen, Home, BookMarked, LogOut, User } from 'lucide-react';
import type { PageView } from '../types';
import '../App.css';

interface NavbarProps {
  currentPage: PageView;
  username: string;
  onNavigate: (page: PageView) => void;
  onLogout: () => void;
}

export default function Navbar({ currentPage, username, onNavigate, onLogout }: NavbarProps) {
  return (
    <nav className="navbar">
      <div className="container flex justify-between" style={{ gap: 48 }}>
        {/* Logo */}
        <div className="flex" style={{ gap: 32 }}>
          <div className="nav-brand" onClick={() => onNavigate('home')}>
            <BookOpen className="text-primary" size={24} />
            <span style={{ fontSize: '1.2rem', fontWeight: 700 }}>LibraryMS</span>
          </div>

          {/* Links */}
          <div className="nav-links">
            <button onClick={() => onNavigate('home')} className={`nav-btn ${currentPage === 'home' ? 'active' : ''}`}>
              <Home size={18} /> Home
            </button>
            <button onClick={() => onNavigate('dashboard')} className={`nav-btn ${currentPage === 'dashboard' ? 'active' : ''}`}>
              <BookMarked size={18} /> Dashboard
            </button>
            <button onClick={() => onNavigate('books')} className={`nav-btn ${currentPage === 'books' ? 'active' : ''}`}>
              <BookOpen size={18} /> Books
            </button>
          </div>
        </div>

        {/* User Info */}
        <div className="flex" style={{ gap: 24 }}>
          <div className="nav-user-badge">
            <User size={16} style={{ color: '#2eb8b6ff' }} />
            <span style={{ color: '#e2e8f0', fontSize: '0.9rem' }}>{username}</span>
          </div>
          <button onClick={onLogout} className="btn-logout" >
            <LogOut size={20} /> Logout
          </button>
        </div>
      </div>
    </nav>
  );
}