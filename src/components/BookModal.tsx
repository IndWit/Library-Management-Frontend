import { useState } from 'react';
import { X, Save } from 'lucide-react';
import type { Book } from '../types';
import '../App.css';

interface BookModalProps {
  book?: Book | null;
  onClose: () => void;
  onSave: (book: any) => void;
}

export default function BookModal({ book, onClose, onSave }: BookModalProps) {
  const [formData, setFormData] = useState({
    title: book?.title || '',
    author: book?.author || '',
    description: book?.description || ''
  });

  const handleSubmit = () => {
    if (formData.title && formData.author) {
      book ? onSave({ ...formData, id: book.id }) : onSave(formData);
    } else {
      alert("Title and Author are required");
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 600 }}>
            {book ? 'Edit Book' : 'Add New Book'}
          </h2>
          <button onClick={onClose} className="icon-btn">
            <X size={20} />
          </button>
        </div>
        
        <div>
          <label className="form-label">Title *</label>
          <input
            placeholder="Enter book title"
            value={formData.title}
            onChange={e => setFormData({...formData, title: e.target.value})}
            autoFocus
          />
        </div>

        <div>
          <label className="form-label">Author *</label>
          <input
            placeholder="Enter author name"
            value={formData.author}
            onChange={e => setFormData({...formData, author: e.target.value})}
          />
        </div>

        <div>
          <label className="form-label">Description</label>
          <textarea
            placeholder="Enter book description"
            rows={4}
            value={formData.description}
            onChange={e => setFormData({...formData, description: e.target.value})}
          />
        </div>
        
        <div className="flex gap-4">
          <button onClick={onClose} className="btn btn-secondary" style={{ flex: 1 }}>
            Cancel
          </button>
          <button onClick={handleSubmit} className="btn btn-primary btn-full" style={{ flex: 1 }}>
            <Save size={16} /> {book ? 'Update' : 'Add Book'}
          </button>
        </div>
      </div>
    </div>
  );
}