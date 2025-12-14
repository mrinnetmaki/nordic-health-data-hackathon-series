import Link from "next/link";

export default function FinnishHealthDataHackathonHeader() {
  return (
    <header className="finland">
      <nav>
        <li className="home"><Link href="/finland/">Finnish Health Data Hackathon</Link></li>
        <li><Link href="/finland/#tracks">Tracks</Link></li>
        <li><Link href="/finland/#webinars">Webinars</Link></li>
        <li><Link href="/finland/#practicalities">Practicalities</Link></li>
        <li><Link href="/finland/#results">Results</Link></li>
        <li><Link href="/finland/#participate">Participate!</Link></li>
      </nav>
    </header>
  );
}
