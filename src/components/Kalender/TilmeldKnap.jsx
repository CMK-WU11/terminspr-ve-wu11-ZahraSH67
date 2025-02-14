"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Button from "../ui/Button";
import { useAuth } from "@/app/auth/context";
import ToastBesked from "../ui/ToastBesked";

const TilmeldKnap = ({ aktivitet }) => {
  const { currentUser, token, setUserUpdated } = useAuth();
  const [isTilmeldt, setIsTilmeldt] = useState(false);
  const [userbesked, setUserBesked] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const tjekTilmelding = async () => {
      if (currentUser && token) {
        try {
          const tilmeldt = currentUser.activities?.some(
            (userAct) => userAct.id === aktivitet.id
          );
          setIsTilmeldt(tilmeldt ? true : false);
        } catch (error) {
          console.error("Fejl ved indlæsning af tilmeldingsstatus", error);
        }
      }
    };

    tjekTilmelding();
  }, [currentUser, aktivitet, token]);

  const tilmeldHold = async () => {
    if (
      currentUser.age < aktivitet.minAge ||
      currentUser.age > aktivitet.maxAge
    ) {
      //alert("Du opfylder ikke alderskravene for denne aktivitet.");
      setUserBesked("Du opfylder ikke alderskravene for denne aktivitet.");
      return;
    }

    const harAktivitetPaaSammeUgedag = currentUser.activities?.some(
      (userAct) => userAct.weekday === aktivitet.weekday
    );

    if (harAktivitetPaaSammeUgedag) {
      //alert("Du er allerede tilmeldt en aktivitet på denne ugedag.");
      setUserBesked("Du er allerede tilmeldt en aktivitet på denne ugedag.");
      return;
    }

    if (token) {
      await fetch(
        `http://localhost:4000/api/v1/users/${currentUser.id}/activities/${aktivitet.id}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token.token}`, // Inkluderer token
            "Content-Type": "application/json",
          },
        }
      );
      setIsTilmeldt(true);
      setUserUpdated(true);
    }
  };

  const fjernFraHold = async () => {
    if (token) {
      await fetch(
        `http://localhost:4000/api/v1/users/${currentUser.id}/activities/${aktivitet.id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token.token}`, // Inkluderer token
            "Content-Type": "application/json",
          },
        }
      );
      setIsTilmeldt(false);
      setUserUpdated(true);
    }
  };

  const handleLoginRedirect = () => {
    router.push("/login");
  };

  return (
    <div 
    // className="absolute bottom-0 right-0 p-6.75"
    >
      {!currentUser ? (
        <Button title="Tilmeld" onClick={handleLoginRedirect} />
      ) : isTilmeldt ? (
        <Button title="Forlad" onClick={fjernFraHold} />
      ) : (
        <Button title="Tilmeld" onClick={tilmeldHold} />
      )}
      {userbesked && <ToastBesked besked={userbesked} />}
    </div>
  );
};

export default TilmeldKnap;
