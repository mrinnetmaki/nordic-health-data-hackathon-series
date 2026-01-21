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
      <section id="attendance">
        {/*
        <a href="#attendance"><h2>Attendance</h2></a>
        */}
        <p className="ingress">
          The hackathon attracted over 60 participants, out of whom 50 participated on site and 10
          remotely.
        </p>
        <p>
          All presentations and most workshop discussions taking place at the hackathon were
          recorded. See the <a
          href="https://youtube.com/playlist?list=PLWpB848PNB3XV3dOD0cl8bZNLf9FGJjZE&si=1bLKNDVisti4f6en"
          >YouTube Playlist</a>!
        </p>
      </section>
      <section id="key-results">
        <a href="#key-results"><h2>Key Results</h2></a>
        <ul>
          <li>
        <p>
          On the <Link href="/2026/finland/patient-access">Patient Access</Link> track, most
          progress was made in the challenge of the City of Helsinki, and on the topic focused on
          identity wallets and patient summaries.
        </p>
        <p>
          The challenge of City of Helsinki explored the potential and the benefits of opening
          continuous access to real-time data to patient-facing apps.
        </p>
        <p>
          The topic focused on identity wallets explored both how wallets can facilitate storing
          and sharing of patient data, and what use cases are shared between large-scale EHDS
          implementation projects.
        </p>

          </li>
          <li>
        <p>
          The <Link href="/2026/finland/care-plans">Care Plan and Clinical Reasoning</Link> track
          established a new HL7 FHIR implementation guide for care plans, and showed how clinical
          guidelines can be converted from text format to computable format using artificial
          intelligence.
        </p>

          </li>
        </ul>
      </section>
      <section id="detailed-results">
        <a href="#detailed-results"><h2>Detailed Results</h2></a>
        <p>
          See the separate pages for the results of the tracks:
        </p>
        <ul>
          <li><Link href="./results/access">Results of the Patient Access</Link></li>
          <li>
            <Link href="./results/careplans">
              Results of the Care Plans and Clinical Reasoning
            </Link>
          </li>
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
