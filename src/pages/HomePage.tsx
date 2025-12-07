import { BookOpen, BookMarked } from 'lucide-react';
import type { PageView } from '../types';
import '../App.css';

interface HomePageProps {
  onNavigate: (page: PageView) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="home-container">
      <div className="home-content">
        
        {/* Hero Section */}
        <h1 className="home-title">Welcome to LibraryMS</h1>
        <p className="home-description">
          Manage your digital library with ease. Organize, search, and track your book collection in a modern interface.
        </p>
        
        {/* Action Buttons */}
        <div className="home-actions">
          <button onClick={() => onNavigate('books')} className="btn btn-primary btn-large">
            <BookOpen size={20} style={{ marginRight: '8px' }} /> 
            Manage Books
          </button>
          <button onClick={() => onNavigate('dashboard')} className="btn btn-secondary btn-large">
            <BookMarked size={20} style={{ marginRight: '8px' }} /> 
            View Dashboard
          </button>
        </div>

        {/* Feature Grid */}
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📚</div>
            <h3 className="feature-title">Easy Management</h3>
            <p className="feature-desc">Add, edit, and organize your books effortlessly.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🔍</div>
            <h3 className="feature-title">Instant Search</h3>
            <p className="feature-desc">Find any book by title or author in milliseconds.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3 className="feature-title">Live Statistics</h3>
            <p className="feature-desc">Track your total collection size and metrics.</p>
          </div>
        </div>
        
      </div>
    </div>
  );
}