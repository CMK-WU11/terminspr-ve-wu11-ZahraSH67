// // components/kalender/Kalender.jsx (Client Component)
// "use client";

// import { Suspense, useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import UserHold from "./UserHold";
// import InstructorHold from "./InstructorHold";
// import Heading from "../ui/Heading";
// import DrawerMenu from "@/components/navigation/DrawerMenu"
// import Loading from "../ui/Loading";
// import { IoLogOutOutline } from "react-icons/io5";
// import { useAuth } from "@/app/auth/context";

// const Kalender = ({ currentUser, activities }) => {
//   const { logout } = useAuth();
//   const [showUserHold, setShowUserHold] = useState(false);
//   const [showInstructorHold, setShowInstructorHold] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     if (!currentUser) {
//       router.push("/login");
//     } else {
//       if (currentUser?.role === "default") {
//         setShowUserHold(true);
//       } else {
//         setShowInstructorHold(true);
//       }
//     }
//   }, [currentUser, router]);

//   return (
//     <div className="p-[28px] flex flex-col">
//       <div className="flex justify-between items-center mb-4">
//         <Heading title="Kalender" fontSize="text-[36px]" color="text-headingGray" />
//         {currentUser && (
//           <button
//             onClick={() => {
//               logout();
//               setShowUserHold(false);
//               setShowInstructorHold(false);
//             }}
//             className="flex items-center gap-2 bg-[#E9E9E9] hover:bg-gray-100 text-[#5E2E53] font-bold py-2 px-4 rounded border border-[#5E2E53]"
//           >
//             <IoLogOutOutline className="text-lg text-[#5E2E53]" /> Log ud
//           </button>
//         )}
//       </div>

//       {showUserHold && (
//         <Suspense fallback={<Loading loadingBesked="Henter dine hold ..." />}>
//           <UserHold activities={activities} />
//         </Suspense>
//       )}

//       {showInstructorHold && (
//         <Suspense fallback={<Loading loadingBesked="Henter instruktør hold ..." />}>
//           <InstructorHold user={currentUser} />
//         </Suspense>
//       )}

//       <DrawerMenu />
//     </div>
//   );
// };

// export default Kalender;
