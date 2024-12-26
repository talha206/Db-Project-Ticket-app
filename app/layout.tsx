import './styles/globals.css'; // Import global CSS or styles
import Header from './components/header/header'; // Adjust the path based on your folder structure
import React from 'react';

export const metadata = {
  title: 'My Next.js App',
  description: 'A modern Next.js application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="pb-10">{children}</main>
        <footer className="p-4 bg-gray-200 text-center">
          <p>&copy; 2024 My Next.js App</p>
        </footer>
      </body>
    </html>
  );
}
