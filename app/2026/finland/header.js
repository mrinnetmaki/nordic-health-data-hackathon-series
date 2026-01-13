import Link from "next/link";

export const metadata = {
  title: {
    default: 'Finnish Health Data Hackathon',
  },
  description: 'The Finnish edition of the Nordic Health Data Hackathon.',
};

export default function FinnishHealthDataHackathonHeader() {
  return (
    <header className="finland">
      <nav>
        <li className="home"><Link href="/2026/finland/">Finnish Health Data Hackathon</Link></li>
        <li><Link href="/2026/finland/#tracks">Tracks</Link></li>
        <li><Link href="/2026/finland/#webinars">Webinars</Link></li>
        <li><Link href="/2026/finland/#practicalities">Practicalities</Link></li>
        <li><Link href="/2026/finland/#schedule">Schedule</Link></li>
        <li><Link href="/2026/finland/#results">Results</Link></li>
        <li><Link href="/2026/finland/#participate">Participate!</Link></li>
      </nav>
    </header>
  );
}
