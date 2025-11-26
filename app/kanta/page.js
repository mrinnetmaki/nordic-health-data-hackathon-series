export const metadata = {
  title: "Kanta track on the Finnish Health Data Hackathons",
  description: "The Kanta track on the Finnish edition of the Nordic Health Data Hackathon.",
};

export default function Kanta() {
  return (
    <main>
      <h1>Kanta</h1>
      <section id="hrp">
        <h2>Patient Data Repository</h2>
        <p>
          <a href="https://www.kanta.fi/en/professionals/patient-data-repository">Kanta Patient
          Data Repository</a> is a national service, storing data from primary and secondary
          care, from both public and private health care providers. Kanta has opened a new <a
          href="https://www.kanta.fi/en/system-developers/hyvinvointisovellusten-rajapinta">API
          for patient-facing apps</a>. There is a test environment, and support available for
          app vendors looking to integrate with the service.
        </p>
      </section>
      <section id="phr">
        <h2>Personal Health Record (PHR)</h2>
        <p>
          The <a href="https://www.kanta.fi/en/system-developers/kanta-phr">Kanta PHR</a> platform
          is a service for storing and exchanging health and wellness data produced and governed by
          the individual.
        </p>
        <p>
          Developer support for Kanta PHR is being ramped down, as the feature will be undergoing
          major changes in the future, to be aligned with the new <a
          href="https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=OJ:L_202500327#art_5"
          >Right of natural persons to insert information in their own EHR</a> set by the European
          Health Data Space (EHDS) regulation.
        </p>
        <p>
          However, the documentation and the <a
          href="https://simplifier.net/guide/finnishphrimplementationguidestu5/finnishphrimplementationguidehomepage?version=current"
          >implementation guides</a> are available, and it is possible to learn from them, discuss
          them, and even set up a development server to validate your implementation against the
          profiles.
        </p>
        {/*
        <p>
          If you want to integrate with the Kanta PHR, you should talk with Kela first. In theory
          this is still possible in the test environment. You need to be prepared to apply and pay
          for a client-side SSL certificate issued by DVV. The process is not straightforward and
          will take several days.
        </p>
        */}
      </section>
    </main>
  );
}
