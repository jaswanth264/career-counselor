// app/api/password-reset/request/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { prisma } from '@/lib/prisma';
import crypto from 'crypto';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { email } = await request.json();

  if (!email) {
    return new NextResponse('Email is required', { status: 400 });
  }

  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    // Return a generic success message to prevent user enumeration
    return NextResponse.json({ message: 'If an account with this email exists, a reset link has been sent.' });
  }

  const token = crypto.randomBytes(32).toString('hex');
  const expires = new Date(new Date().getTime() + 3600 * 1000); // Expires in 1 hour

  await prisma.passwordResetToken.create({
    data: {
      email,
      token,
      expires,
    },
  });

  const resetLink = `${process.env.NEXTAUTH_URL}/reset-password/${token}`;

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev', // You must verify your domain on Resend to use a custom from address
      to: email,
      subject: 'Reset Your Password',
      html: `<p>Click here to reset your password: <a href="${resetLink}">Reset Password</a></p>`,
    });
    return NextResponse.json({ message: 'If an account with this email exists, a reset link has been sent.' });
  } catch (error) {
    console.error('Failed to send email:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}