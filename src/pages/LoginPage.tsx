import { useState } from 'react';
import { BookOpen, ArrowRight } from 'lucide-react';
import '../App.css';

interface LoginPageProps {
  onLogin: (u: string, p: string) => void;
  onSwitchToRegister: () => void;
}

export default function LoginPage({ onLogin, onSwitchToRegister }: LoginPageProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username && password) onLogin(username, password);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleLogin();
  };

  return (
    <div className="center-screen">
      <div className="glass-card">
        <div className="auth-header">
          <BookOpen size={64} style={{ color: '#2eb8b6ff', margin: '0 auto 20px' }} />
          <h1 className="auth-title">Library System</h1>
          <p className="auth-subtitle">Sign in to manage your digital library</p>
        </div>

        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button className="btn btn-primary btn-full" onClick={handleLogin}>
            Sign In <ArrowRight size={18} />
          </button>

          <div className="auth-footer">
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: 8 }}>
              Don't have an account?
            </p>
            <button onClick={onSwitchToRegister} className="link-btn">
              Create an account →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}