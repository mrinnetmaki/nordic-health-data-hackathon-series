'use client'

import { usePathname } from 'next/navigation';
import Link from 'next/link';

import './globals.css';

export default function RootLayout({ children }) {
  const pathname = usePathname();
  console.log({ pathname });
  return (
    <html lang="en">
      <body className={pathname === '/' ?'' : 'finland' }>
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
