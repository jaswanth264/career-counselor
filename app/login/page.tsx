'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();
  const [data, setData] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);

  const loginUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const toastId = toast.loading('Signing in...');

    try {
      const callback = await signIn('credentials', {
        ...data,
        redirect: false,
      });

      if (callback?.ok) {
        toast.success('Logged in successfully!', { id: toastId });
        router.push('/dashboard');
      } else {
        toast.error(callback?.error || 'Invalid credentials', { id: toastId });
      }
    } catch {
      toast.error('An unexpected error occurred.', { id: toastId });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-8 bg-white shadow-md rounded-lg">
        <h2 className="text-3xl font-bold text-center text-gray-900">
          Log in to your account
        </h2>
        <form className="mt-8 space-y-6" onSubmit={loginUser}>
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
              {isLoading ? 'Signing In...' : 'Sign In'}
            </button>
          </div>
        </form>

        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Or continue with</span>
          </div>
        </div>

        <div>
          <button
            onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
            className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            Sign in with Google
          </button>
        </div>

        <p className="text-center text-sm">
          Don&apos;t have an account?{' '}
          <Link
            href="/signup"
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
