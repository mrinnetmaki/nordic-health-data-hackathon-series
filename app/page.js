export default function Home() {
  return (
    <main>
      <h1>Nordic Health Data <span className="emphasis">Hackathons</span></h1>
      <img className="banner" src="/health-data-hackathon-banner.png" />
      <section id="background">
        <a href="#background"><h2>Back&shy;ground</h2></a>
        <p>
          Hackathons are a great way to spread information on what&apos;s possible with modern
          technologies, as well as to validate the state and implementability of a technical
          specification or capabilities of a platform.
        </p>
        <p>
          Nordic Innovation organized a <a
          href="https://www.nordicinnovation.org/nordichealthhackathons">series of health data
          hackathons</a> in 2019 and 2020. Stockholm University, Karolinska Institutet, supported
          by Health Data Sweden, organized the <a href="https://nordichackathon.blogs.dsv.su.se/"
          >Nordic Hackathon</a> in 2024-2025.
        </p>
        <p>
          Several partners have joined forces to build on this tradition and organize a series of
          health data hackathons in the Nordics. The hackathons are organized quarterly, and in
          connection with relevant industry events.
        </p>
      </section>
      <section id="schedule">
        <a href="#schedule"><h2>Sched&shy;ule</h2></a>
        <article id="q4-2025-norway">
          <a href="#q4-2025-norway"><h3>Q4/2025 Norway, EHiN</h3></a>
          <p>
            The first hackathon starts with virtual pre-meetings on <time dateTime="2025-10-27"
            >October 27</time> and <time dateTime="2025-11-03">November 3</time> at <time
            dateTime="09:00+01:00">9-11 CET</time>. The physical meeting takes place as an official
            side-event of the <a href="https://ehin.no/">EHiN conference</a> in <a
            href="https://xmeetingpoint.no/en/">X Meeting Point</a> in Hellerudsletta, just outside
            Oslo.
          </p>
          <p>The focus is on:</p>
          <ul>
            <li>
              remote monitoring, observations and vital signs, integration of HL7 FHIR and OpenEHR
            </li>
            <li>terminology and the use of the Nordic FHIR terminology server</li>
            <li>use of HL7 FHIR and converting existing APIs into FHIR</li>
            <li>authoring and publishing FHIR implementation guides.</li>
          </ul>
          <p>
            See the separate web site for <a
            href="https://hl7norway.github.io/FHIR-hackathon-2025/currentbuild/index.html"
            >Norwegian FHIR Hackathon</a> 2025 for detailed information!
          </p>
        </article>
        <article id="q1-2026-finland">
          <a href="#q1-2026-finland"><h3>Q1/2026 Finland, Radical Health Festival</h3></a>
          <p>
            The second hackathon takes place in Helsinki, Finland, connected to the <a
            href="https://radicalhealthfestival.messukeskus.com/">Radical Health Festival</a>.
          </p>
          <p>The focus is on patient access to data and on care plans.</p>
          <p>
            There will be preparatory webinars in 2025, and the physical event on January 19, 2026.
          </p>
          <section id="patient-access-to-data">
            <a href="#patient-access-to-data"><h4>Patient Access to Data</h4></a>
            <p>
              Several initiatives for patient access to health data in Finland and in the EU are
              present in the hackathon.
            </p>
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
              for patient-facing apps</a>. There is a test environment, and support available for
              app vendors looking to integrate with the service.
            </p>
            <p>
              The <a href="https://www.kanta.fi/en/system-developers/kanta-phr">Kanta PHR</a
              > platform is a service for storing and exchanging health and wellness data produced
              and governed by the individual. There are sandbox and test environments available, as
              well as support for app vendors looking to integrate with the platform.
            </p>
            <p>
              <a href="https://xshare-project.eu/">xShare</a> is a three-year Horizon Europe
              project envisioning everyone sharing their health data in European Electronic Health
              Record Exchange Format (EEHRxF), with a click-of-a-button. See the <a
              href="https://xshare-project.eu/news/xshare-open-call-2025-call-for-early-adopters-of-the-xshare-yellow-button/"
              >Open Call 2025</a> for early adopters of the xShare Yellow Button, and information
              on the <a href="https://xshare-project.eu/xshare-industry-label/">xShare Industry
              Label</a>.
            </p>
          </section>
          <section id="care-plans">
            <a href="#care-plans"><h4>Care Plans</h4></a>
            <p>
              Several companies are looking to integrate their care plan implementations through
              FHIR APIs. There are structured care plan definitions, and apps for patients and
              providers. One connecting theme is diabetes, other areas are being investigated.
            </p>
          </section>
          <section id="participate-q1-2026-finland">
            <a href="#participate-q1-2026-finland"><h4>Participate</h4></a>
            <p>See the <a href="./q1-2026-finland">event page</a> for detailed information!</p>
          </section>
        </article>
        <article id="q2-2026-sweden">
          <a href="#q2-2026-sweden"><h3>Q2/2026 Sweden, Vitalis</h3></a>
          <p>
            The third hackathon takes place in Gothenburg, Sweden, connected to the
            <a href="https://vitalis.nu/">Vitalis</a> conference.
          </p>
          <p>The focus is on national base profiles and on terminology.</p>
          <section id="base-profiles">
            <a href="#base-profiles"><h4>Base Profiles</h4></a>
            <p>
              Denmark, Finland, Norway, and Sweden have published their national FHIR base profile
              specifications. There is some overlap in the specifications and partly diverging
              approaches that could be harmonized.
            </p>
            <p>
              There is a need to ensure national base profile specifications are aligned with the
              FHIR implementation guides published by HL7 Europe and IHE Europe for the
              implementation of the European Health Data Space EHDS.
            </p>
          </section>
          <section id="terminology">
            <a href="#terminology"><h4>Terminology</h4></a>
            <p>The terminology track will continue from the Norwegian event.</p>
          </section>
        </article>
        <article id="q3-2026-denmark">
          <a href="#q3-2026-denmark"><h3>Q3/2026 Denmark</h3></a>
          <p>The details of the fourth hackathon are still to be determined.</p>
          <p>
            Proposed focus areas are patient summaries, and perhaps other EHDS priority categories.
          </p>
          <p>
            The hackathon may be connected to the <a
            href="https://2025.e-sundhedsobservatoriet.dk/">Danish E-Health Observatory</a> event.
          </p>
        </article>
      </section>
      <section id="participate">
        <a href="#participate"><h2>Par&shy;tic&shy;i&shy;pate</h2></a>
        <p>All hackathon events are open for all and free to join!</p>
        <p>See the event pages for additional information.</p>
      </section>
    </main>
  );
}
