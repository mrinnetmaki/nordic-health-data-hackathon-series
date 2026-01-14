import Link from 'next/link';
import FinnishHealthDataHackathonHeader from '../header';

export const metadata = {
  title: 'Results of the Finnish Health Data Hackathon',
  description: 'The key results from the hackathon.',
};

function Results() {
  return (
    <main className="results">
      <h1>Results</h1>
      <section>
        <p>
          See the separate pages for the tracks:
        </p>
        <ul>
          <li><Link href="./results/access">Patient Access</Link></li>
          <li><Link href="./results/careplans">Care Plans and Clinical Reasoning</Link></li>
        </ul>
        <p>
          This page will be updated for some time after the hackathon event, to collect all
          relevant results.
        </p>
      </section>
      <picture>
        <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/hl7-finland.svg`} alt="HL7 Finland" />
      </picture>
    </main >
  );
}

export default function ResultsPage() {
  return (
    <>
      <FinnishHealthDataHackathonHeader />
      <Results />
    </>
  );
}
