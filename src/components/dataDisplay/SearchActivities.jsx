// "use client";

// import { useState, useEffect, Suspense } from "react";
// import SearchCard from "./SearchCard";
// import { FiSearch } from "react-icons/fi";
// import Heading from "@/components/ui/Heading";
// // import Loading from "../ui/Loading";

// function SearchActivities() {
//   const [searchTerm, setSearchTerm] = useState("");

//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   return (
//     <div className="p-[32px]">
//       <Heading title="Søg" fontSize="text-4xl" color="text-headingGray" />
//       <div className="relative w-88 h-11 mt-2">
   
//         <input
//           type="text"
//           value={searchTerm}
//           onChange={handleSearchChange}
//           className="w-full h-full pr-10 p-2 focus:outline-none rounded"
//           style={{
//             border: "none",
//             backgroundColor: "rgba(255, 255, 255, 0.2)",
//             color: "white",
//             backdropFilter: "blur(4px)",
//           }}
//         />
//         <FiSearch className="w-5 h-5 text-white absolute right-3 top-1/2 transform -translate-y-1/2" />
//       </div>

//       {searchTerm.length > 0 ? (

//         // <Suspense fallback={<Loading loadingBesked={"Søger aktiviteter..."} />}>

//           <SearchCard searchFilter={searchTerm} />

//         // </Suspense>

//       ) : (
//         ""
//       )}

//     </div>
//   );
// }

// export default SearchActivities;








"use client";

import { useState } from "react";
import SearchCard from "./SearchCard";
import { FiSearch } from "react-icons/fi";
import Heading from "@/components/ui/Heading";

function SearchActivities() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="p-[32px]">
      <Heading title="Søg" fontSize="text-4xl" color="text-headingGray" />
      <div className="relative w-88 h-11 mt-2">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full h-full pr-10 p-2 focus:outline-none rounded"
          style={{
            border: "none",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            color: "white",
            backdropFilter: "blur(4px)",
          }}
        />
        <FiSearch className="w-5 h-5 text-white absolute right-3 top-1/2 transform -translate-y-1/2" />
      </div>

      {searchTerm.length > 0 && <SearchCard searchFilter={searchTerm} />}
    </div>
  );
}

export default SearchActivities;