import Link from "next/link";
import FinnishHealthDataHackathonHeader from "../../../header";

export const metadata = {
  title: "Results of SD-JWT exploration at the Finnish Health Data Hackathon",
  description: "Results around SD-JWT at the Wallets & NCPs topic of the Patient Access track of the Finnish Health Data Hackathon.",
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
      {/*

      <section id="background">
        <a href="#background"><h2>Background</h2></a>
        <p>
          Overall, we wanted to explore how <a href="https://international-patient-summary.net"
          >International Patient Summary (IPS)</a> documents interact with Digital Identitety
          Wallets.
        </p>
        <p>
          We are interested in exploring how IPS data can be stored within wallets, and how wallets
          can be used as a mechanism for sharing the information further.
        </p>
        <p>
          One interesting standard in this area is the Selective Disclosure for JSON Web Tokens
          specification, also known as SD-JWT or <a
          href="https://www.rfc-editor.org/rfc/rfc9901.html">RFC 9901</a>.
        </p>
      </section>
      <section id="sd">
        <a href="#sd"><h2>Selective Disclosure</h2></a>
        <p>
          Selective disclosure is a concept for fine grained control of sharing data.
        </p>
        <p>
          Essentially, you as a data holder get a set of data that is verified as authentic by the
          source of the data, and you can then choose to share only pieces of that data with third
          parties, so that those third parties can still trust the authenticity of the smaller pieces of data.
        </p>
        <p>
          A <a
          href="https://www.linkedin.com/pulse/fixing-all-nothing-problem-health-data-sharing-fhir-josh-mandel-md-9k6gc"
          >LinkedIn article</a> by Josh Mandel offers a good introduction into selective
          disclosures and to how they could be used in healthcare domain with the HL7 FHIR
          standard.
        </p>
      </section>
      <section id="progress">
        <a href="#progress"><h2>Progress</h2></a>
        <p>
          We started by looking at the IPS specification and thinking of which parts of a patient
          summary could stand alone as verifiable credentials.
        </p>
        <p>
          Name, address, ...
          Allergies and intolerances

        </p>
        <p>

        </p>
        <p>
          Although a main point of verifiable credentials is trust, we did not want to limit our thinking there.
        </p>
        <p>
          Still, challenging to find realistic scenarios.
        </p>
        <p>
          Textual description of each section, as a string.
        </p>
        <p>
          Can be stored in a wallet. Can be visualized as a separate verifiable credential.
        </p>
        <p>
          How many verifiable credentials can a wallet hold? How do current wallet implementations help people manage them?
        </p>
        <p>
          Full IPS. Seems like a lot!
        </p>
        <p>
          This is only a small part of your health data.
        </p>
      </section>
      <section id="examples">
        <a href="#examples"><h2>Examples</h2></a>
        <p></p>
        <p>
          Fhiredaction
        </p>
        <p>
          Select different IPS sources, if you wish.
        </p>
        <p>
          Source code is available
        </p>
      </section>
      <section id="discussion">
        <a href="#discussion"><h2>Discussion</h2></a>
        <p>
        </p>
        <section id="granularity">
          <a href="#granularity"><h3>How granular do we want to get?</h3></a>
          <p>
How granular do we want to get?

How do wallets visualize the entire bundle?

Is it feasible to selectively disclose some attributes? Is it easy?

What do we want to disclose?
- We should be able to show a valid IPS (perhaps without any distracting elements)
- Is there value in disclosing separate pieces of information from the IPS?
- Should the end result always be formatted as an IPS doc, perhaps with data just missing?


(On SD-JWT in general):
For instance learning credentials:
An institution might grant me a credential for each of the courses I have passed, in one bundle. I can then choose which ones to present to someone, or someone can just ask whether I have passed a certain course.
Depending on the use case, I may want to hide some of my information that would be present in the bundle. My address, email address, phone, age, name?
One can imagine this kind of use cases.

But can we imagine realistic ones for healthcare?

Entire set of health data is certainly too much to include, with today’s technologies.
IPS is perhaps a borderline case. It could be stored as a cohesive set of information, from which separate parts could be disclosed.
But is there value in that?

Vaccination record, with individual vaccinations?
- There are other mechanisms for this.

Prescriptions?
- Need other mechanisms too, for dispensation.

Diagnosis?
- Perhaps, but is there a real use case? Is there enough uniformity between healthcare providers in how this is recorded?

Allergies and intolerances
- When filling in participation forms? With AI?

          </p>
        </section>
        <section id="where-to-disclose">
          <a href="#where-to-disclose"><h3>Where to decide what to disclose?</h3></a>
          <p>
            The wallets we got to try out did not make it easy to manage these.
          </p>
          <p>
            Is there a need to keep them clearly presented? An application can ask for a named credential, the wallet can provide it.
          </p>
          <p>
            The real use case: I have my patient summary, I don't want to share all of it. I either want to share only a very small portion of it, or I want to share a full summary, but exclude a single detail, or a few. 
          </p>
          <p>
            It seems an IPS app is better suited for making this kind of selections.
          </p>
          <p>
The IPS app is an issuer. When issuing the VC, can already select what to include.

Even out of everything that is selected, some things can be marked as selectively disclosable

If it’s the healthcare organization who’s issuing the IPS, they don’t want to do it multiple times.
If it’s an app used by the patient, is it more natural to make the selection in the IPS app or in the wallet?

          </p>


        </section>
        <section id="displaying">
          <a href="#displaying"><h3>Displaying Data</h3></a>
          <p>
            SVG template for the entire data set.

Array content - how to present in SVG
- No way to assign positions dynamically

Can’t display div texts as such in a populated SVG template
- We could use both text and display values of codings, they are text only

SVG does not wrap text. Should use foreignobject?

Seems to be meant for really tiny bits of information.

Perhaps display only the name of the set, in multiple languages.
- When the name is somehow dependent on the claims

          </p>
        </section>
        <section id="conclusions">
          <a href="#conclusions"><h3>Conclusions</h3></a>
          <p>
            Entire set of health data is certainly too much to include, with today’s technologies.
IPS is perhaps a borderline case. It could be stored as a cohesive set of information, from which separate parts could be disclosed.
But is there value in that?

Vaccination record, with individual vaccinations?
- There are other mechanisms for this.

Prescriptions?
- Need other mechanisms too, for dispensation.

Diagnosis?
- Perhaps, but is there a real use case? Is there enough uniformity between healthcare providers in how this is recorded?

Allergies and intolerances
- When filling in participation forms? With AI?


Healthcare institutions could consider offering IPS documents in this format.
If they would, we would use them.

It would then be the IPS app what would help the patient select what to disclose, case by case.
We would at least preserve the signed SD-JWT as Provenance info.

Not sure whether it makes sense to populate the wallets with this kind of information.

The entire IPS, exported from the IPS app, could be stored to the wallet. So that it could be shared from there?
          </p>
          <p>
But there are other mechanisms too. IS wallet a winning one?            
          </p>
          <p>
            We shall see. At least we have tried it out. We have some code and some learnings ready if there will be a use case.
          </p>
          <p>
            Perhaps digital identity wallets have a more important role in verifying the identity of an individual?
          </p>
        </section>
      </section>
      <section id="acknowwledgements">
        <a href="#acknowwledgements"><h2>Acknowledgements</h2></a>
        <p>
          These results were captured by Mikael Rinnetmäki and Samuel Rinnetmäki.
        </p>
        <p>
          Exploration has been partly funded by MyData Global and Nordic Council of Ministers
        </p>
        <p>
          Exploration has been partly funded by the EU, in MyHealth@MyHands project
        </p>
      </section>
      */}

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