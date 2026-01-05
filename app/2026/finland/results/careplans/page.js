import Link from "next/link";
import FinnishHealthDataHackathonHeader from "../../header";

export const metadata = {
  title: "Results of Patient Access track of the Finnish Health Data Hackathon",
  description: "Results of the Patient Access track of the Finnish Health Data Hackathon.",
};

function CarePlanResults() {
  return (
    <main className="results">
      <h1>Results of the Care Plans and Clinical Reasoning Track</h1>
      <p>No reported results yet.</p>
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