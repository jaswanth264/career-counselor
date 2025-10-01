// lib/prisma.ts
import { PrismaClient } from '@prisma/client';

declare global {
  // Prevent multiple instances of Prisma Client in development
  var prisma: PrismaClient | undefined;
}

export const prisma =
  global.prisma ||
  new PrismaClient({
    log: ['query'], // Optional: logs all DB queries to the terminal
  });

if (process.env.NODE_ENV !== 'production') global.prisma = prisma;
