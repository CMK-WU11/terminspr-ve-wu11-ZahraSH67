// "use client";

// import Login from "@/actions/login";
// import { useActionState, useEffect } from "react";
// import { useRouter } from "next/navigation";

// export default function LoginForm() {
//   const [formState, formAction, isPending] = useActionState(Login, null);
//   const router = useRouter();

//   useEffect(() => {
//     // Check if the formState indicates a successful login
//     if (formState?.success) {
//       router.push("/kalender"); // Redirect to the calendar page
//     }
//   }, [formState, router]);

//   return (
//     <form action={formAction} noValidate>
//       <div>
//         <label>
//           <span>Email</span>
//           <input
//             defaultValue={formState?.formData?.identifier}
//             type="email"
//             name="identifier"
//             className="border"
//           />
//         </label>
//         <span className="block text-red-600">
//           {formState?.errors?.identifier?._errors[0]}
//         </span>
//       </div>
//       <div>
//         <label>
//           <span>Adgangskode</span>
//           <input
//             defaultValue={formState?.formData?.password}
//             type="password"
//             name="password"
//             className="border"
//           />
//         </label>
//         <span className="block text-red-600">
//           {formState?.errors?.password?._errors[0]}
//         </span>
//       </div>
//       <span className="text-red-600">{formState?.error}</span>
//       <button
//         disabled={isPending}
//         type="submit"
//         className="p-2 bg-blue-600 disabled:bg-gray-600 text-white rounded-xl"
//       >
//         {isPending ? "Logger ind..." : "Log ind"}
//       </button>
//     </form>
//   );
// }




// "use client";

// import { motion } from "framer-motion";
// import LoginForm from "@/components/LoginForm";
// import Heading from "@/components/Heading";

// const LogInPage = () => {
//   // Animation varianter for sidecontaineren
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { duration: 0.8 } },
//   };

//   return (
//     <motion.div
//       className="w-screen h-screen bg-cover bg-center"
//       style={{ backgroundImage: "url('/loginimage.jpg')" }}
//       variants={containerVariants} // Tilføj variants til motion.div
//       initial="hidden" // Start animation fra 'hidden' state
//       animate="visible" // Animer til 'visible' state
//     >
//       <div className="w-[333px] pt-[271px] mx-auto my-auto">
//         <motion.div
//           variants={containerVariants} // Genbrug containerVariants for konsistens
//           initial="hidden"
//           animate="visible"
//         >
//           <Heading
//             title="Log in"
//             fontSize="text-[48px]"
//             color="text-headingGray"
//           />
//         </motion.div>
//         <motion.div
//           variants={containerVariants} // Genbrug containerVariants for LoginForm
//           initial="hidden"
//           animate="visible"
//         >
//           <LoginForm />
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// };

// export default LogInPage;




"use client";

import { motion } from "framer-motion";
import LoginForm from "@/components/loginform/LoginForm";
import Heading from "@/components/ui/Heading";

const LogInPage = () => {
  // Animation varianter for sidecontaineren
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      className="w-screen h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/loginimage.jpg')" }}
      variants={containerVariants} // Tilføj variants til motion.div
      initial="hidden" // Start animation fra 'hidden' state
      animate="visible" // Animer til 'visible' state
    >
      <div className="w-[333px] pt-[271px] mx-auto my-auto">
        <motion.div
          variants={containerVariants} // Genbrug containerVariants for konsistens
          initial="hidden"
          animate="visible"
        >
          <Heading
            title="Log in"
            fontSize="text-[48px]"
            color="text-headingGray"
          />
        </motion.div>
        <motion.div
          variants={containerVariants} // Genbrug containerVariants for LoginForm
          initial="hidden"
          animate="visible"
        >
          <LoginForm />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LogInPage;
