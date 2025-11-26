import Link from "next/link";

export const metadata = {
  title: "Finnish Health Data Hackathons",
  description: "The Finnish edition of the Nordic Health Data Hackathon.",
};

export default function FinnishHealthDataHackathon() {
  return (
    <main>
      <h1>Finnish Health Data Hackathon</h1>
      <p>
        This hackathon takes place in Helsinki, Finland, connected to the <a
        href="https://radicalhealthfestival.messukeskus.com/">Radical Health Festival</a>.
      </p>
      <p>The focus is on patient access to data and on care plans.</p>
      <p>
        There will be preparatory webinars in 2025, and the physical event on January 19, 2026.
      </p>
      <section id="patient-access-to-data">
        <a href="#patient-access-to-data"><h2>Patient Access to Data</h2></a>
        <p>
          Several initiatives for patient access to health data in Finland and in the EU are
          present in the hackathon. There's plenty of opportunities to choose from on this track!
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
            entry-level instructions at Apotti's <a
            href="https://www.apotti.fi/en/the-apotti-ecosystem/">ecosystem</a> page!
          </p>
        </section>
        <section id="kanta">
          <h3>Kanta</h3>
          <p>
            HL7 Finland has published the <a href="https://hl7.fi/fhir/finnish-smart/">Finnish
            implementation guide for SMART App Launch</a>. A test environment and support is
            available for app vendors looking to integrate with for instance Apotti, the Epic
            installation in Finland.
          </p>
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
      </section>
      <section id="care-plans">
        <a href="#care-plans"><h2>Care Plans</h2></a>
        <p>
          Several companies are looking to integrate their care plan implementations through
          FHIR APIs. There are structured care plan definitions, and apps for patients and
          providers. One connecting theme is diabetes, other areas are being investigated.
        </p>
        <p>
          The track will also explore the potential of clinical decision support and computable
          care guidelines.
        </p>
      </section>
      <section id="participate-q1-2026-finland">
        <a href="#participate-q1-2026-finland"><h2>Participate</h2></a>
        <p>We will have implementations available at least from</p>
        <ul>
          <li><a href="https://www.duodecim.fi/english/">Duodecim</a></li>
          <li><a href="https://www.duodecim.fi/english/">Duodecim</a></li>
          <li><a href="https://fhir.epic.com/">Epic</a></li>
          <li><a href="https://www.gnomon.com.gr/">Gnomon Informatics</a></li>
          <li><a href="https://hippocraites.fi/">HippocrAItes</a></li>
          <li><a href="https://ihe-catalyst.net/">IHE Catalyst</a></li>
          <li><a href="https://www.kanta.fi/en/system-developers">Kela</a></li>
          <li><a href="https://otos.health/">Otos Health</a></li>
          <li><a href="https://sensotrend.com/">Sensotrend</a></li>
          {/*
          <li>Apotti</li>
          <li>City of Helsinki</li>
          <li>Evondos</li>
          <li>Forsante</li>
          <li>Google</li>
          <li>Microsoft</li>
          <li>Tietoevry</li>
          */}
        </ul>
        <p>The list of available implementations is updated up to the start of the event.</p>
        <p>Want to get involved?</p>
        <p>
          Contact Heidi Hakala, the FHIR Ambassador of HL7 Finland, at <a
          href="mailto:heidi.hakala@productivityleap.com">heidi.hakala@productivityleap.com</a>
        </p>
      </section>
    </main>
  );
}
