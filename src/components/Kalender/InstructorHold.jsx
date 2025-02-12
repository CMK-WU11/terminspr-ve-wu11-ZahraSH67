"use client";

import { useEffect, useState } from "react";
import IngenAktiviteter from "../ui/IngenAktiviteter";
import VisAktiviteter from "../ui/VisAktiviteter";
import Loading from "../ui/Loading"; // Assuming you have a loading component

const InstructorHold = ({ user }) => {
  const [aktiviteter, setAktiviteter] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulating delay

        const res = await fetch(`http://localhost:4000/api/v1/activities`);
        if (!res.ok) {
          throw new Error("Netværksfejl ved hentning af data");
        }

        const alleAktiviteter = await res.json();
        const filteredAktiviteter = alleAktiviteter.filter(
          (aktivitet) => aktivitet.instructorId === user.id
        );

        setAktiviteter(filteredAktiviteter);
      } catch (error) {
        console.error("Fejl ved hentning af data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (user?.id) {
      getData();
    }
  }, [user]);

  if (loading) {
    return <Loading loadingBesked="Henter instruktørens aktiviteter ..." />;
  }

  return (
    <div>
      {aktiviteter.length === 0 ? (
        <IngenAktiviteter />
      ) : (
        <VisAktiviteter data={aktiviteter} lnk={"/kalender"} />
      )}
    </div>
  );
};

export default InstructorHold;
