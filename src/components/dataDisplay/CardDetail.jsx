import React from "react";
import Image from "next/legacy/image";
import Heading from "@/components/ui/Heading";
import TilmeldKnap from "../kalender/TilmeldKnap";

const getData = async ({ id }) => {
  try {
    const response = await fetch(
      `http://localhost:4000/api/v1/activities/${id}`,
      {
        next: {
          revalidate: 60,
        },
      }
    );

    return await response.json();
  } catch (error) {
    console.error(error);
    throw new Error();
  }
};

const CardDetail = async ({ id }) => {
  const aktivitetData = await getData({ id });

  return (
    <div>
      <section className="relative w-full mx-auto h-[489px] ">
        <Image
          src={aktivitetData?.asset?.url}
          alt="Class"
          layout="fill"
          objectFit="cover"
        />
        <TilmeldKnap aktivitet={aktivitetData}/>
      </section>
      
      <section className=" w-[335px] pt-4.5" style={{ margin: "0 auto" }}>
        <Heading
          title={aktivitetData.name}
          fontSize="text-2xl"
          color="text-headingGray"
        />
        <Heading
          title={`${aktivitetData.minAge}-${aktivitetData.maxAge} år`}
          fontSize="text-lg"
          color="text-headingGray"
        />
        <Heading
          title={`${aktivitetData.weekday} - ${aktivitetData.time} `}
          fontSize="text-lg"
          color="text-headingGray"
        />
        <p>
          {aktivitetData.description}
          Vores erfarne instruktører guider dig gennem spændende dansegenrer og
          hjælper dig med at udforske din lidenskab for bevægelse og musik. 
        </p>
      </section>
    </div>
  );
};

export default CardDetail;
