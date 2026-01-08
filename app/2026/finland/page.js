import Link from "next/link";

import FinnishHealthDataHackathonHeader from "./header";

function FinnishHealthDataHackathon() {
  return (
    <main id="fi" className="finland">
      <h1>Finnish Health Data Hackathon</h1>
      <section className="ingress">
        <p>
          <span>
            Organized by
          </span>
          <a href="https://www.hl7.fi/">
            <picture className="large">
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_PATH}/hl7-finland.svg`} alt="HL7 Finland"
              />
            </picture>
          </a>
          <span>
            in collaboration with
          </span>
          <a href="https://hl7.dk/">
            <picture>
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_PATH}/hl7-denmark.png`} alt="HL7 Denmark"
              />
            </picture>
          </a>
          <a href="https://www.hl7.no/">
            <picture>
              <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/hl7-norway.png`} alt="HL7 Norway" />
            </picture>
          </a>
          <a href="https://hl7.se/">
            <picture>
              <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/hl7-sweden.png`} alt="HL7 Sweden" />
            </picture>
          </a>
          <span>
            supported by
          </span>
          <a href="https://www.hel.fi/">
            <picture>
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_PATH}/helsinki.svg`}
                alt="City of Helsinki"
              />
            </picture>
          </a>
          <a href="https://ihe-catalyst.net/">
            <picture>
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_PATH}/ihe-catalyst.jpg`}
                alt="IHE Catalyst"
              />
            </picture>
          </a>
          <a href="https://sensotrend.com/">
            <picture>
              <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/sensotrend.svg`} alt="Sensotrend" />
            </picture>
          </a>
          <span>
          and made possible by dozens of volunteers!
          </span>
        </p>
      </section>
      <p>
        This hackathon takes place in Helsinki, Finland, connected to both the <a
        href="https://radicalhealthfestival.messukeskus.com/">Radical Health Festival</a> and
        the <a
        href="https://www.hl7.fi/kokoukset-ja-tapahtumat/hl7-finland-30th-anniversary-symposium/"
        >30th Anniversary Symposium of HL7 Finland</a>.
      </p>
      <p>The focus of the hackathon is on patient access to data and on care plans.</p>
      <p>
        Preparatory webinars are organized in December 2025, and the physical event takes place on
        January 19-21, 2026.
      </p>
      <section id="tracks">
        <a href="#tracks"><h2>Tracks</h2></a>
        <p>
          There are two planned tracks on the hackathon, one focused on patient access and another
          focused on care plans.
        </p>
        <section id="patient-access">
          <a href="#patient-access"><h3>Patient Access to Health Data</h3></a>
          <p>
            There are several initiatives working on patient access to health data, both in Finland
            and internationally.
          </p>
          <Link href="/2026/finland/patient-access">See details!</Link>
        </section>
        <section id="care-plans">
          <a href="#care-plans"><h3>Care Plans and Clinical Reasoning</h3></a>
          <p>
            Several participants have an interest to work on structured care plans, clinical
            decision support, computable care guidelines, and related terminologies.
          </p>
          <Link href="/2026/finland/care-plans">See details!</Link>
        </section>
        <section id="more-tracks">
          <a href="#more-tracks"><h3>More Tracks?</h3></a>
          <p>Do you want to work on something else? Feel free to propose a new track!</p>
        </section>
      </section>
      <section id="webinars">
        <a href="#webinars"><h2>Webinars</h2></a>
        <p>
          Preparatory webinars were arranged in December, introducing the different tracks and the
          available technologies.
        </p>
        <p>The recordings and presentations of the webinars are listed below.</p>
        <ul id="schedule">
          <li>
            <h4>General intro to the hackathon</h4>
            <time dateTime="2025-12-10T17:00:00+02:00">
              Wednesday, December 10, 2025 at 18:00 EET (17:00 CET)
            </time>
            <p>
              View the <a href="https://www.youtube.com/watch?v=QCvmpQgxcMo">Webinar
              recording</a>, download the presentation (<a
              href={`${
                process.env.NEXT_PUBLIC_BASE_PATH
              }/FinnishHealthDataHackathonIntro.pptx`}
              >PowerPoint</a>, <a
              href={`${
                process.env.NEXT_PUBLIC_BASE_PATH
              }/FinnishHealthDataHackathonIntro.pdf`}
              >PDF</a>).
            </p>
          </li>
          <li>
            <h4>Patient Access track info</h4>
            <time dateTime="2025-12-15T18:00:00+02:00">
              Monday, December 15, 2025 at 18:00 EET (17:00 CET)
            </time>
            <p>
              View the <a href="https://www.youtube.com/watch?v=ePGVvzYA9tk">Webinar
              recording</a>, download the presentation (<a
              href={`${
                process.env.NEXT_PUBLIC_BASE_PATH
              }/PatientAccessTrack-FinnishHealthDataHackathon.pptx`}
              >PowerPoint</a>, <a
              href={`${
                process.env.NEXT_PUBLIC_BASE_PATH
              }/PatientAccessTrack-FinnishHealthDataHackathon.pdf`}
              >PDF</a>).
            </p>
          </li>
          <li>
            <h4>Helsinki / Apotti / Epic sub-track info</h4>
            <time dateTime="2025-12-16T14:00:00+02:00">
              Tuesday, December 16, 2025 at 14:00 EET (13:00 CET)
            </time>
            <p>
              View the <a href="https://www.youtube.com/watch?v=3GZRHARVwoQ">Webinar
              recording</a>, download the presentation (<a
              href={`${
                process.env.NEXT_PUBLIC_BASE_PATH
              }/GettingStartedWithEpicIntegrations.pdf`}
              >PDF</a>).
            </p>
          </li>
          <li>
            <h4>Care Plans and Clinical Reasoning track info</h4>
            <time dateTime="2025-12-18T15:00:00+02:00">
              Thursday, December 18, 2025 at 15:00 EET (14:00 CET)
            </time>
            <p>
              View the <a href="https://www.youtube.com/watch?v=HiZ2c-b39eA">Webinar
              recording</a>, download the presentation (<a
              href={`${
                process.env.NEXT_PUBLIC_BASE_PATH
              }/CarePlanTrackOrientation-FinnishHealthDataHackathon.pptx`}
              >PowerPoint</a>, <a
              href={`${
                process.env.NEXT_PUBLIC_BASE_PATH
              }/CarePlanTrackOrientation-FinnishHealthDataHackathon.pdf`}
              >PDF</a>).
            </p>
          </li>
          <li>
            <h4>Identity Wallets and NCP sub-track info</h4>
            <time dateTime="2025-12-19T12:00:00+02:00">
              Friday, December 19, 2025 at 12:00 EET (11:00 CET)
            </time>
            <p>
              View the <a href="https://www.youtube.com/watch?v=NoZW1nK0yAk">Webinar
              recording</a>, download the presentation (<a
              href={`${
                process.env.NEXT_PUBLIC_BASE_PATH
              }/IntroToTheWalletsAndNCPs-FinnishHealthDataHackathon.pptx`}
              >PowerPoint</a>, <a
              href={`${
                process.env.NEXT_PUBLIC_BASE_PATH
              }/IntroToTheWalletsAndNCPs-FinnishHealthDataHackathon.pdf`}
              >PDF</a>).
            </p>
          </li>
        </ul>
        <p>
          There may still be some last minute webinars announced! Keep an eye on this page for
          updates!
        </p>
        <p>
          You can also add the <a
          href="https://calendar.google.com/calendar/u/0?cid=YjYyOTgxZWQ1YWJmYzk0ZmUxNTllZTY4NTIyYTc3N2ZjYjEzMmFlMDU5NDI4MjA5YTgwMWUzYTliMTlmMDUyYkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t"
          >calendar</a> containing all webinars and hackathon events to your own calendar
          application.
        </p>
      </section>
      <section id="practicalities">
        <a href="#practicalities"><h2>Practicalities</h2></a>
        <section id="time">
          <a href="#time"><h3>Time</h3></a>
          <p>
            The main event will take place on <time dateTime="2026-01-19">Monday, January 19,
            2026</time>, starting at <time dateTime="2026-01-19T09:00:00+02:00">9:00 EEST</time>.
          </p>
          <p>
            Some tracks continue on <time dateTime="2026-01-20">Tuesday, January 20, 2026</time>.
          </p>
          <p>
            The results of the hackathon are presented to the audiences of both the <a
            href="">Radical Health Festival</a> and the <a
            href="https://laakaripaivat.messukeskus.com/en/">Finnish Medical Convention</a> (<a
            href="https://laakaripaivat.fi/"><i lang="fi">Lääkäripäivät</i></a>) on <time
            dateTime="2026-01-21">Wednesday, January 21, 2026</time>.
          </p>
        </section>
        <section id="venue">
          <a href="#venue"><h3>Venue</h3></a>
          <p>
            The event will take place in:
          </p>
          <address>
            <a href="https://www.messukeskus.com/">Messukeskus</a>, Rautatieläisenkatu 3, 00520
            Helsinki
          </address>
          <p>
            See Messukeskus on <a href="https://maps.app.goo.gl/iqGTG8xRGKxhHCGEA">Google Maps</a>!
          </p>
          <p>
            See the <a
            href="https://radicalhealthfestival.messukeskus.com/en/visit/how-to-get-here/">arrival
            instructions</a> on Messukeskus website. Use the <em>entrance for meeting guests</em>.
          </p>
          <p>
            The main space for the hackathon is <a
            href="https://messukeskus.visualizer360.com/en/virtual?p=89654&h=0&v=0&f=0.67">Room 203
            A</a>.
          </p>
          <picture className="large">
            <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/Room203.png`} alt="" />
          </picture>
          <p>
            Room 203 is on the second floor or the Conference Centre of Messukeskus. Enter to the
            lobby of the Holiday Inn hotel, take the rotating stairs to the second floor, walk to
            your left, and follow the hallway to the end.
          </p>
        </section>
        <section id="costs">
          <a href="#costs"><h3>Costs</h3></a>
          <p>
            <strong>There are no participation costs associated to the hackathon.</strong>
          </p>
          <p>
            You don&apos;t need to pay any fees to participate to the hackathon. It is free to
            attend.
          </p>
          <p>
            You are not paid any reimbursement for participating to the hackathon.
          </p>
          <p>
            Some tracks may offer prizes for the best implementations, but this depends on the
            track organizers.
          </p>
        </section>
      </section>
      <section id="results">
        <a href="#results"><h2>Results</h2></a>
        <p>
          What happens in the hackathon, stays in the hackathon - if you so wish. The hackathon is
          meant for experimenting and learning, and you can choose whether you want to share your
          results with others or not.
        </p>
        <p>
          While each participant is free to choose what to share, each track is expected to produce
          some reportable results by the end of the hackathon. This can be code, documentation,
          blog posts, videos, or anything else that demonstrates what has been done during the
          hackathon.
        </p>
        <p>
          The results are presented to the audiences of both the <a
          href="">Radical Health Festival</a> and the <a
          href="https://laakaripaivat.messukeskus.com/en/">Finnish Medical Convention</a> (<a
          href="https://laakaripaivat.fi/"><i lang="fi">Lääkäripäivät</i></a>) on <time
          dateTime="2026-01-21">Wednesday, January 21, 2026</time>.
        </p>
        <p>
          There is also an excellent opportunity for hackathon participants to demonstrate their
          products and projects at the <a
          href="https://radicalhealthfestival.messukeskus.com/programme/networking/innovation-village/"
          >Innovation Village</a> of the Radical Health Festival, also open for attendees of both
          the Festival and the Finnish Medical Convention.
        </p>
        <p>
          The results will be collected and published gradually on this website. See the <Link
          href="./finland/results">Results</Link> page.
        </p>
      </section>
      <section id="participate">
        <a href="#participate"><h2>Participate</h2></a>
        <p className="highlight">
          To take part in the hackathon, please fill in and submit the <a
          href="https://forms.clickup.com/4728722/f/4g9wj-10552/3L9IGGC81CX3Z1PAG4">registration
          form</a>!
        </p>
        <p>
          You can see some of the registered participants on the sign-up sheets for the tracks.
        </p>
        <p>See:</p>
        <ul>
          <li>
            <Link href="/2026/finland/patient-access#participants">Participant list for the
            Patient Access track</Link>
          </li>
          <li>
            <Link href="/2026/finland/care-plans#participants">Participant list for the Care Plans
            and Clinical Reasoning track</Link>
          </li>
        </ul>
        <p>Please enter your own information there too!</p>
        <section className="promo">
          <picture>
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_PATH}/radical_logo_2026_black-768x127.webp`}
              alt="Radical Health Festival Helsinki 2026"
            />
          </picture>      
          <h3>Attend the Radical Health Festival!</h3>
          <p>
            Registered participants of the hackathon are also entitled to a discount for the
            tickets to the Radical Health Festival:
          </p>
          <ul>
            <li>
              <span title="Small and medium-sized enterprices">SMEs</span>: 65&nbsp;% discount with
              the code <strong>RHFH2665</strong> (from 595&nbsp;€ to 208,25&nbsp;€)
            </li>
            <li>
              Larger commercial companies: 60&nbsp;% discount with the
              code <strong>RHFH2660</strong> (from 1295&nbsp;€ to 518&nbsp;€)
            </li>
          </ul>
          <p>
            Get your festival tickets at <a
            href="https://radicalhealthfestival.messukeskus.com/tickets/">Radical Health Festival's
            ticket store!</a>
          </p>
        </section>
        <h3>Any Questions?</h3>
        <p>
          Please don't hesitate to contact Heidi Hakala, the FHIR Ambassador of HL7 Finland, at <a
          href="mailto:heidi.hakala@productivityleap.com">heidi.hakala@productivityleap.com</a>!
        </p>
        <p>Also, the discussion is open at the <a
        href="https://chat.fhir.org/#narrow/channel/194447-nordics/topic/Finnish.20Health.20Data.20Hackathon/with/563748443"
        >Finnish Health Data Hackathon topic</a> on the <a
        href="https://chat.fhir.org/#narrow/channel/194447-nordics/">#nordics</a> channel at the <a
        href="https://chat.fhir.org/">chat.fhir.org</a> FHIR chat!
        </p>
      </section>
      <picture>
        <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/hl7-finland.svg`} alt="HL7 Finland" />
      </picture>      
    </main>
  );
}

export default function FinnishHealthDataHackathonPage() {
  return (
    <>
      <FinnishHealthDataHackathonHeader />
      <FinnishHealthDataHackathon />
    </>
  );
}