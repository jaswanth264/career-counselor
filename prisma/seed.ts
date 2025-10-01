// prisma/seed.ts
import { PrismaClient, QuestionType } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log(`Start seeding ...`);

  // Clear existing questions to prevent duplicates on re-seed
  await prisma.questionOption.deleteMany({});
  await prisma.question.deleteMany({});
  console.log('Cleared existing questions and options.');

  const questionsData = [
    {
      text: 'I enjoy solving complex problems and puzzles.',
      type: QuestionType.RATING_SCALE, // 1-5 scale
      options: [], // Rating scale questions don't have predefined options here
    },
    {
      text: 'I prefer working independently rather than in a team.',
      type: QuestionType.YES_NO,
      options: [], // Yes/No questions don't have predefined options here
    },
    {
      text: 'Which of these subjects interests you the most?',
      type: QuestionType.MULTIPLE_CHOICE,
      options: [
        { text: 'Mathematics' },
        { text: 'Science' },
        { text: 'Literature' },
        { text: 'Arts & Design' },
        { text: 'Social Studies' },
      ],
    },
    {
      text: 'I am comfortable presenting ideas to a large group of people.',
      type: QuestionType.RATING_SCALE,
      options: [],
    },
    {
      text: 'I am good at organizing and planning events.',
      type: QuestionType.YES_NO,
      options: [],
    },
    {
      text: 'What kind of work environment do you prefer?',
      type: QuestionType.MULTIPLE_CHOICE,
      options: [
        { text: 'Fast-paced and dynamic' },
        { text: 'Structured and predictable' },
        { text: 'Creative and collaborative' },
        { text: 'Quiet and focused' },
      ],
    },
    {
      text: 'I enjoy helping others and making a positive impact on society.',
      type: QuestionType.RATING_SCALE,
      options: [],
    },
    {
      text: 'I am fascinated by technology and how things work.',
      type: QuestionType.YES_NO,
      options: [],
    },
    {
      text: 'Which of these activities do you find most engaging?',
      type: QuestionType.MULTIPLE_CHOICE,
      options: [
        { text: 'Writing stories or articles' },
        { text: 'Building or fixing things' },
        { text: 'Analyzing data' },
        { text: 'Creating visual art' },
        { text: 'Interacting with diverse people' },
      ],
    },
    {
      text: 'I can easily adapt to new situations and challenges.',
      type: QuestionType.RATING_SCALE,
      options: [],
    },
    {
      text: 'I am detail-oriented and meticulous in my work.',
      type: QuestionType.YES_NO,
      options: [],
    },
    {
      text: 'What motivates you the most in a job?',
      type: QuestionType.MULTIPLE_CHOICE,
      options: [
        { text: 'High salary and financial stability' },
        { text: 'Personal growth and learning' },
        { text: 'Making a difference' },
        { text: 'Creative expression' },
        { text: 'Work-life balance' },
      ],
    },
    {
      text: 'I enjoy learning about different cultures and languages.',
      type: QuestionType.RATING_SCALE,
      options: [],
    },
    {
      text: 'I am comfortable with repetitive tasks if they are important.',
      type: QuestionType.YES_NO,
      options: [],
    },
    {
      text: 'Which of these best describes your approach to problem-solving?',
      type: QuestionType.MULTIPLE_CHOICE,
      options: [
        { text: 'Logical and analytical' },
        { text: 'Intuitive and creative' },
        { text: 'Practical and hands-on' },
        { text: 'Collaborative and communicative' },
      ],
    },
  ];

  for (const qData of questionsData) {
    const question = await prisma.question.create({
      data: {
        text: qData.text,
        type: qData.type,
        options: {
          create: qData.options.map((opt) => ({ text: opt.text })),
        },
      },
    });
    console.log(`Created question with id: ${question.id} - "${question.text}"`);
  }

  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });