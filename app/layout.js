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
            <li className="home"><a href="./">Home</a></li>
            <li><a href="./#background">Background</a></li>
            <li><a href="./#schedule">Schedule</a></li>
            <li><a href="./#participate">Participate</a></li>
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
