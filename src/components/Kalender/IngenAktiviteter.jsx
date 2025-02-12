import Link from "next/link";

const IngenAktiviteter = () => {
  return (
    <div className="flex pt-[150px] items-center justify-center bg-[#5e2e53]">
      <div className="text-center">
        <p className="text-white mb-4">Du har ingen oprettet hold</p>
        <Link href="/aktiviteter" passHref>
          <button className="inline-block bg-white text-[#5e2e53] font-bold py-2 px-4 rounded hover:bg-gray-100">
            Se alle aktiviteter
          </button>
        </Link>
      </div>
    </div>
  );
};

export default IngenAktiviteter;
