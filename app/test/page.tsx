// app/test/page.tsx
import { prisma } from '@/lib/prisma';
import { User } from '@prisma/client'; // ✅ Import the User type from Prisma

export default async function TestPage() {
  let users: Pick<User, 'id' | 'name' | 'email' | 'createdAt' | 'standard'>[] = [];
  let error: string | null = null;

  try {
    users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
        standard: true,
      },
    });
  } catch (e) {
    console.error('Failed to fetch users:', e);
    error = e instanceof Error ? e.message : 'Unknown error';
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold mb-8">Prisma Client Test Page</h1>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
          <strong className="font-bold">Error:</strong>
          <span className="block sm:inline ml-2">{error}</span>
          <p className="mt-2 text-sm">
            Check your .env.local DATABASE_URL and ensure your Supabase database is running.
          </p>
        </div>
      )}

      <div className="w-full max-w-2xl">
        {users.length > 0 ? (
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Fetched Users from Database:
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Showing user data from your Supabase PostgreSQL.
              </p>
            </div>
            <div className="border-t border-gray-200">
              <dl>
                {users.map((user, index) => (
                  <div
                    key={user.id}
                    className={`px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 ${
                      index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                    }`}
                  >
                    <dt className="text-sm font-medium text-gray-500">
                      {user.name || 'Unnamed User'}
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                      Email: {user.email || 'N/A'} <br />
                      Standard: {user.standard || 'N/A'} <br />
                      Created: {new Date(user.createdAt).toLocaleDateString()}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        ) : (
          <p className="text-gray-600 text-center">
            No users found in the database. Add some via Supabase Table Editor!
          </p>
        )}
      </div>
    </main>
  );
}
