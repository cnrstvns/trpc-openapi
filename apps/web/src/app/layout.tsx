'use client';

import Navbar from '../components/Navbar';
import { ClientProvider } from '../helpers/trpc';
import '../styles/globals.css';

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <ClientProvider>
      <html lang="en">
        <head>
          <title>TRPC OpenAPI Demo</title>
        </head>
        <body className="text-white">
          <Navbar />
          <div className="p-10">{children}</div>
        </body>
      </html>
    </ClientProvider>
  );
}
