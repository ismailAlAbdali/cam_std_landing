import './globals.css';
import type { Metadata } from 'next';
import { Noto_Kufi_Arabic } from 'next/font/google';
import { cn } from '@/lib/utils';

const kufi = Noto_Kufi_Arabic({ subsets: ['arabic'] });

export const metadata: Metadata = {
  title: 'Cam Studio - Professional Wedding Photography',
  description: 'Professional wedding photography and cinematography services with over 10 years of experience',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={cn(kufi.className, "bg-background text-foreground")}>{children}</body>
    </html>
  );
}