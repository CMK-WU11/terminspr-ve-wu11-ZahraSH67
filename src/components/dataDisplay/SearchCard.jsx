// "use client"; // Mark this component as a Client Component

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";

// const SearchCard = ({ searchFilter }) => {
//   const [aktiviteter, setAktiviteter] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Simulate a delay (optional)
//         await new Promise((resolve) => setTimeout(resolve, 1000));

//         // Fetch data from the API
//         const res = await fetch("http://localhost:4000/api/v1/activities");
//         if (!res.ok) {
//           throw new Error("Failed to fetch data");
//         }

//         const data = await res.json();
//         console.log("Data fetched:", data);

//         // Filter data if searchFilter is provided
//         if (searchFilter) {
//           const filteredData = data.filter((aktivitet) =>
//             aktivitet.name.toLowerCase().includes(searchFilter.toLowerCase())
//           );
//           setAktiviteter(filteredData);
//         } else {
//           setAktiviteter(data);
//         }
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [searchFilter]); // Re-fetch data when searchFilter changes

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error: {error}</p>;
//   }

//   return (
//     <div className="flex flex-col gap-[31px] pt-[31px] pb-[70px]">
//       {aktiviteter && aktiviteter.length > 0 ? (
//         aktiviteter.map((aktivitet) => (
//           <div key={aktivitet.id}>
//             <Link href={`/aktiviteter/${aktivitet.id}`}>
//               <article>
//                 <section className="relative w-auto mx-auto h-[344px]">
//                   {aktivitet.asset && aktivitet.asset.url && (
//                     <Image
//                       src={aktivitet.asset.url}
//                       alt="aktivitet"
//                       fill
//                       style={{
//                         objectFit: "cover",
//                         borderRadius: "40px 40px 0px 40px",
//                       }}
//                     />
//                   )}
//                   <div
//                     className="absolute bottom-0 left-0 bg-[#E1A1E9] w-full h-[96px] flex flex-col justify-center pl-4"
//                     style={{
//                       borderRadius: "0px 40px 0px 40px",
//                       opacity: 0.8,
//                     }}
//                   >
//                     <div className="text-lg pl-[15px]">
//                       <h2>{aktivitet.name}</h2>
//                       <h2>
//                         {aktivitet.minAge}-{aktivitet.maxAge} år
//                       </h2>
//                     </div>
//                   </div>
//                 </section>
//               </article>
//             </Link>
//           </div>
//         ))
//       ) : (
//         <p>
//           Der blev ikke fundet nogle aktiviteter. Prøv at søge efter noget andet.
//         </p>
//       )}
//     </div>
//   );
// };

// export default SearchCard;












"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const SearchCard = ({ searchFilter }) => {
  const [aktiviteter, setAktiviteter] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching data...");
        const res = await fetch("http://localhost:4000/api/v1/activities");
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        console.log("Data fetched:", data);
        if (searchFilter) {
          const filteredData = data.filter((aktivitet) =>
            aktivitet.name.toLowerCase().includes(searchFilter.toLowerCase())
          );
          setAktiviteter(filteredData);
        } else {
          setAktiviteter(data);
        }
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchFilter]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="flex flex-col gap-[31px] pt-[31px] pb-[70px]">
      {aktiviteter && aktiviteter.length > 0 ? (
        aktiviteter.map((aktivitet) => (
          <div key={aktivitet.id}>
            <Link href={`/aktiviteter/${aktivitet.id}`}>
              <article>
                <section className="relative w-auto mx-auto h-[344px]">
                  {aktivitet.asset && aktivitet.asset.url && (
                    <Image
                      src={aktivitet.asset.url}
                      alt="aktivitet"
                      fill
                      style={{
                        objectFit: "cover",
                        borderRadius: "40px 40px 0px 40px",
                      }}
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
        ))
      ) : (
        <p>
          Der blev ikke fundet nogle aktiviteter. Prøv at søge efter noget andet.
        </p>
      )}
    </div>
  );
};

export default SearchCard;