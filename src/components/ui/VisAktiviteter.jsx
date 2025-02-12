import React from "react";
import Link from "next/link";
import KalenderCard from "../kalender/KalenderCard";

const VisAktiviteter = ({ data, lnk }) => {
  return (
    <div>
      <div>
        {data.map((aktivitet) => (
          <div key={aktivitet.id}>
            <Link href={`${lnk}/${aktivitet.id}`} passHref>
              <KalenderCard aktivitet={aktivitet} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VisAktiviteter;

