'use client';

import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import Link from 'next/link';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const toastId = toast.loading('Sending reset link...');

    try {
      const response = await axios.post('/api/password-reset/request', { email });
      toast.success(response.data.message, { id: toastId });
    } catch {
      toast.error('An unexpected error occurred.', { id: toastId });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-8 bg-white shadow-md rounded-lg">
        <h2 className="text-3xl font-bold text-center text-gray-900">Forgot Password</h2>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email-address" className="sr-only">Email address</label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300"
            >
              {isLoading ? 'Sending...' : 'Send Reset Link'}
            </button>
          </div>
        </form>
        <p className="text-center text-sm">
          Remember your password?{' '}
          <Link href="/login" className="font-medium text-blue-600 hover:text-blue-500">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}
