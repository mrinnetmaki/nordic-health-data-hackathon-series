import FinnishHealthDataHackathonHeader from '../../../header';

export const metadata = {
  title: 'Results of SD-JWT exploration at the Finnish Health Data Hackathon',
  description: 'Results around SD-JWT at the Wallets & NCPs topic of the Patient Access track of the Finnish Health Data Hackathon.',
};

function SdjwtResults() {
  return (
    <main className="results">
      <h1>Results:<br/>IPS and SD-JWT</h1>
      <section id="specifications">
        <a href="#specifications"><h2>Specifications</h2></a>
        <ul>
          <li>
            <a href="https://international-patient-summary.net">International Patient Summary
            (IPS)</a>
          </li>
          <li>
            Selective Disclosure for JSON Web Tokens, also known as SD-JWT or <a
            href="https://www.rfc-editor.org/rfc/rfc9901.html">RFC 9901</a>
          </li>
        </ul>
        <p>
          A <a
          href="https://www.linkedin.com/pulse/fixing-all-nothing-problem-health-data-sharing-fhir-josh-mandel-md-9k6gc"
          >LinkedIn article</a> by Josh Mandel offers a good introduction into selective
          disclosures and to how they could be used in healthcare domain with the HL7 FHIR
          standard.
        </p>
      </section>
      <section id="tools">
        <a href="#tools"><h2>Tools and Examples</h2></a>
        <ul>
          <li>
            <a href="https://github.com/jmandel/fhiredaction-studio">Source code of the original
            Fhiredaction studio</a>
          </li>
          <li>
            <a href="/hackathon/fhiredaction/index.html">Modified Fhiredaction Studio</a> with an
            IPS document as content
          </li>
        </ul>
        <p>
          You can find more IPS examples in <a
          href="https://github.com/jddamore/IPSviewer/tree/main/samples">IPSviewer samples</a>.
        </p>
      </section>
      <picture>
        <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/hl7-finland.svg`} alt="HL7 Finland" />
      </picture>
    </main >
  );
}

export default function SdjwtResultsPage() {
  return (
    <>
      <FinnishHealthDataHackathonHeader />
      <SdjwtResults />
    </>
  );
}
