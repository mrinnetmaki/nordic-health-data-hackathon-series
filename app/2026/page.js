import Link from "next/link";

export const metadata = {
  title: "Nordic Health Data Hackathons",
  description: "A series of health data hackathons in the Nordics",
};

function HomeHeader() {
  return (
    <header className="nordics">
      <nav>
        <li className="home"><Link href="/2026">Home</Link></li>
        <li><Link href="/2026#background">Background</Link></li>
        <li><Link href="/2026#events">Events</Link></li>
        <li><Link href="/2026#organizers">Organizers</Link></li>
      </nav>
    </header>
  );
}

function Home() {
  return (
    <main className="nordics">
      <h1>Nordic Health Data <span className="emphasis">Hackathons</span></h1>
      <picture>
        <img
          className="banner"
          src={`${process.env.NEXT_PUBLIC_BASE_PATH}/health-data-hackathon-banner.png`}
          alt=""
        />
      </picture>
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
      <section id="events">
        <a href="#events"><h2>Sched&shy;ule</h2></a>
        <article id="finland" className="highlight">
          <a href="#finland"><h3>Finland, Radical Health Festival</h3></a>
          <p>
            The hackathon on the first quarter takes place in Helsinki, Finland, connected to both
            the <a href="https://radicalhealthfestival.messukeskus.com/">Radical Health
            Festival</a> and the <a href="https://laakaripaivat.messukeskus.com/en/">Finnish
            Medical Convention</a> (<a href="https://laakaripaivat.fi/"><i lang="fi"
            >Lääkäripäivät</i></a>), and synchronized with the <a
            href="https://www.hl7.fi/kokoukset-ja-tapahtumat/hl7-finland-30th-anniversary-symposium/"
            >30th Anniversary Symposium of HL7 Finland</a>.
          </p>
          <p>
            The focus is on patient access to data and on care plans and computable care
            guidelines.
          </p>
          <p>See the <Link href="/2026/finland">event page</Link> for detailed information!</p>
        </article>
        <article id="sweden">
          <a href="#sweden"><h3>Sweden, Vitalis</h3></a>
          <p>
            On second quarter the hackathon takes place in Gothenburg, Sweden, connected to the <a
            href="https://vitalis.nu/">Vitalis</a> conference.
          </p>
          <p>The focus is on national base profiles and on terminology.</p>
          {/*
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
          */}
        </article>
        <article id="denmark">
          <a href="#denmark"><h3>Denmark</h3></a>
          <p>
            On the third quarter we go to Denmark. The details of the hackathon are still to be
            determined.
          </p>
          <p>
            Proposed focus areas are patient summaries, and perhaps other EHDS priority categories.
          </p>
          <p>
            The hackathon may be connected to the <a
            href="https://2025.e-sundhedsobservatoriet.dk/">Danish E-Health Observatory</a> event.
          </p>
        </article>
        <article id="norway">
          <a href="#norway"><h3>Norway, EHiN</h3></a>
          <p>
            On fourth quarter we return to Norway, where the hackathon will be organised as a side
            event of the <a href="https://ehin.no/">EHiN conference</a>.
          </p>
          <p>
            See also the details and results of the first ever event of the hackathon series that
            took place as an official side event of the <a href="https://ehin.no/2025/">EHiN
            conference 2025</a> on the separate web site for <a
            href="https://hl7norway.github.io/FHIR-hackathon-2025/currentbuild/index.html"
            >Norwegian FHIR Hackathon 2025</a>!
          </p>
        </article>
      </section>
      <section id="organizers">
        <a href="#organizers"><h2>Organizers</h2></a>
        <p>The Nordic Health Data Hackathon series is organized by:</p>
        <ul>
          <li>
            <a href="https://hl7.dk/">
              <picture>
                <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/hl7-denmark.png`} alt="HL7 Denmark" />
              </picture>
            </a>
          </li>
          <li>
            <a href="https://www.hl7.fi/">
            <picture className="large">
              <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/hl7-finland.svg`} alt="HL7 Finland" />
            </picture>
          </a>
          </li>
          <li>
            <a href="https://www.hl7.no/">
            <picture>
              <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/hl7-norway.png`} alt="HL7 Norway" />
            </picture>
          </a>
          </li>
          <li>
            <a href="https://hl7.se/">
            <picture>
              <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/hl7-sweden.png`} alt="HL7 Sweden" />
            </picture>
          </a>
          </li>
        </ul>
        <p>
          and made possible by dozens of volunteers!
        </p>        
      </section>
    </main>
  );
}

export default function HomePage() {
  return (
    <>
      <HomeHeader />
      <Home />
    </>
  );
}