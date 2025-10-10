// app/api/password-reset/reset/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcrypt';

export async function POST(request: Request) {
  const { token, password } = await request.json();

  if (!token || !password) {
    return new NextResponse('Token and password are required', { status: 400 });
  }

  const resetToken = await prisma.passwordResetToken.findUnique({
    where: { token },
  });

  if (!resetToken || new Date() > resetToken.expires) {
    return new NextResponse('Invalid or expired token', { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await prisma.user.update({
    where: { email: resetToken.email },
    data: { hashedPassword },
  });

  // Delete the token after use
  await prisma.passwordResetToken.delete({ where: { id: resetToken.id } });

  return NextResponse.json({ message: 'Password has been reset successfully.' });
}