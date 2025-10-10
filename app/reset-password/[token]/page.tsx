'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import axios from 'axios'; // No need to import AxiosError anymore
import toast from 'react-hot-toast';

export default function ResetPasswordPage() {
  const router = useRouter();
  const params = useParams();
  const { token } = params;

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error('Passwords do not match.');
      return;
    }
    setIsLoading(true);
    const toastId = toast.loading('Resetting password...');

    try {
      await axios.post('/api/password-reset/reset', { token, password });
      toast.success('Password reset successfully! Please log in.', { id: toastId });
      router.push('/login');
    } catch (error: unknown) {  // Change to 'unknown' here
      if (axios.isAxiosError(error)) { // Check if the error is an AxiosError
        toast.error(error.response?.data || 'Failed to reset password.', { id: toastId });
      } else {
        toast.error('An unexpected error occurred.', { id: toastId });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-8 bg-white shadow-md rounded-lg">
        <h2 className="text-3xl font-bold text-center text-gray-900">Reset Your Password</h2>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="password">New Password</label>
            <input
              id="password"
              type="password"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirm New Password</label>
            <input
              id="confirmPassword"
              type="password"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-2 px-4 border border-transparent rounded-md text-white bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300"
            >
              {isLoading ? 'Resetting...' : 'Reset Password'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
