'use client'

import { usePathname } from 'next/navigation';
import Link from 'next/link';

import './globals.css';

export default function RootLayout({ children }) {
  const pathname = usePathname();
  console.log({ pathname });
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/hackathon/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/hackathon/favicon.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/hackathon/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Hackathon" />
        <link rel="manifest" href="/hackathon/site.webmanifest" />
      </head>
      <body className={pathname === '/2026' ?'' : 'finland' }>
        {children}
        <footer>
          <nav>
            <li className="home"><Link href="/">Nordic Health Data Hackathons</Link></li>
            <li>&copy; 2025+ <a href="https://hl7.fi/">HL7 Finland</a></li>
            <li>
              <a href="https://github.com/mrinnetmaki/nordic-health-data-hackathon-series"
              >Source</a>
            </li>
          </nav>
        </footer>
      </body>
    </html>
  );
}
