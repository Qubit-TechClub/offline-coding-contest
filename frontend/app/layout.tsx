

import './globals.css';
import Navbar from '../components/navbar';

export const metadata = {
  title: 'PWIOI - Coding Contest Platform',
  description: 'Offline Competitive Coding Contest Platform'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}

