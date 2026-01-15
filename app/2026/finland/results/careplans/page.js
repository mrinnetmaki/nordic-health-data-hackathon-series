import FinnishHealthDataHackathonHeader from '../../header';

export const metadata = {
  title: 'Results of Patient Access track of the Finnish Health Data Hackathon',
  description: 'Results of the Patient Access track of the Finnish Health Data Hackathon.',
};

function CarePlanResults() {
  return (
    <main className="results">
      <h1>Results of the Care Plans and Clinical Reasoning Track</h1>
      <section id="info">
        <a href="info"><h2>Information and Tutorials</h2></a>
        <h3>FHIR DevDays videos and presentations</h3>
        <ul>
          <li>
            CPG 2.0 and beyond (<a
            href="https://youtu.be/enuJOXcbX6s?si=iex1vSHhmbBABGeN">video</a>, <a
            href="https://www.devdays.com/wp-content/uploads/2025/06/250605_TaylorLe_CPG.pdf"
            >presentation</a>)
          </li>
          <li>
            Interactive CDS with FHIR and CQL (<a
            href="https://youtu.be/RDzOhgzvI-Y?si=xqp7-s6dT9mGWqBk">video</a>, <a
            href="https://www.devdays.com/wp-content/uploads/2025/06/250606_TaylorLe_InteractiveCDS.pdf"
            >presentation</a>)
          </li>
          <li>
            CQL for Authors (<a
            href="https://youtu.be/JHgngvYrgEI?si=VNFLTkldMP4plujJ">video</a>, <a
            href="https://www.devdays.com/wp-content/uploads/2025/06/250604_BrynRhodes_CQLforAuthors.pdf"
            >presentation</a>) + Lets Build (<a
            href="https://youtu.be/eW-UJMapQfg?si=AtSdXPcq3UyLINH1">video</a>)
          </li>
          <li>
            CQL for implementers (<a
            href="https://youtu.be/Z1uX5CEhq3I?si=1jeyjYoNydqj3RWn">video</a>, <a
            href="https://www.devdays.com/wp-content/uploads/2025/06/250604_ReneSpronk_CQLforImplementers.pdf"
            >presentation</a>)
          </li>
        </ul>
        <p>
          Note that these are just some of the related presentations and only from the latest
          edition of DevDays. There are many more available from previous years.
        </p>
      </section>
      <picture>
        <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/hl7-finland.svg`} alt="HL7 Finland" />
      </picture>
    </main >
  );
}

export default function CarePlanResultsPage() {
  return (
    <>
      <FinnishHealthDataHackathonHeader />
      <CarePlanResults />
    </>
  );
}
