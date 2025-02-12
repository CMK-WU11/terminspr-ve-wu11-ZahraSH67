import { serverFetch } from "@/lib/server-fetch"
import Image from "next/image";
import Heading from "@/components/Heading";
import TilmeldKnap from "@/components/TilmeldKnap";
import Footer from "@/components/Footer";



  export default async function AktivitetDetalje ({params}) {
    if (!params?.id) {
      return <div>Invalid activity ID</div>;
  }
    const aktivitetData = await serverFetch(`http://localhost:4000/api/v1/activities/${params.id}`);
    console.log(aktivitetData)

  
  
    return (
      <>
          <main className="bg-[#5E2E53] text-white mb-[4rem]">
              <section className="relative w-full mx-auto h-[489px] ">
                <Image
                  src={aktivitetData?.asset?.url}
                  alt="Class"
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-x-0 bottom-[2em] flex justify-center">
                <TilmeldKnap aktivitet={aktivitetData} />
                </div>

              </section>
            

         
              <section className=" w-[335px]  p-[1rem]" style={{ margin: "0 auto" }}>
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
            </main>
            <Footer />
      </>
        
    );
    
  }
  
 
  

