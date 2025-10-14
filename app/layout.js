import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Nordic Health Data Hackathons",
  description: "A series of health data hackathons in the Nordics",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <li className="home"><Link href="/">Home</Link></li>
            <li><Link href="/#background">Background</Link></li>
            <li><Link href="/#schedule">Schedule</Link></li>
            <li><Link href="/#participate">Participate</Link></li>
          </nav>
        </header>
        {children}
        <footer>
          <nav>
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
