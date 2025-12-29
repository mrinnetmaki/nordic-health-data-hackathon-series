'use client'

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Body({ children }) {
  const pathname = usePathname();
  return (
    <body className={pathname === '/2026' ?'' : 'finland' }>
      {children}
      <footer>
        <nav>
          <li className="home"><Link href="/">Nordic Health Data Hackathons</Link></li>
          <li>&copy; 2025+ <a href="https://hl7.fi/">HL7 Finland</a></li>
          <li>
            <a
              href="https://github.com/mrinnetmaki/nordic-health-data-hackathon-series"
            >
              Source
            </a>
          </li>
        </nav>
      </footer>
    </body>
  );
}
