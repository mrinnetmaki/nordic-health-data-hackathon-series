import Link from 'next/link';
import FinnishHealthDataHackathonHeader from '../../header';

export const metadata = {
  title: 'Results of Wallet topic at the Finnish Health Data Hackathon',
  description: 'Results of the Wallets & NCPs topic of the Patient Access track of the Finnish Health Data Hackathon.',
};

function WalletResults() {
  return (
    <main className="results">
      <h1>Results</h1>
      <section>
        <p>
          See the <Link href="./wallets/sd-jwt">page specific to SD-JWT</Link>.
        </p>
      </section>
      <picture>
        <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/hl7-finland.svg`} alt="HL7 Finland" />
      </picture>
    </main >
  );
}

export default function WalletResultsPage() {
  return (
    <>
      <FinnishHealthDataHackathonHeader />
      <WalletResults />
    </>
  );
}
