import Link from 'next/link';

import FinnishHealthDataHackathonHeader from '../header';
import Room203BMonday from './Room203BMonday';
import Room203BTuesday from './Room203BTuesday';

export const metadata = {
  title: 'Care Plans and Clinical Reasoning track of the Finnish Health Data Hackathon',
  description: 'The description of the track focused on care plans and clinical reasoning at the Finnish edition of the Nordic Health Data Hackathon.',
};

export function Room203BSchedule() {
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
          <Room203BMonday />
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
          <Room203BTuesday />
        </tbody>
      </table>
    </>
  );
}

function CarePlanTrack() {
  return (
    <main className="finland">
      <h1>Care Plans and Clinical Reasoning</h1>
      <p>The general scope of this track is:</p>
      <ul>
        <li>
          the <a href="https://www.hl7.org/fhir/clinicalreasoning-module.html" target="_blank"
          rel="noopener noreferrer" title="https://www.hl7.org/fhir/clinicalreasoning-module.html"
          >Clinical Reasoning -module</a> of FHIR,
        </li>
        <li>
          the <a href="https://build.fhir.org/ig/HL7/crmi-ig/introduction.html" target="_blank"
          rel="noopener noreferrer" title="https://build.fhir.org/ig/HL7/crmi-ig/introduction.html"
          >Canonical Resource Management Infrastructure (CMRI)</a> implementation guide, and
        </li>
        <li>
          the authoring, publishing, sharing, implementing, and integration of care plans, clinical
          guidelines, clinical decision support, and clinical knowledge of any kind.
        </li>
      </ul>
      <p>
        The following are examples of the kinds of things we <em>could</em> work on. Feel free to
        bring additional topics that interest you!
      </p>
      <section id="schedule">
        <a href="#schedule"><h2>Schedule for Room 203 B</h2></a>
        <p>
          All sessions are streamed and recorded in a single <a
          href="https://teams.microsoft.com/meet/31866520015118?p=csBmmlcQA1FcGvdSHR">Teams
          meeting</a> (meeting&nbsp;ID:318&nbsp;665&nbsp;200&nbsp;151&nbsp;18,
          passcode:&nbsp;nE9ff3m2).
        </p>
        <Room203BSchedule />
        <p>
          See also the <Link href="/2026/finland/patient-access#schedule">schedule for Room 203
          A</Link> on the Patient Access track page!
        </p>

      </section>
      <section id="authoring">
        <a href="#authoring"><h2>Authoring, Publishing, and Sharing Clinical Knowledge</h2></a>
        <p>
          The <a href="https://build.fhir.org/ig/HL7/crmi-ig/index.html" target="_blank"
          rel="noopener noreferrer" title="https://build.fhir.org/ig/HL7/crmi-ig/index.html"
          >Canonical Resource Management Infrastructure (CRMI)</a> implementation guide has made
          FHIR a viable format for representing context-independent knowledge, such as decision
          support rules or drug databases. The authoring, publishing, and distributing of
          FHIR-based knowledge is a shared concern for many knowledge providers.
        </p>
        <p>
          Given that CRMI is still relatively new, most of the existing FHIR -tooling is focused on
          authoring and publishing profiles and implementation guides over knowledge artifacts.
          Similarly, existing registries, such as <a href="https://simplifier.net/" target="_blank"
          rel="noopener noreferrer" title="https://simplifier.net/">Simplifier</a>, are not
          currently designed to serve as CRMI knowledge repositories. While there has been some
          past collaboration in this space in the US under the AHRQ <a
          href="https://digital.ahrq.gov/health-it-tools-and-resources/clinical-decision-support-cds"
          target="_blank" rel="noopener noreferrer"
          title="https://digital.ahrq.gov/health-it-tools-and-resources/clinical-decision-support-cds"
          >CDS Connect</a> project, a European counterpart doesn&apos;t yet exist.
        </p>
        <ul>
          <li>
            <em>
              Is there common tooling we could build around the authoring and sharing of knowledge
              artifacts?
            </em>
          </li>
          <li><em>Do you have clinical knowledge you could author or publish through CRMI?</em></li>
          <li><em>Do you have a system that could interface with published CRMI packages?</em></li>
        </ul>
      </section>
      <section id="defining">
        <a href="#defining"><h2>Defining Clinical Concepts</h2></a>
        <p>
          Terminology is a central part of most clinical knowledge. Definitions often have to be
          shared across both the local and the global ecosystem, where the same thing might be
          represented in many ways. This is not only true for individual codes and code systems,
          but also for more complex expressions, such as <em>&quot;long-acting nitrates&quot;</em>.
        </p>
        <p>
          There have been various approaches to modelling clinical concepts through terminology. To
          list a couple examples:
        </p>
        <ul>
          <li>
            Extensional (enumerated) ValueSets<br/>
            - OpenSAFELY <a href="https://www.opencodelists.org/" target="_blank"
            rel="noopener noreferrer" title="https://www.opencodelists.org/">OpenCodelists</a><br/>
            - NLM <a href="https://vsac.nlm.nih.gov/" target="_blank" rel="noopener noreferrer"
            title="https://vsac.nlm.nih.gov/">Value Set Authority Center</a>
          </li>
          <li>Intensional (algorithmically defined) ValueSets<br/>
            - SNOMED CT <a
            href="https://docs.snomed.org/snomed-ct-specifications/snomed-ct-expression-constraint-language"
            target="_blank" rel="noopener noreferrer"
            title="https://docs.snomed.org/snomed-ct-specifications/snomed-ct-expression-constraint-language"
            >Expression Contraint Language</a><br/>
            - FHIR <a href="https://build.fhir.org/ig/FHIR/ig-guidance/vcl.html" target="_blank"
            rel="noopener noreferrer" title="https://build.fhir.org/ig/FHIR/ig-guidance/vcl.html"
            >ValueSet Compose Language</a>
          </li>
        </ul>
        <p>
          In addition to terminology, different implementation guides have different ways of
          defining concepts even within FHIR. Consider a concept like <a
          href="https://build.fhir.org/ig/HL7/ebm/Group-7749.json.html" target="_blank"
          rel="noopener noreferrer" title="https://build.fhir.org/ig/HL7/ebm/Group-7749.json.html"
          >*&quot;Patients who are hospitalized for COVID-19 and who are not critically
          ill&quot;*</a>, for example. A computable guideline (within the CPG IG) would contain a
          CaseFeatureDefinition as CQL code, whereas the underlying evidence (within the EBM IG) is
          communicated through a CohortDefinition as a Group resource. A Structured Data Capture
          (SDC) Questionnaire might define an equvivalent item, too. Not to mention non-FHIR models
          like openEHR archetypes or OMOP CDM.
        </p>
        <ul>
          <li>
            <em>
              How should we define and share clinical concepts that are robust and precise enough?
            </em>
          </li>
          <li>
            <em>
              Do you maintain extensional ValueSets that could be simpler as intensional instead?
            </em>
          </li>
          <li>
            <em>
              What should be done through terminology and what should we reach for when it
              isn&apos;t expressive enough?
            </em>
          </li>
        </ul>
      </section>
      <section id="modelling">
        <a href="#modelling"><h2>Modelling Care Plans and Computable Guidelines</h2></a>
        <p>
          The <em>Standards for Sharing Care Plans and Computable Clinical Guidelines</em> project
          of xShare and EHRxF was kicked off in the HL7 Europe Working Group Meeting on the 3rd of
          December 2025. The aim is to define common models in the scope of EHDS, building on top
          of existing profiles and implementation guides. The IHE <a
          href="https://profiles.ihe.net/QRPH/CCG/index.html" target="_blank"
          rel="noopener noreferrer" title="https://profiles.ihe.net/QRPH/CCG/index.html">Computable
          Care Guidelines (CCG)</a> and HL7 <a
          href="https://build.fhir.org/ig/HL7/cqf-recommendations/index.html" target="_blank"
          rel="noopener noreferrer"
          title="https://build.fhir.org/ig/HL7/cqf-recommendations/index.html">Clinical Practice
          Guidelines (CPG)</a> are particularly relevant.
        </p>
        <p>
          Finding common approaches for European care plans and clinical guidelines is a timely
          concern, as local approaches have already diverged. In Germany, for example, the <a
          href="https://build.fhir.org/ig/HL7/ebm/" target="_blank" rel="noopener noreferrer"
          title="https://build.fhir.org/ig/HL7/ebm/">Evidence Based Medicine
          (EBM)</a> implementation guide has found success over CPG for representing clinical
          guidelines through <a
          href="https://ceosys.github.io/cpg-on-ebm-on-fhir/" target="_blank"
          rel="noopener noreferrer"
          title="https://ceosys.github.io/cpg-on-ebm-on-fhir/">Clinical Practice Guidelines (CPG)
          on EBMonFHIR (CPG-on-EBM-on-FHIR)</a>. Better sharing across the various contexts of
          the <a href="https://build.fhir.org/ig/HL7/cqf-measures/#quality-improvement-ecosystem"
          target="_blank" rel="noopener noreferrer"
          title="https://build.fhir.org/ig/HL7/cqf-measures/#quality-improvement-ecosystem">Quality
          Improvement Ecosystem</a> would benefit all.
        </p>
        <p>
          The lack of working public examples has been a consistent barrier to the adoption of CPG.
          For example, <a href="https://github.com/reason-healthcare/interactive-cds-content"
          target="_blank" rel="noopener noreferrer"
          title="https://github.com/reason-healthcare/interactive-cds-content">a tiny bit of the
          Duodecim EBMG Rheumatoid Arthritis Guideline</a> that was translated from L1 to L4 in
          early 2023 is still one of the very few public repositories.
        </p>
        <ul>
          <li>
            <em>
              How should we model and interface with Care Plans and Computable Clinical Guidelines,
              such as Käypä Hoito?
            </em>
          </li>
          <li>
            <em>
              Do you have existing Care Plans in other fomats, such as CDA, that would benefit from
              being translated?
            </em>
          </li>
          <li>
            <em>Could we pave the way for CPG by creating more concrete public examples?</em>
          </li>
        </ul>
      </section>
      <section id="testing">
        <a href="#testing"><h2>Testing Clinical Knowledge Against European Synthetic Data</h2></a>
        <p>
          Testing and demonstrating computable knowledge artifacts requires synthetic patient data
          to work on. Historically, tools like <a href="https://synthetichealth.github.io/synthea/"
          target="_blank" rel="noopener noreferrer"
          title="https://synthetichealth.github.io/synthea/">Synthea</a> have been US -centric.
          EHDS gives us a great set of common profiles to target, as the same synthetic data can be
          used across the EU. This work has already been started by HL7 Europe in the <a
          href="https://synderai.net/" target="_blank" rel="noopener noreferrer"
          title="https://synderai.net/">SYNDERAI</a> project. Extracting the synthetic patient data
          from the documents into a bulk FHIR import is doable with little effort.
        </p>
        <ul>
          <li>
            <em>
              Could we contribute to the completeness and correctness of EHDS-profiled synthetic
              data?
            </em>
          </li>
          <li>
            <em>Are there other ways of testing clinical knowledge against realistic data?</em>
          </li>
        </ul>
      </section>
      <section id="integrating">
        <a href="#integrating"><h2>Integrating Clinical Knowledge</h2></a>
        <p>
          Whether the clinical knowledge you have is defined as FHIR resources or not, it can
          likely use one or more of the <a
          href="https://build.fhir.org/ig/HL7/cqf-recommendations//documentation-approach-10-mechanisms-of-integration.html"
          target="_blank" rel="noopener noreferrer"
          title="https://build.fhir.org/ig/HL7/cqf-recommendations//documentation-approach-10-mechanisms-of-integration.html"
          >integration mechanisms</a> described in the CPG IG:
        </p>
        <ul>
          <li>
            <strong>Direct</strong>, i.e., as <em>CRMI packages</em>. The integration effort
            depends on the resource type. A drug database with ClinicalUseDefintion resources might
            work well with just about any FHIR server through the search API, whereas a package
            containing CQL Library resources applied through PlanDefinitions requires the
            integrator to have a clinical reasoning implementation in place.
          </li>
          <li>
            <strong>Reasoning-as-a-Service</strong>, i.e, as <em>CDS Hooks services</em>. An
            integration doesn&apos;t necessarily even need a FHIR server, as long as the data
            defined in the prefetch can be provided. Some systems, such as Apotti (Epic), have the
            capability to integrate with CDS Hooks services on specific hooks.
          </li>
          <li>
            <strong>As an Application</strong>, i.e., as <em>SMART apps</em>. There is a dedicated
            topic in the Patient Access Track for the Finnish SMART App Launch implementation
            guide. Consider joining that, unless this one seems more relevant for your use case.
            SMART is generally a quite widely supported integration mechanism.
          </li>
          <li>
            <strong>Via Data Enrichment</strong>, i.e. via <em>real-time bidirectional
            interaction</em>. While this mechanism is still mostly new and unfamiliar territory to
            Duodecim (and to Joonatan personally), it seems promising for systems that do not
            implement the clinical reasoning capabilities required for a direct integration, that
            deal with large populations, or that look to enrich patient records in the background.
            A clinical decision support system might, for example, deliver insights as
            DetectedIssue resources. If this is your bread and butter (and/or this description is
            completely off base) then please come and tell us all about it!
          </li>
        </ul>
        <p>
          It is possible to provide the same clinical knowledge through all of these mechanisms.
          Each has different pros and cons.
        </p>
        <ul>
          <li>
            <em>
              Do you have clinical knowledge that you could provide through one of the integration
              mechanisms?
            </em>
          </li>
          <li>
            <em>
              Do you have a system that could use clinical knowledge through one of the integration
              mechanisms?
            </em>
          </li>
          <li><em>Are there other ways of integrating clinical knowledge?</em></li>
        </ul>
      </section>
      <section id="track-leads">
        <a href="track-leads"><h2>Track Leads</h2></a>
        <p>The track leads are:</p>
        <ul>
          <li>
            Joonatan Vuorinen, Duodecim, <a href="mailto:joonatan.vuorinen@duodecim.fi"
            >joonatan.vuorinen@duodecim.fi</a>.
          </li>
          <li>
            Ádám Z. Kövér, Felleskatalogen, <a href="mailto:adam.kover@felleskatalogen.no"
            >adam.kover@felleskatalogen.no</a>.
          </li>
        </ul>
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
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSkaFw0_Qpqs49NW3QE-9PXDjROZRw_ycN5faZYnVY7K5dZ0VVeAY1cgTGnN6ZWaPU2xFpjOdPxE2xh/pubhtml?widget=true&amp;headers=false"
        />
        <p>
          Please feel free to add your own information to the <a
          href="https://docs.google.com/spreadsheets/d/1X6WD6GPxNvwwpRAb0gsIti_5LBTuGT5nnwUk535piCQ"
          >sheet</a>!
        </p>
        <p><strong>Please be careful not to edit information entered by others.</strong></p>
        <p>
          Note that you also need to <Link href="/2026/finland#participate">register to the
          hackathon</Link> separately.
        </p>
      </section>
      <section id="webinar">
        <a href="#webinar"><h2>Further info</h2></a>
        <p>
          View the <a href="https://www.youtube.com/watch?v=HiZ2c-b39eA">webinar recording</a>,
          download the presentation (<a href={
          `${process.env.NEXT_PUBLIC_BASE_PATH}/CarePlanTrackOrientation-FinnishHealthDataHackathon.pptx`
          }>PowerPoint</a>, <a href={
          `${process.env.NEXT_PUBLIC_BASE_PATH}/CarePlanTrackOrientation-FinnishHealthDataHackathon.pdf`
          }>PDF</a>).
        </p>
        <p>See also <Link href="/2026/finland#webinars">all the informative webinars</Link>!</p>
      </section>
      <picture>
        <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/hl7-finland.svg`} alt="HL7 Finland" />
      </picture>
    </main>
  );
}

export default function CarePlanTrackPage() {
  return (
    <>
      <FinnishHealthDataHackathonHeader />
      <CarePlanTrack />
    </>
  );
}
