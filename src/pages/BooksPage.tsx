import { useState } from 'react';
import { Plus, Search, Edit2, Trash2, BookOpen } from 'lucide-react';
import type { Book } from '../types';
import '../App.css';

interface BooksPageProps {
  books: Book[];
  onAdd: () => void;
  onEdit: (book: Book) => void;
  onDelete: (id: number) => void;
}

export default function BooksPage({ books, onAdd, onEdit, onDelete }: BooksPageProps) {
  const [query, setQuery] = useState('');

  const filtered = books.filter(book =>
    book.title.toLowerCase().includes(query.toLowerCase()) ||
    book.author.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="page-content">
      
      {/* 1. Page Header */}
      <div className="page-header">
        <div className="page-title">
          <h1>Book Collection</h1>
          <p>{books.length} {books.length === 1 ? 'book' : 'books'} in library</p>
        </div>
        <button onClick={onAdd} className="btn btn-primary flex gap-2">
          <Plus size={20} /> Add Book
        </button>
      </div>

      {/* 2. Search Bar */}
      <div className="search-wrapper">
        <Search className="search-icon" size={20} />
        <input
          className="search-input"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search by title or author..."
        />
      </div>

      {/* 3. Books Grid */}
      {filtered.length === 0 ? (
        <div className="empty-state">
          <BookOpen size={48} style={{ opacity: 0.5, margin: '0 auto 16px' }} />
          <p>No books found matching "{query}"</p>
        </div>
      ) : (
        <div className="books-grid">
          {filtered.map(book => (
            <div key={book.id} className="book-card">
              
              <div className="card-top">
                <BookOpen size={28} style={{ color: '#2eb8b6ff' }} />
                <div className="flex gap-2">
                  <button onClick={() => onEdit(book)} className="icon-btn" title="Edit">
                    <Edit2 size={16} />
                  </button>
                  <button onClick={() => onDelete(book.id)} className="icon-btn danger" title="Delete">
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>

              <div>
                <h3 className="book-title">{book.title}</h3>
                <p className="book-author">by {book.author}</p>
                <p className="book-desc">
                  {book.description || 'No description available'}
                </p>
              </div>

            </div>
          ))}
        </div>
      )}
    </div>
  );
}