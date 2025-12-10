import Link from "next/link";

import "./finland.css";

export const metadata = {
  title: "Finnish Health Data Hackathons",
  description: "The Finnish edition of the Nordic Health Data Hackathon.",
};

export default function FinnishHealthDataHackathon() {
  return (
    <main id="fi">
      <h1>Finnish Health Data Hackathon</h1>
      <section className="ingress">
        <p>
          {/*
          <span>
            Organized by{' '}
          </span>
          <a href="">
            <picture className="large">
              <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/hl7-finland.svg`} alt="HL7 Finland" />
            </picture>
          </a>
          <span>
            in collaboration with{' '}
          </span>
          <a href="">
            <picture>
              <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/hl7-denmark.png`} alt="HL7 Denmark" />
            </picture>
          </a>,{' '}
          <a href="https://www.hl7.no/">
            <picture>
              <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/hl7-norway.png`} alt="HL7 Norway" />
            </picture>
          </a>, and{' '}
          <a href="">
            <picture>
              <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/hl7-sweden.png`} alt="HL7 Sweden" />
            </picture>
          </a>,{' '}
          <span>
            supported by{' '}
          </span>
          <a href="">
            <picture>
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_PATH}/helsinki.svg`}
                alt="City of Helsinki"
              />
            </picture>
          </a>,{' '}
          <a href="">
            <picture>
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_PATH}/ihe-catalyst.jpg`}
                alt="IHE Catalyst"
              />
            </picture>
          </a>, and{' '}
          <a href="">
            <picture>
              <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/sensotrend.svg`} alt="Sensotrend" />
            </picture>
          </a>,{' '}
          <span>
          and made possible by dozens of volunteers!
          </span>
          */}
          <span>
            Organized by
          </span>
          <a href="https://www.hl7.fi/">
            <picture className="large">
              <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/hl7-finland.svg`} alt="HL7 Finland" />
            </picture>
          </a>
          <span>
            in collaboration with
          </span>
          <a href="https://hl7.dk/">
            <picture>
              <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/hl7-denmark.png`} alt="HL7 Denmark" />
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
        href="https://radicalhealthfestival.messukeskus.com/">Radical Health Festival</a> and the <a
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
          <Link href="/track-patient-access-1">See details!</Link>
        </section>
        <section id="care-plans">
          <a href="#care-plans"><h3>Care Plans and Computable Care Guidelines</h3></a>
          <p>Several participants have an interest to work on structured care plans.</p>
          <Link href="/track-care-plans-1">See details!</Link>
        </section>
        <section id="more-tracks">
          <a href="#more-tracks"><h3>More Tracks?</h3></a>
          <p>Do you want to work on something else? Feel free to propose a new track!</p>
        </section>
      </section>
      <section id="webinars">
        <a href="#webinars"><h2>Webinars</h2></a>
        <p>
          There will be preparatory webinars in December, introducing the different tracks and the
          available technologies.
        </p>
        <p>Currently scheduled webinars include:</p>
        <ul id="schedule">
          <li>
            <h4>General intro to the hackathon</h4>
            <time dateTime="2025-12-10T17:00:00+02:00">
              Wednesday, December 10, 2025 at 18:00 EET (17:00 CET)
            </time>
            <p>
              {/*
              <a
              href="https://teams.microsoft.com/dl/launcher/launcher.html?url=%2F_%23%2Fl%2Fmeetup-join%2F19%3Ameeting_ZmZhOGQ0MTItMDc3ZS00YTUyLWE5MWEtZDk2ZDM2YjI1ZGY5%40thread.v2%2F0%3Fcontext%3D%257b%2522Tid%2522%253a%2522ca4ef9a8-6017-4d6f-b345-ed904be37123%2522%252c%2522Oid%2522%253a%25225f7c049e-16dc-4481-bfb3-ff79b4f28d4e%2522%257d%26launchAgent%3DGSuiteAddOn%26correlationId%3D48e52054-4c9e-4f0d-9344-bc9c3a0fce94%26anon%3Dtrue&type=meetup-join&deeplinkId=72488453-2a36-498c-8611-72b238cbbbed&directDl=true&msLaunch=true&enableMobilePage=true&suppressPrompt=true"
              >Teams link</a>
            </p>
            <p>
              Calendar event: <a target="_blank"
              href="https://calendar.google.com/calendar/event?action=TEMPLATE&amp;tmeid=NTJ2czBjMmpnMWpoY2N0Zjk4bGxhczlpNzggYjYyOTgxZWQ1YWJmYzk0ZmUxNTllZTY4NTIyYTc3N2ZjYjEzMmFlMDU5NDI4MjA5YTgwMWUzYTliMTlmMDUyYkBn&amp;tmsrc=b62981ed5abfc94fe159ee68522a777fcb132ae059428209a801e3a9b19f052b%40group.calendar.google.com"
              ><img border="0"
              src="https://calendar.google.com/calendar/images/ext/gc_button1_fi.gif"
              alt="Google Calendar" /></a>
              */}
              <a
              href="https://www.youtube.com/watch?v=QCvmpQgxcMo"
              >Webinar recording</a>
            </p>
            <p>
              <a
              href={`${process.env.NEXT_PUBLIC_BASE_PATH}/FinnishHealthDataHackathonIntro.pptx`}
              >Presentation</a>
            </p>
          </li>
          <li>
            <h4>Patient Access track info</h4>
            <time dateTime="2025-12-15T18:00:00+02:00">
              Monday, December 15, 2025 at 18:00 EET (17:00 CET)
            </time>
          </li>
          {/*

          - General intro to the hackathon:  Wednesday December 10, 17.00 CET
          - Patient Access track: Monday December 15, 17.00 CET
          - Care Plans and Computable Guidelines: Wednesday December 17, 17.00 CET

          <li>Patient Access to Data in Finland - December 10, 2025</li>
          <li>FHIR Implementation Guide for SMART App Launch in Finland - December 12, 2025</li>
          <li>Care Plans and Computable Care Guidelines - December 17, 2025</li>


          */}
        </ul>
        <p>Participation details will be added soon.</p>
        <p>There may still be changes to the schedule!</p>
        <p>
          The full list of topics, dates and times of the webinars will be announced later. Keep an
          eye on this page for updates!
        </p>
        <p>
          You can add the <a
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
          <h4>Monday, Kuntatalo</h4>
          <p>
            On Monday, the venue is <a href="https://kuntasaatio.fi/toiminta/kuntatalo/"
            >Kuntatalo</a>
          </p>
          <address>
            Toinen linja 14<br />
            00530 Helsinki<br />
          </address>
          <p>
            See Kuntatalo on <a href="https://maps.app.goo.gl/iqGTG8xRGKxhHCGEA">Google Maps</a>!
          </p>
          <h4>Tuesday and Wednesday, Messukeskus</h4>
          <p>
            On Tuesday and Wednesday, the venue is <a href="https://www.messukeskus.com/"
            >Messukeskus</a>
          </p>
          <address>
            Rautatieläisenkatu 3<br />
            00520 Helsinki<br />
          </address>
          <p>
            See Messukeskus on <a href="https://maps.app.goo.gl/iqGTG8xRGKxhHCGEA">Google Maps</a>!
          </p>
          <p>
            See the <a
            href="https://radicalhealthfestival.messukeskus.com/en/visit/how-to-get-here/">arrival
            instructions</a> on Messukeskus website. Use the entrance for meeting guests.
          </p>
        </section>
        <section id="costs">
          <a href="#costs"><h3>Costs</h3></a>
          <p>
            There are no participation costs associated to the hackathon.
          </p>
          <p>
            You don&apos;t need to pay any fees to participate to the hackathon. It is free to attend.
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
      </section>
      <section id="participate">
        <a href="#participate"><h2>Participate</h2></a>
        <p>We will have implementations available at least from</p>
        <ul>
          <li><a href="https://www.apotti.fi/en/the-apotti-ecosystem/">Apotti</a></li>
          <li><a href="https://www.hel.fi/en">City of Helsinki</a></li>
          <li><a href="https://www.duodecim.fi/english/">Duodecim</a></li>
          <li><a href="https://fhir.epic.com/">Epic</a></li>
          <li><a href="https://findynet.fi/en/">Findynet</a></li>
          <li><a href="https://forsante.com/en/">Forsante</a></li>
          <li><a href="https://www.gnomon.com.gr/">Gnomon Informatics</a></li>
          <li><a href="https://hippocraites.fi/">HippocrAItes</a></li>
          <li><a href="https://ihe-catalyst.net/">IHE Catalyst</a></li>
          <li><a href="https://www.kanta.fi/en/system-developers">Kela</a></li>
          <li><a href="https://myhealthmyhands.eu/">MyHealth@MyHands</a></li>
          <li><a href="https://otos.health/">Otos Health</a></li>
          <li><a href="https://sensotrend.com/">Sensotrend</a></li>
          <li><a href="https://www.scytales.com/">Scytáles</a></li>
          {/*
          <li>Evondos</li>
          <li>Forsante</li>
          <li>Google</li>
          <li>Microsoft</li>
          <li>Tietoevry</li>
          */}
        </ul>
        <p>The list of available implementations is updated up to the start of the event.</p>
        <p>We&apos;re working on getting a registration system in place.</p>
        <p>
          In the mean time, if you want to get listed on this page, or if you want to propose an
          additional track, please contact Heidi Hakala, the FHIR Ambassador of HL7 Finland, at <a
          href="mailto:heidi.hakala@productivityleap.com">heidi.hakala@productivityleap.com</a>!
        </p>
      </section>
      <picture>
        <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/hl7-finland.svg`} alt="HL7 Finland" />
      </picture>      
    </main>
  );
}
