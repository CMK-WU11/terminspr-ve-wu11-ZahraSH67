"use client";

import { useState, useEffect } from "react";
import Heading from "@/components/ui/Heading";
import DrawerMenu from "@/components/navigation/DrawerMenu";
import { FiSearch } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

const getData = async (searchFilter) => {
  try {
    const res = await fetch("http://localhost:4000/api/v1/activities");
    if (!res.ok) throw new Error("Failed to fetch activities");
    
    const aktiviteter = await res.json();
    if (!searchFilter) return aktiviteter;

    return aktiviteter.filter((aktivitet) => {
      const name = aktivitet.name?.toLowerCase() || "";
      const date = aktivitet.date || "";
      const instructor = aktivitet.instructor?.toLowerCase() || "";
      const hour = aktivitet.hour || "";
      const ageRange = `${aktivitet.minAge}-${aktivitet.maxAge}` || "";
      
      const query = searchFilter.toLowerCase();
      
      return (
        name.includes(query) ||
        date.includes(query) ||
        instructor.includes(query) ||
        hour.includes(query) ||
        ageRange.includes(query)
      );
    });
  } catch (error) {
    console.error(error);
    return [];
  }
};

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getData(searchQuery).then((data) => {
      setResults(data);
      setLoading(false);
    });
  }, [searchQuery]);

  return (
    <main className="p-[28px] bg-[#5E2E53]">
      <Heading title="Søg" fontSize="text-[36px]" color="text-white" />
      <div className="relative w-88 h-11 mt-2 mb-4">
        <input
          type="text"
        className="w-full h-full pr-10 p-2 focus:outline-none rounded"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            border: "none",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            color: "white",
            backdropFilter: "blur(4px)",
          }}
        />
         <FiSearch className="w-5 h-5 text-white absolute right-3 top-1/2 transform -translate-y-1/2" />
      </div>


      <div className="flex flex-col gap-[31px] pt-[31px] pb-[70px]">
  {loading ? (
    <p>Indlæser...</p>
  ) : results.length > 0 ? (
    results.map((aktivitet) => (
      <div key={aktivitet.id}>
        <Link href={`/aktiviteter/${aktivitet.id}`}>
          <article>
            <section className="relative w-auto mx-auto h-[344px]">
              {aktivitet?.asset && aktivitet?.asset?.url && (
                <Image
                  src={aktivitet.asset.url}
                  alt="aktivitet"
                  layout="fill"
                  objectFit="cover"
                  style={{ borderRadius: "40px 40px 0px 40px" }}
                />
              )}
              <div
                className="absolute bottom-0 left-0 bg-[#E1A1E9] w-full h-[96px] flex flex-col justify-center pl-4"
                style={{
                  borderRadius: "0px 40px 0px 40px",
                  opacity: 0.8,
                }}
              >
                <div className="text-lg pl-[15px]">
                  <h2 className="text-lg font-semibold">{aktivitet.name}</h2>
                  <h2>
                    {aktivitet.minAge}-{aktivitet.maxAge} år
                  </h2>
                </div>
              </div>
            </section>
          </article>
        </Link>
      </div>
    ))
  ) : (
    <p>Ingen aktiviteter fundet</p>
  )}
</div>
      <DrawerMenu />
    </main>
  );
};

export default Search;





{/* <div className=" flex flex-col gap-[31px] pt-[31px] pb-[70px]">
{aktiviteter && aktiviteter.length > 0 ? (
  aktiviteter.map((aktivitet) => (
    // <>
      <div key={aktivitet.id}>
        <Link href={`/aktiviteter/${aktivitet.id}`}>
          <article>
            <section className="relative w-auto mx-auto h-[344px] ">
              {aktivitet.asset && aktivitet.asset.url && (
                <Image
                  src={aktivitet.asset.url}
                  alt="aktivitet"
                  layout="fill"
                  objectFit="cover"
                  style={{ borderRadius: "40px 40px 0px 40px" }}
                />
              )}
              <div
                className="absolute bottom-0 left-0 bg-[#E1A1E9] w-full h-[96px] flex flex-col justify-center  pl-4"
                style={{
                  borderRadius: "0px 40px 0px 40px",
                  opacity: 0.8,
                }}
              >
                <div className="text-lg pl-[15px]">
                  <h2>{aktivitet.name}</h2>
                  <h2>
                    {aktivitet.minAge}-{aktivitet.maxAge} år
                  </h2>
                </div>
              </div>
            </section>
          </article>
        </Link>
      </div>
    // </>
  ))
) : (
  <p>
    Der blev ikke fundet nogle aktiviteter. Prøv at søge efter noget
    andet.
  </p>
)}
</div> */}

