'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import hero from '../public/hero.png';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function HomePage() {
  const features = [
    {
      image:
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80',
      title: 'In-Depth Career Assessment',
      description:
        'Answer thoughtfully crafted questions to reveal career paths that match your personality, strengths, and goals.',
    },
    {
      image:
        'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=400&q=80',
      title: 'Step-by-Step Study Plan',
      description:
        'We’ll create a learning roadmap with courses, timelines, and resources customized for your path.',
    },
    {
      image:
        'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80',
      title: 'Detailed Career Report',
      description:
        'Unlock a multi-page report highlighting your ideal careers. Free users see highlights, premium users get full depth.',
    },
    {
      image:
        'https://images.unsplash.com/photo-1556761175-129418cb2dfe?auto=format&fit=crop&w=400&q=80',
      title: 'Smart Dashboard',
      description:
        'Review past tests, revisit your results, and manage your profile all in one clean, accessible dashboard.',
    },
  ];

  return (
    <>
      {/* 🎯 HERO SECTION */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 flex items-center">
        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900 dark:text-white">
              Unlock Your Future.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-purple-400">
                Discover Your Path.
              </span>
            </h1>
            <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 max-w-md">
              Take our science-backed test and get personalized insights into
              your ideal career path.
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="mt-8 inline-block"
            >
              <Link
                href="/test"
                className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full shadow-lg hover:shadow-2xl transition-transform duration-300"
              >
                Start Career Test
              </Link>
            </motion.div>
          </motion.div>

          {/* 3D Floating Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotateY: -15 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1 }}
            className="hidden md:flex justify-center"
          >
            <div className="relative group perspective-1000">
              <motion.div
                whileHover={{ rotateY: 10, rotateX: 5 }}
                transition={{ type: 'spring', stiffness: 120 }}
                className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800"
              >
                <Image
                  src={hero}
                  alt="Career guidance illustration"
                  width={600}
                  height={500}
                  className="object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 🚀 FEATURES SECTION */}
      <section
        id="features"
        className="py-24 bg-gradient-to-t from-indigo-50 to-white dark:from-gray-950 dark:to-gray-900"
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Core Tools to Guide Your Journey
          </motion.h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto">
            Empowering students and graduates with personalized guidance and
            actionable insights.
          </p>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, rotateY: 3 }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="group bg-white/80 dark:bg-gray-800/70 backdrop-blur-xl rounded-2xl shadow-lg overflow-hidden border border-gray-200/30 dark:border-gray-700/40 hover:shadow-2xl transform transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={feat.image}
                    alt={feat.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 text-lg font-semibold text-white">
                    {feat.title}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 💡 ABOUT SECTION */}
      <section
        id="about"
        className="py-24 bg-gradient-to-b from-white to-indigo-50 dark:from-gray-900 dark:to-gray-950"
      >
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6"
          >
            Why Choose Our Career Guidance Platform?
          </motion.h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            We combine data-driven insights, expert-backed analysis, and
            user-friendly design to help you make confident career decisions.
          </p>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Built for Students',
                desc: 'Adapts to your academic stage with tailored insights for 10th, 12th, and graduates.',
              },
              {
                title: 'Clear Pathways',
                desc: 'No fluff — just structured steps and actionable recommendations.',
              },
              {
                title: 'Backed by Research',
                desc: 'Grounded in modern psychology and real-world data for trustworthy results.',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -6, scale: 1.02 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="bg-white/80 dark:bg-gray-800/70 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all"
              >
                <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12">
            <Link
              href="/test"
              className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-10 rounded-full shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105"
            >
              Take the Career Test Now
            </Link>
          </div>
        </div>
      </section>

      {/* ❓ FAQ SECTION */}
      <section id="faq" className="bg-gray-50 dark:bg-gray-900 py-24 scroll-mt-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Have questions? We&apos;ve got answers.
            </p>
          </div>

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Who is this test for?</AccordionTrigger>
              <AccordionContent>
                It’s designed for students and young professionals exploring
                career directions and seeking clarity.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How long does it take?</AccordionTrigger>
              <AccordionContent>
                The test includes around 50 questions and typically takes
                15–20 minutes to complete.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is the free report really free?</AccordionTrigger>
              <AccordionContent>
                Absolutely! The free report covers your core traits and top
                matches. Upgrade for deeper insights.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                How are the recommendations generated?
              </AccordionTrigger>
              <AccordionContent>
                Based on advanced psychometric models that match your traits
                with real-world career data.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </>
  );
}
