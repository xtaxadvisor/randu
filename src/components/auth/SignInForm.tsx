import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Mail, Lock, ArrowLeft } from 'lucide-react';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { useNotificationStore } from '../../lib/store';
import { AuthService } from '../../services/auth/authService';
import { validateEmail, validatePassword } from '../../utils/validation';

export function SignInForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { addNotification } = useNotificationStore();

  const from = location.state?.from?.pathname || '/dashboard';

  const validateForm = () => {
    if (!validateEmail(formData.email)) {
      addNotification('Please enter a valid email address', 'error');
      return false;
    }

    const passwordValidation = validatePassword(formData.password);
    if (!passwordValidation.isValid) {
      addNotification(passwordValidation.errors[0], 'error');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setLoading(true);
    try {
      const result = await AuthService.signIn(formData.email, formData.password);
      if (result) {
        addNotification('Successfully logged in', 'success');
        navigate(from, { replace: true });
      }
    } catch (error) {
      console.error('Sign in error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <Button
            variant="ghost"
            className="mb-4"
            onClick={() => navigate('/')}
            icon={ArrowLeft}
          >
            Back to Home
          </Button>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{' '}
            <Link to="/register" className="font-medium text-blue-600 hover:text-blue-500">
              create a new account
            </Link>
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <Input
            id="email"
            type="email"
            label="Email address"
            icon={Mail}
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            autoComplete="email"
            placeholder="Email address"
            disabled={loading}
          />

          <Input
            id="password"
            type="password"
            label="Password"
            icon={Lock}
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required
            autoComplete="current-password"
            placeholder="Password"
            disabled={loading}
          />

          <Button
            type="submit"
            variant="primary"
            className="w-full"
            disabled={loading}
          >
            {loading ? 'Signing in...' : 'Sign in'}
          </Button>
        </form>
      </div>
    </div>
  );
}