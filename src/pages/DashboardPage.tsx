import type { Book } from '../types';
import '../App.css';

interface DashboardPageProps {
  books: Book[];
}

export default function DashboardPage({ books }: DashboardPageProps) {
  // Calculate stats
  const totalBooks = books.length;
  const uniqueAuthors = new Set(books.map(b => b.author)).size;
  const withDesc = books.filter(b => b.description).length;
  const completionRate = totalBooks > 0 ? Math.round((withDesc / totalBooks) * 100) : 0;

  return (
    <div className="dashboard-container">
      
      {/* Header */}
      <div className="dashboard-header">
        <h1 className="dashboard-title">Dashboard</h1>
        <p className="dashboard-subtitle">Overview of your library statistics</p>
      </div>
      
      {/* Stats Cards Grid */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-value" style={{ color: '#3b82f6' }}>{totalBooks}</div>
          <div className="stat-label">Total Books</div>
        </div>
        
        <div className="stat-card">
          <div className="stat-value" style={{ color: '#8b5cf6' }}>{uniqueAuthors}</div>
          <div className="stat-label">Unique Authors</div>
        </div>
        
        <div className="stat-card">
          <div className="stat-value" style={{ color: '#ec4899' }}>{withDesc}</div>
          <div className="stat-label">With Descriptions</div>
        </div>
      </div>

      {/* Insights Section */}
      <div className="insights-card">
        <h2 style={{ fontSize: '1.3rem', margin: '0 0 20px 0', fontWeight: 600 }}>
          Library Insights
        </h2>
        
        <div className="insights-grid">
          <div>
            <p className="stat-label" style={{ marginBottom: 6 }}>Collection Status</p>
            <p style={{ fontSize: '1.2rem', fontWeight: 600, color: totalBooks > 0 ? '#4ade80' : '#94a3b8' }}>
              {totalBooks > 0 ? 'Active Collection' : 'Empty Library'}
            </p>
          </div>
          
          <div>
            <p className="stat-label" style={{ marginBottom: 6 }}>Data Quality</p>
            <p style={{ fontSize: '1.2rem', fontWeight: 600 }}>
              {completionRate}% Complete
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}