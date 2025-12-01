import Link from "next/link";

export const metadata = {
  title: "Patient Access Track of the Finnish Health Data Hackathons",
  description: "The description of the track focused on patient access, at the Finnish edition of the Nordic Health Data Hackathon.",
};

export default function PatientAccessTrack() {
  return (
    <main>
      <h1>Patient Access Track</h1>
      <p>
        Several initiatives for patient access to health data in Finland and in the EU are
        present in the hackathon. There are plenty of opportunities to choose from on this track!
      </p>
      <section id="smart">
        <h3>Finnish SMART</h3>
        <p>
          HL7 Finland has published the <a href="https://hl7.fi/fhir/finnish-smart/">Finnish
          implementation guide for SMART App Launch</a>. The affiliate is looking for feedback on
          the present version of the guide, and ideas for future development.
        </p>
      </section>
      <section id="apotti">
        <h3>Apotti</h3>
        <p>
          Apotti is an Epic installation in Finland. You can connect to their rich APIs. See
          entry-level instructions at Apotti&apos;s <a
          href="https://www.apotti.fi/en/the-apotti-ecosystem/">ecosystem</a> page!
        </p>
      </section>
      <section id="kanta">
        <h3>Kanta</h3>
        <p>
          <a href="https://www.kanta.fi/en/professionals/patient-data-repository">Kanta Patient
          Data Repository</a> is a national service, storing data from primary and secondary
          care, from both public and private health care providers. Kanta has opened a new <a
          href="https://www.kanta.fi/en/system-developers/hyvinvointisovellusten-rajapinta">API
          for patient-facing apps</a>. Kanta also has a Personal Health Record part.
        </p>
        <p>Read more details on the <Link href="/kanta">Kanta</Link> page!</p>
      </section>
      <section id="xshare">
        <h3>xShare</h3>
        <p>
          <a href="https://xshare-project.eu/">xShare</a> is a three-year Horizon Europe project
          envisioning everyone sharing their health data in European Electronic Health Record
          Exchange Format (EEHRxF), with a click-of-a-button. See the <a
          href="https://xshare-project.eu/news/xshare-open-call-2025-call-for-early-adopters-of-the-xshare-yellow-button/"
          >Open Call 2025</a> for early adopters of the xShare Yellow Button, and information
          on the <a href="https://xshare-project.eu/xshare-industry-label/">xShare Industry
          Label</a>.
        </p>
      </section>
    </main >
  );
}
