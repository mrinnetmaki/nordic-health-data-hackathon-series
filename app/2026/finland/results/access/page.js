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
      <section id="info">
        <a href="info"><h2>Information and Tutorials</h2></a>
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
            Let’s Build! A Python SMART on FHIR app in action (<a
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
        <a href="tools"><h2>Open-source implmentations</h2></a>
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
      <section id="wallets">
        <a href=""><h2>Wallets</h2></a>
        <p>
          See also the <Link href="./wallets">results of the wallets topic</Link> on a separate
          page.
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
