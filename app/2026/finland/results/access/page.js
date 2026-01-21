import Link from 'next/link';
import FinnishHealthDataHackathonHeader from '../../header';

export const metadata = {
  title: 'Results of Patient Access track of the Finnish Health Data Hackathon',
  description: 'Results of the Patient Access track of the Finnish Health Data Hackathon.',
};

function PatientAccessResults() {
  return (
    <main className="results">
      <h1>Results of the Patient Access Track</h1>
      <section id="wallets">
        <a href="#wallets"><h2>Wallets</h2></a>
        <p>
          See the <Link href="./wallets">results of the wallets topic</Link> on a separate page.
        </p>
      </section>
      <section id="info">
        <a href="#info"><h2>Information and Tutorials</h2></a>
        <h3>FHIR DevDays videos and presentations</h3>
        <ul>
          <li>
            Introduction to SMART on FHIR (<a
            href="https://youtu.be/GieVAD0z58E?si=OQnFNngiRmfOxWgl">video</a>, <a
            href="https://www.devdays.com/wp-content/uploads/2025/06/250604_MirjamBaltus_IntroToSMARTonFHIR-2.pdf"
            >presentation</a>)
          </li>
          <li>
            SMART on FHIR in real life and best practices (<a
            href="https://youtu.be/Q7Ve1P9B1U8?si=aMvZSuvM2XnvZGtx">video</a>, <a
            href="https://www.devdays.com/wp-content/uploads/2025/06/250603_SMARTonFHIR_In_Real_Life_TimPrudhommeAndMaximilianNussbaumer.pdf"
            >presentation</a>)
          </li>
          <li>
            Enabling SMART on FHIR with Azure B2C (<a
            href="https://youtu.be/ndEwufd5nBc?si=BTgfZl8SG8gtjK3z">video</a>, <a
            href="https://www.devdays.com/wp-content/uploads/2025/06/250603_JaredErwin_AzureFHIRB2C-Jared-Erwin.pdf"
            >presentation</a>)
          </li>
          <li>
            Let&apos;s Build! A Python SMART on FHIR app in action (<a
            href="https://youtu.be/AAUHS6JATEA?si=j8_qBEyyH7NlEQG1">video</a>, <a
            href="https://www.devdays.com/wp-content/uploads/2025/06/250606_BehnishMann_SMARTONFHIRAPP.pdf"
            >presentation</a>)
          </li>
          <li>
            SMART on FHIR mobile apps: Integrating Apple Health & health connect data into EHRs
            FHIR Servers (<a href="https://youtu.be/U9vHnDHxAjc?si=LGoImjS9AG-LJQz-">video</a>, <a
            href="https://www.devdays.com/wp-content/uploads/2025/06/250605_RamanDhanoa_PhysicalActivityApps.pdf"
            >presentation</a>)
          </li>

          <li>
            International Patient Summary: A FHIR patient summary (<a
            href="https://youtu.be/uFdFO7JKEsU?si=kwIiUte2gquBuKxw">video</a>)
          </li>
          <li>
            Patient Authored Documents using IPS (<a
            href="https://youtu.be/Cz2Jvhq-JTE?si=3ViF7nAGlQQcAUrJ">video</a>, <a
            href="https://www.devdays.com/wp-content/uploads/2025/07/250604_GrahameGrieve_IPS_Patient_Application.pdf"
            >presentation</a>)
          </li>
          <li>
            Hajj and FHIR (<a
            href="https://youtu.be/USvVFuzLTA4?si=Vg9SrChx6hSf8oRv">video</a>)
          </li>
          <li>
            International Patient Access: Contribute to global interop (<a
            href="https://youtu.be/30zyLgnivFY?si=03Bf_63B7kxA8vT1">video</a>, <a
            href="https://www.devdays.com/wp-content/uploads/2025/06/250603_IsaacVetter_International-Patient-Access.pdf"
            >presentation</a>)
          </li>
          <li>
            Implementing IPA on a country level  (<a
            href="https://youtu.be/Ec1iyTjHSs8?si=2zuwY-WMGO6XNoEj">video</a>, <a
            href="https://www.devdays.com/wp-content/uploads/2025/06/250603_MikaelRinnetmaki_IPAonCountryLevel-Mikael-Rinnetmaki.pdf"
            >presentation</a>)
          </li>
          <li>
            FHIR, patient access, and consent (<a
            href="https://youtu.be/ZtJLuKJhKiE?si=cN2DgEIYhpWQgvZN">video</a>)
          </li>
        </ul>
        <p>
          Note that these are just some of the related presentations and only from the latest
          edition of DevDays. There are many more available from previous years.
        </p>
      </section>
      <section id="tools">
        <a href="#tools"><h2>Open-source implementations</h2></a>
        <p>
          Useful tools and libraries for the track include:
        </p>
        <ul>
          <li>
            SMART on FHIR JavaScript Library <a href="https://docs.smarthealthit.org/client-js/"
            >fhirclient</a>.
          </li>
          <li>
            There are some useful app examples on <a href="https://github.com/Oy-Apotti-Ab"
            >Apotti&apos;s GitHub repo</a>.
          </li>
          <li>
            Another open-source example of SMART App Launch and communicating with Epic is <a
            href="https://codesandbox.io/p/sandbox/fhir-client-browser-examples-forked-jrg5bo"
            >client-js-examples</a>, forked from the examples of the <a
            href="https://docs.smarthealthit.org/client-js/">SMART on FHIR JavaScript Library</a>.
          </li>
          <li>
            Live <a href="https://www.healthintersections.com.au/passport.html">Patient Document
            Generator</a>, a tool introduced by Grahame Grieve in the <strong>Patient Authored
            Documents using IPS</strong> presentation listed above.
          </li>
        </ul>
      </section>
      <section id="helsinki">
        <a href="#helsinki"><h2>City of Helsinki Challenge</h2></a>
        <p>
          The <Link href="">City of Helsinki Challenge</Link>, looking for patient-facing apps to
          be integrated with the Maisa patient portal, received 11 entries from diverse teams.
        </p>
        <p>
          The awarded winners of the challenge are:
        </p>
        <ol>
          <li>
            <h3>Brain informed</h3>
            <p>
              The application offers support for people recovering from a stroke. It uses other
              widely available care-supporting applications and does not try to do everything by
              itself. The app has a clear user group - people in rehabilitation and their family
              members - who can follow their rehabilitation program and record their progress. The
              app uses light gamification to motivate users, and these elements are also used
              creatively in progress tracking. The concept can be expanded to support the treatment
              of other illnesses as well.
            </p>
          </li>
          <li>
            <h3>Heybaberiba: My Baseline</h3>
            <p>
              The application supports long-term monitoring of illnesses. It allows users to track
              their wellbeing and helps follow how effective the treatment is for each person. The
              app combines information from the patient&apos;s medical record - such as changes in
              medication or other treatment methods - and shows how these changes affect the
              patient and the healthcare professional.
            </p>
          </li>
          <li>
            <h3>Otos</h3>
            <p>
              The application and its connected hearing test tools move much of the hearing
              assessment to the customer. It allows the user to take an eardrum photo and perform
              an audiometry test at a self-service point. These self-made tests reduce the workload
              for professionals. The solution uses both physical measurements and data transfer
              through Maisa to support the assessment process.
            </p>
          </li>
        </ol>
        <p>In addition, the jury awarded a honorary mention:</p>
        <h3>Sensotrend</h3>
        <p>
          Sensotrend&apos;s application improves self-care for people with diabetes and helps
          transfer monitoring data from the user&apos;s own measuring devices into one application.
          The app makes it possible to follow the illness more systematically.
        </p>
        <p>
          The recording of the demo session can be found on the <a
          href="https://youtu.be/9QXqXvd_VN8?si=Nx-fqOYD98NHRg2N&t=4034">session recording</a>.
        </p>
      </section>
      <picture>
        <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/hl7-finland.svg`} alt="HL7 Finland" />
      </picture>
    </main >
  );
}

export default function PatientAccessResultsPage() {
  return (
    <>
      <FinnishHealthDataHackathonHeader />
      <PatientAccessResults />
    </>
  );
}
