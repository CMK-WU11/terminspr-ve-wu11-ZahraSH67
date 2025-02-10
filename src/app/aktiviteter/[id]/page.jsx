import { serverFetch } from "@/lib/server-fetch"
import Image from "next/image";
import Heading from "@/components/Heading";
import HomeButton from "@/components/HomeButton";



  export default async function  AktivitetDetalje ({params}) {
    const aktivitetData = await serverFetch(`http://localhost:4000/api/v1/activities/${params.id}`);
    console.log(aktivitetData)

  
  
    return (
        <div className="bg-[#5E2E53] text-white">
              <section className="relative w-full mx-auto h-[489px] flex justify-center">
                <Image
                  src={aktivitetData.asset.url}
                  alt="Class"
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute bottom-[2em]">
                <HomeButton title="Tilmeld" /> 
                </div>

              </section>
            

         
              <section className=" w-[335px]  p-[1rem]" style={{ margin: "0 auto" }}>
                <Heading
                  title={aktivitetData.name}
                  fontSize="text-2xl"
                  color="text-headingGray"
                />
                <Heading
                  title={`  ${aktivitetData.minAge}-${aktivitetData.maxAge} år`}
                  fontSize="text-lg"
                  color="text-headingGray"
                />
                {/* <Heading
                  title={`${aktivitetData.weekday} - ${aktivitetData.time} `}
                  fontSize="text-lg"
                  color="text-headingGray"
                /> */}
                <p>
                  {aktivitetData.description}
                  Vores erfarne instruktører guider dig gennem spændende dansegenrer og
                  hjælper dig med at udforske din lidenskab for bevægelse og musik. 
                </p>
              </section>
            </div>
    );
    
  }
  
 
  

