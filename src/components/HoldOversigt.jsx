"use client";

import Heading from "@/components/Heading";
import Footer from "@/components/Footer";

const HoldOversigt = ({ deltagere }) => {
  return (
    <div className="p-[28px]">
      <Heading
        title="Holdoversigt"
        fontSize="text-[36px]"
        color="text-headingGray"
      />
      {deltagere.length > 0 ? (
        deltagere.map((deltager) => (
          <p key={deltager.id}>
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