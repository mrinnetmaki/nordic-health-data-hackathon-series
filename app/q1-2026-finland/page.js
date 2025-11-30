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
        There will be preparatory webinars in 2025, and the physical event on January 19-21, 2026.
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
          </li>
          <li>
            <h4>Patient Access track info</h4>
            <time dateTime="2025-12-15T18:00:00+02:00">
              Monday, December 15, 2025 at 18:00 EET (17:00 CET)
            </time>
          </li>
          {/*

            <p>
              <a href="">Teams link</a>
            </p>
            <p>
              <a href="">Calendar event</a>
            </p>

- General intro to the hackathon:  Wednesday December 10, 17.00 CET
- Patient Access track: Monday December 15, 17.00 CET
- Care Plans and Computable Guidelines: Wednesday December 17, 17.00 CET

          <li>Patient Access to Data in Finland - December 10, 2025</li>
          <li>FHIR Implementation Guide for SMART App Launch in Finland - December 12, 2025</li>
          <li>Care Plans and Computable Care Guidelines - December 17, 2025</li>

        <p>
          You can add the <a href="">calendar</a> containing all webinars to your own calendar
          application.
        </p>


          */}
        </ul>
        <p>Participation details will be added soon.</p>
        <p>There may still be changes to the schedule!</p>
        <p>
          The full list of topics, dates and times of the webinars will be announced later. Keep an
          eye on this page for updates!
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
            You don't need to pay any fees to participate to the hackathon. It is free to attend.
          </p>
          <p>
            You are not paid any reimbursement for participating to the hackathon. Some tracks may
            offer prizes for the best implementations, but this depends on the track organizers.
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
      </section>

      <section id="participate">
        <a href="#participate"><h2>Participate</h2></a>
        <p>We will have implementations available at least from</p>
        <ul>
          <li><a href="https://www.apotti.fi/en/the-apotti-ecosystem/">Apotti</a></li>
          <li><a href="https://www.hel.fi/en">City of Helsinki</a></li>
          <li><a href="https://www.duodecim.fi/english/">Duodecim</a></li>
          <li><a href="https://fhir.epic.com/">Epic</a></li>
          <li><a href="https://www.gnomon.com.gr/">Gnomon Informatics</a></li>
          <li><a href="https://hippocraites.fi/">HippocrAItes</a></li>
          <li><a href="https://ihe-catalyst.net/">IHE Catalyst</a></li>
          <li><a href="https://www.kanta.fi/en/system-developers">Kela</a></li>
          <li><a href="https://otos.health/">Otos Health</a></li>
          <li><a href="https://sensotrend.com/">Sensotrend</a></li>
          {/*
          <li>Evondos</li>
          <li>Forsante</li>
          <li>Google</li>
          <li>Microsoft</li>
          <li>Tietoevry</li>
          */}
        </ul>
        <p>The list of available implementations is updated up to the start of the event.</p>
        <p>We're working on getting a registration system in place.</p>
        <p>
          In the mean time, if you want to get listed on this page, or if you want to propose an
          additional track, please contact Heidi Hakala, the FHIR Ambassador of HL7 Finland, at <a
          href="mailto:heidi.hakala@productivityleap.com">heidi.hakala@productivityleap.com</a>!
        </p>
      </section>
    </main>
  );
}
