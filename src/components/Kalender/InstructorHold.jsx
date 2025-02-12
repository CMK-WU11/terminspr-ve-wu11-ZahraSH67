import KalenderCard from "./KalenderCard";
import Link from "next/link";
import IngenAktiviteter from "./IngenAktiviteter";
import VisAktiviteter from "./VisAktiviteter";


const getData = async (userId) => {
  try {
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });

    const res = await fetch(`http://localhost:4000/api/v1/activities`);
   
    const alleAktiviteter = await res.json();

    const filteredAktiviteter = alleAktiviteter.filter(
      (aktivitet) => aktivitet.instructorId === userId
    );

    return filteredAktiviteter;
  } catch (error) {
    console.error("Fejl ved hentning af data:", error);
    return [];
  }
};

const InstructorHold = async ({ user }) => {
  const aktiviteter = await getData(user.id);

  return (
    <div>
      {aktiviteter.length <= 0 ? (
        <IngenAktiviteter />
      ) : (
        <VisAktiviteter data={aktiviteter} lnk={"/kalender"} />
      )}
    </div>
  );
  s;
};

export default InstructorHold;
