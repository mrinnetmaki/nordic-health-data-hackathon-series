import Link from "next/link";
import { permanentRedirect } from "next/navigation";

export const metadata = {
  title: "Nordic Health Data Hackathons",
  description: "A series of health data hackathons in the Nordics",
};

export default function HomeRedirect() {
  permanentRedirect('/2026');
}