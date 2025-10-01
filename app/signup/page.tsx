'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios, { AxiosError } from 'axios';
import toast from 'react-hot-toast';
import Link from 'next/link';

export default function SignupPage() {
  const router = useRouter();
  const [data, setData] = useState({ name: '', email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);

  const registerUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const toastId = toast.loading('Creating account...');

    try {
      await axios.post('/api/register', data);
      toast.success('Account created! Please log in.', { id: toastId });
      router.push('/login');
    } catch (error) {
      const err = error as AxiosError;
      const errorMessage =
        (err.response?.data as string) || 'Something went wrong!';
      toast.error(errorMessage, { id: toastId });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-8 bg-white shadow-md rounded-lg">
        <h2 className="text-3xl font-bold text-center text-gray-900">
          Create an Account
        </h2>
        <form className="mt-8 space-y-6" onSubmit={registerUser}>
          <div>
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500"
              placeholder="Full Name"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500"
              placeholder="Email address"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500"
              placeholder="Password"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
          </div>
          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300"
            >
              {isLoading ? 'Signing Up...' : 'Sign Up'}
            </button>
          </div>
        </form>
        <p className="text-center text-sm">
          Already have an account?{' '}
          <Link
            href="/login"
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}
