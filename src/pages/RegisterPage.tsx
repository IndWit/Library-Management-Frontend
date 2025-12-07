import { useState } from 'react';
import { UserPlus, ArrowRight } from 'lucide-react';
import '../App.css';

interface RegisterPageProps {
  onRegister: (u: string, p: string) => void;
  onSwitchToLogin: () => void;
}

export default function RegisterPage({ onRegister, onSwitchToLogin }: RegisterPageProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    if (username && password) onRegister(username, password);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleRegister();
  };

  return (
    <div className="center-screen">
      <div className="glass-card">
        
        {/* Header */}
        <div className="auth-header">
          <UserPlus size={64} style={{ color: '#2eb8b6ff', margin: '0 auto 20px' }} />
          <h1 className="auth-title">Create Account</h1>
          <p className="auth-subtitle">Join the library system</p>
        </div>

        {/* Form */}
        <div>
          <input
            type="text"
            placeholder="Choose Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <input
            type="password"
            placeholder="Choose Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            onKeyPress={handleKeyPress}
          />

          <button className="btn btn-primary btn-full" onClick={handleRegister}>
            Sign Up <ArrowRight size={18} />
          </button>

          {/* Footer Link */}
          <div className="auth-footer">
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: 8 }}>
              Already have an account?
            </p>
            <button onClick={onSwitchToLogin} className="link-btn">
              Login here →
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}