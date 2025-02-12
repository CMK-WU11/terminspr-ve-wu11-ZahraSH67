"use client";

import { useEffect, useState } from "react";
import Heading from "@/components/Heading";
import Footer from "@/components/Footer";
import { useAuth } from "@/app/auth/context";
import { useRouter } from "next/navigation";
import { serverFetch } from "@/lib/server-fetch";

// viser kun instruktøre hold oversigt (deltager)
const hentDeltagere = async (aktivitetId, userId, token) => {
  try {
    const response = await serverFetch(
      `http://localhost:4000/api/v1/users/${userId}/roster/${aktivitetId}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token.token}`,
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error("Netværksfejl ved hentning af aktivitetsdata");
    }
    const aktivitetData = await response.json();
    return aktivitetData;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const HoldOversigt = ({ params }) => {
  const { currentUser, token } = useAuth();
  const router = useRouter();



  const aktivitetId = params.id;
  const userId = currentUser.id;

  const [deltagere, setDeltagere] = useState([]);

  useEffect(() => {
    if (aktivitetId && userId) {
      hentDeltagere(aktivitetId, userId, token)
        .then((data) => {
          setDeltagere(data);
        })
        .catch((error) => console.error(error));
    }
  }, [aktivitetId, userId]);

  return (
    <div className="p-[28px]">
      <Heading
        title="Holdoversigt"
        fontSize="text-[36px]"
        color="text-headingGray"
      />
      {deltagere.length > 0 ? (
        deltagere.map((deltager, index) => (
          <p key={index}>
            {deltager.firstname} {deltager.lastname}
          </p>
        ))
      ) : (
        <p>Ingen tilmeldte på dette hold</p>
      )}
      <Footer />
    </div>
  );
};

export default HoldOversigt;




// import HoldOversigt from "@/components/HoldOversigt";
// import { serverFetch } from "@/lib/server-fetch";

// export default async function Page({ params }) {
//   const aktivitetId = params.id;

//   // Fetch data on the server
//   const deltagere = await hentDeltagere(aktivitetId);

//   return <HoldOversigt deltagere={deltagere} />;
// }

// async function hentDeltagere(aktivitetId) {
//   try {
//     const response = await serverFetch(
//       `http://localhost:4000/api/v1/users/${userId}/roster/${aktivitetId}`,
//       {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${token.token}`,
//           "Content-Type": "application/json",
//         },
//       }
//     );
//     if (!response.ok) {
//       throw new Error("Netværksfejl ved hentning af aktivitetsdata");
//     }
//     return await response.json();
//   } catch (error) {
//     console.error(error);
//     return [];
//   }
// }
