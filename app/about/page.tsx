// app/about/page.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 min-h-screen">
      <section className="max-w-6xl mx-auto px-4 py-20">
        {/* Hero Section */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">About Career Counselor</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Guiding students and graduates toward the career path that fits them best.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mt-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">🎯 Our Mission</h2>
            <p className="text-gray-700 dark:text-gray-300">
              We aim to empower every student with personalized, data-driven career guidance. No more guesswork —
              just clear, actionable steps based on your strengths, interests, and goals.
            </p>
          </div>
          <div>
            <Image
              src="/mission.jpg" // Ensure this image is in /public
              alt="Mission illustration"
              width={500}
              height={350}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Why We Exist */}
        <div className="mt-20">
          <h2 className="text-2xl font-semibold mb-4">🌱 Why We Built This</h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-3xl">
            Career decisions are hard — and often made without proper guidance. We&rsquo;ve built this platform to make expert
            guidance accessible to everyone, using modern technology, AI-powered insights, and a human touch.
          </p>
        </div>

        {/* How It Works */}
        <div className="mt-20">
          <h2 className="text-2xl font-semibold mb-4">🔍 How Career Counselor Works</h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li>Answer 50 carefully designed questions</li>
            <li>Get an AI-generated career report</li>
            <li>Understand your strengths, areas to improve, and ideal career matches</li>
            <li>Get recommendations for courses, skills, and colleges</li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="mt-24 text-center">
          <h3 className="text-xl font-semibold mb-4">Ready to take the next step?</h3>
          <Link
            href="/test"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md shadow-md transition"
          >
            Start Your Career Test
          </Link>
        </div>
      </section>
    </main>
  );
}
