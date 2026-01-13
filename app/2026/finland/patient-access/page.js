import Link from "next/link";

import FinnishHealthDataHackathonHeader from "../header";
import Room203AMonday from "./Room203AMonday";
import Room203ATuesday from "./Room203ATuesday";

export const metadata = {
  title: "Patient Access track of the Finnish Health Data Hackathon",
  description: "The description of the track focused on patient access to data at the Finnish edition of the Nordic Health Data Hackathon.",
};

export function Room203ASchedule() {
  return (
    <>
      <table id="schedule-room-203" className="schedule">
        <caption>Monday</caption>
        <thead>
          <tr>
            <th scope="col">Time</th>
            <th scope="col">Event</th>
          </tr>
        </thead>
        <tbody>
          <Room203AMonday />
        </tbody>
      </table>
      <table id="schedule-room-203" className="schedule">
        <caption>Tuesday</caption>
        <thead>
          <tr>
            <th scope="col">Time</th>
            <th scope="col">Event</th>
          </tr>
        </thead>
        <tbody>
          <Room203ATuesday />
        </tbody>
      </table>
    </>
  );
}

function PatientAccessTrack() {
  return (
    <main className="finland">
      <h1>Patient Access Track</h1>
      <p>
        Several initiatives for patient access to health data in Finland and in the EU are
        present in the hackathon. There are plenty of opportunities to choose from on this track!
      </p>
      <p>
        View the <a href="https://www.youtube.com/watch?v=ePGVvzYA9tk">recording</a> or download
        the presentation (<a href={`${
          process.env.NEXT_PUBLIC_BASE_PATH
        }/PatientAccessTrack-FinnishHealthDataHackathon.pptx`}>PowerPoint</a>, <a href={`${
          process.env.NEXT_PUBLIC_BASE_PATH
        }/PatientAccessTrack-FinnishHealthDataHackathon.pdf`}>PDF</a>) of the webinar inrocuding
        this track!
      </p>
      <section id="schedule">
        <a href="#schedule"><h2>Schedule for Room 203 A</h2></a>
        <p>
          All sessions are available for remote (and on-site) participants in a <a
          href="https://teams.microsoft.com/meet/38701114103679?p=vRGCOPjGb2huhmbGBG">Teams
          meeting</a> (meeting&nbsp;ID:&nbsp;387&nbsp;011&nbsp;141&nbsp;036&nbsp;79,
          passcode:&nbsp;Ed7a6FB2).
        </p>
        <Room203ASchedule />
      </section>
      <section id="smart">
        <a href="#smart"><h2>Finnish SMART App Launch</h2></a>
        <p>
          HL7 Finland has published the <a href="https://hl7.fi/fhir/finnish-smart/">Finnish
          implementation guide for SMART App Launch</a>. The affiliate is looking for feedback on
          the present version of the guide, and ideas for future development.
        </p>
      </section>
      <section id="helsinki">
        <a href="#helsinki"><h2>City of Helsinki / Apotti / Epic</h2></a>
        <p>
          The <a href="https://www.hel.fi/en">City of Helsinki</a> is looking for ideas on how to
          improve patient access to data in Apotti, especially through the <a
          href="https://www.maisa.fi/">Maisa</a> patient portal.
        </p>
        <p>
          Apotti is an Epic installation in Finland. You can connect to their rich APIs. See
          entry-level instructions at Apotti&apos;s <a
          href="https://www.apotti.fi/en/the-apotti-ecosystem/">ecosystem</a> page!
        </p>
        <p>
          The EHR vendor <a href="https://www.epic.com/">Epic</a> is a strong supporter of the HL7®
          FHIR® standard as the future of REST-based interoperability. They support over 500 FHIR
          APIs across 57 resources in accordance with the HL7 FHIR standard. This spans the DSTU2,
          STU3, and R4 versions of the FHIR specification. They continue to regularly grow their
          number of supported FHIR APIs. Organizations can grant access to these resources via the
          search and read/write RESTful APIs that are defined by FHIR. Epic deployments in Denmark,
          Finland, and Norway make use of Epic&apos;s integration capabilities - FHIR and beyond -
          every day. You can find out more at <a href="https://open.epic.com/CountrySpecific/"
          >open.epic.com/CountrySpecific/</a>.
        </p>
        <p>
          The track leads share the vision where Apotti is an excellent springboard to global
          markets for Finnish health tech companies. The companies can integrate their products
          with healthcare system workflows and get initial validation through Apotti, and then
          scale global through Epic&apos;s customer base, and beyond.
        </p>
        <p>
          View the <a href="https://www.youtube.com/watch?v=3GZRHARVwoQ">recording</a> and download
          the presentation (<a href={`${
            process.env.NEXT_PUBLIC_BASE_PATH
          }/GettingStartedWithEpicIntegrations.pdf`}>PDF</a>) of the webinar focusing this topic!
        </p>
        <section id="helsinki-challenge" className="highlight light">
          <a href="#helsinki-challenge"><h3>Hackathon Challenge by the City of Helsinki</h3></a>
          <picture className="center icon">
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_PATH}/helsinki.svg`}
              alt="City of Helsinki"
            />
          </picture>
          <p>City of Helsinki presents a challenge to hackathon participants.</p>
          <p className="ingress">
            <strong>Using Your Own Health Data</strong> - Using structured health information shared through
            Maisa/MyChart in an application that processes health data independently
          </p>
          <p>
            The main aim of the challenge is to find examples of apps that would integrate with the
            Maisa patient app and benefit from the data in Apotti.
          </p>
          <h4>Evaluation Criteria</h4>
          <dl>
            <dt>Benefits</dt>
            <dd>
              The application uses the health data that can be shared through Maisa / MyChart
              independently. The application is impactful and provides benefits to public
              healthcare, for example through cost-effectiveness, social impact, or by advantages
              for the individual and/or healthcare professionals.
            </dd>
            <dt>Implementability</dt>
            <dd>
              The implementation of the application is straightforward. The data available to the
              application is not restricted from Maisa / MyChart side. The application can also use
              other health applications to support the customer&apos;s overall care. The
              application does not write any information back to Maisa/MyChart.
            </dd>
            <dt>Ease of use</dt>
            <dd>
              The application is easy to use. Usability means, e.g., technical simplicity, suitability
              for the purpose, and clear language in the application. The customer does not need
              healthcare professional's support to use the application.
            </dd>
            <dt>Engagement</dt>
            <dd>
              The application encourages the customer to use it regularly and in a meaningful way.
              Suitable gamification elements are used to support engagement.
            </dd>
          </dl>
          <h4>Jury</h4>
          <p>
            The entries are evaluated by three judges:
          </p>
          <ul>
            <li>
              <strong>Leena Turpeinen</strong>, Director of Health and Substance Abuse Services,
              City of Helsinki
            </li>
            <li>
              <strong>Mika Perttu</strong>, Chief Digital Physician, City of Helsinki
            </li>
            <li>
              <strong>Petri Otranen</strong>, Chief Information Officer, City of Helsinki
            </li>
          </ul>
          <picture className="right icon">
            <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/award.svg`} alt="" />
          </picture>
          <h4>Prizes</h4>
          <p>
            The top three participants in the Helsinki track will be awarded. The prizes are €2500,
            €1500 and €1000.
          </p>
        </section>
      </section>
      <section id="kanta">
        <a href="#kanta"><h2>Kanta</h2></a>
        <p>
          <a href="https://www.kanta.fi/en/professionals/patient-data-repository">Kanta Patient
          Data Repository</a> is a Finnish national service, storing data from primary and
          secondary care, from both public and private health care providers. Kanta has opened a
          new <a
          href="https://www.kanta.fi/en/system-developers/hyvinvointisovellusten-rajapinta">API
          for patient-facing apps</a>. There is a test environment and support available for app
          developers looking to integrate with the service.
        </p>
        <p>
          To get concrete implementation results during the hackathon, it is adviced to get started
          well in advance. Access to the test environment requires some bureaucracy and contracts,
          and a specific SSL client certificate issued by DVV.
        </p>
        <p>
          However, you can also use the track to learn about Kanta APIs, discuss with Kela, and to
          plan future integration work.
        </p>
        <p>
          Another Kanta service, the <a href="https://www.kanta.fi/en/system-developers/kanta-phr"
          >Kanta PHR</a> is a platform for storing and exchanging health and wellness data produced
          and governed by the individual.
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
      </section>
      <section id="xshare">
        <a href="#xshare"><h2>xShare</h2></a>
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
      <section id="wallets">
        <a href="#wallets"><h2>Health Data and Identity Wallets</h2></a>
        <p>
          The EU project <a href="https://myhealthmyhands.eu/">MyHealth@MyHands</a> aims to ensure
          that all EU citizens have secure online access to their medical records. The project
          focuses on the role of identity wallets in enabling this access.
        </p>
        <p>
          At the hackathon, the project will demonstrate a concept of the data chain involving <a
          href="https://ec.europa.eu/digital-building-blocks/sites/spaces/EUDIGITALIDENTITYWALLET/pages/694487738/EU+Digital+Identity+Wallet+Home"
          >EUDI Wallets</a>, eHealth apps, national contact point infrastructure <a
          href="https://code.europa.eu/ehdsi/ehealth">EU MyHealth@EU OpenNCP</a>, and more -
          purpose-built for exploration and demonstrations.
        </p>
        <p>
          <a href="https://mydata.org">MyData Global</a>, funded by the <a
          href="https://www.nkk.org/en/">Nordic Culture Point</a> coordinates an Infrastructure
          Pilot for Wallets and AI focused on identity wallets and the <a
          href="https://international-patient-summary.net/">International Patient Summary</a> (IPS)
          specification. The pilot explores:
        </p>
        <ul>
          <li>
            how a patient summary document can be generated, with the help of artificial
            intelligence, out of health data from different sources
          </li>
          <li>
            how digital wallets can facilitate storing and sharing patient summary documents.
          </li>
        </ul>
        <p>
          View the <a href="https://www.youtube.com/watch?v=NoZW1nK0yAk">recording</a> and download
          the presentation (<a href={`${
            process.env.NEXT_PUBLIC_BASE_PATH
          }/IntroToTheWalletsAndNCPs-FinnishHealthDataHackathon.pptx`}>PowerPoint</a>, <a href={
          `${
            process.env.NEXT_PUBLIC_BASE_PATH
          }/IntroToTheWalletsAndNCPs-FinnishHealthDataHackathon.pdf`}>PDF</a>) of the webinar
          focusing this topic!
        </p>
      </section>
      <section id="participants">
        <a href="#participants"><h2>Participants, Presentations, and Ideas</h2></a>
        <p>
          The Google Sheet embedded below tracks:
        </p>
        <ul>
          <li>
            Information of partners who wish to make their participation on the track public
          </li>
          <li>
            Information of presentations and educational sessions organized during the hackathon
          </li>
          <li>
            Any ideas participants may have for work before, during, and after the hackathon
          </li>
        </ul>
        <iframe
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRMOOS8G7J-JDGWLAx33I8svDgPJfx9sjgrOE69dnFU3GE0kXfa-lZ9VqYXj6C4ihawXb08A1qVGfIH/pubhtml?gid=151909352&amp;single=false&amp;widget=true&amp;headers=false"
        />
        <p>
          Please feel free to add your own information to the <a
          href="https://docs.google.com/spreadsheets/d/1MF02GaMasV3UJtPeZZYTaZ753NqimmJOCHDsZHcktOI/edit?usp=sharing"
          >sheet</a>!
        </p>
        <p><strong>Please be careful not to edit information entered by others.</strong></p>
        <p>
          Note that you also need to <Link href="/2026/finland#participate">register to the
          hackathon</Link> separately.
        </p>
      </section>
      <picture>
        <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/hl7-finland.svg`} alt="HL7 Finland" />
      </picture>      
    </main >
  );
}

export default function PatientAccessTrackPage() {
  return (
    <>
      <FinnishHealthDataHackathonHeader />
      <PatientAccessTrack />
    </>
  );
}