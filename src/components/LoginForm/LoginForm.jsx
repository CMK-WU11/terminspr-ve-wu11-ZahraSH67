// "use client";

// import { motion } from "framer-motion";
// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { useAuth } from "@/app/auth/context";
// import { useRouter } from "next/navigation";
// import ToastBesked from "../ui/ToastBesked";

// const LoginForm = () => {
//   const { login, loading } = useAuth();
//   const router = useRouter();
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     resetField,
//   } = useForm();
//   const [loginError, setLoginError] = useState("");

//   const onSubmit = async (data) => {
//     setLoginError("");
//     try {
//       await login(data.brugernavn, data.adgangskode);
//       router.push("/kalender");
//     } catch (error) {
//       console.error("Login fejlede: ", error);
//       setLoginError("Forkert brugernavn eller adgangskode. Prøv igen!");
//       //setTimeout(() => setLoginError(""), 3000); // Fjern fejlbeskeden efter 3 sekunder
//     }
//   };

//   const shakeAnimation = {
//     shake: {
//       x: [0, -20, 20, -20, 20, 0],
//       transition: { duration: 0.5 },
//     },
//   };
//   const spinnerAnimation = {
//     rotate: 360,
//     transition: {
//       loop: Infinity,
//       ease: "linear",
//       duration: 1,
//     },
//   };

//   return (
//     <article>
//       <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
//         <motion.input
//           {...register("brugernavn", { required: true })}
//           placeholder="brugernavn"
//           className={`pl-[22px] w-[335px] h-[50px] bg-[#FBFBFB] ${
//             errors.brugernavn ? "border-red-500" : "border-[#5e1e63]"
//           } focus:outline-none`}
//           disabled={loading}
//           variants={shakeAnimation}
//           animate={errors.brugernavn ? "shake" : undefined}
//           onClick={() => resetField("brugernavn")}
//         />

//         <motion.input
//           {...register("adgangskode", { required: true })}
//           type="password"
//           placeholder="adgangskode"
//           className={`pl-[22px] w-[335px] h-[50px] bg-[#FBFBFB] border ${
//             errors.adgangskode ? "border-red-500" : "border-[#D4D4D4]"
//           } focus:outline-none`}
//           disabled={loading}
//           variants={shakeAnimation}
//           animate={errors.adgangskode ? "shake" : undefined}
//           onClick={() => resetField("adgangskode")}
//         />

//         <div className="flex justify-center ">
//           <button
//             type="submit"
//             className="text-[#E5E5E5] py-2 px-4 rounded-lg w-[250px] h-[54px] text-lg bg-[#5E2E53] flex justify-center items-center relative"
//             disabled={loading}
//           >
//             {loading ? (
//               <>
//                 <motion.svg
//                   animate={spinnerAnimation}
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6 animate-spin mr-2"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                 >
//                   <circle
//                     className="opacity-25"
//                     cx="12"
//                     cy="12"
//                     r="10"
//                     stroke="currentColor"
//                     strokeWidth="4"
//                   ></circle>
//                   <path
//                     className="opacity-75"
//                     fill="currentColor"
//                     d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                   ></path>
//                 </motion.svg>
//                 Logger ind...
//               </>
//             ) : (
//               "Log ind"
//             )}
//           </button>

//           {loginError && <ToastBesked besked={loginError} />}
//         </div>
//       </form>
//     </article>
//   );
// };

// export default LoginForm;





"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "@/app/auth/context";
import { useRouter } from "next/navigation";
import ToastBesked from "../ui/ToastBesked";

const LoginForm = () => {
  const { login, loading } = useAuth();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
  } = useForm();
  const [loginError, setLoginError] = useState("");

  const onSubmit = async (data) => {
    setLoginError("");

    // Kontrollér om brugernavn og adgangskode er udfyldt
    if (!data.brugernavn && !data.adgangskode) {
      setLoginError("Indtast brugernavn og adgangskode!");
      return;
    }
    if (!data.brugernavn) {
      setLoginError("Indtast brugernavn!");
      return;
    }
    if (!data.adgangskode) {
      setLoginError("Indtast adgangskode!");
      return;
    }

    try {
      // Kald login funktionen
      const response = await login(data.brugernavn, data.adgangskode);

      // Tjek status på svaret baseret på kode eller fejlmeddelelse
      if (response && response.status === 200) {
        // Hvis HTTP status er 200, login er succesfuld
        router.push("/kalender");
      } else {
        // Hvis status ikke er 200, vis login fejl
        setLoginError("Forkert brugernavn eller adgangskode. Prøv venligst igen!");
      }
    } catch (error) {
      console.error("Login mislykkedes: ", error);
      setLoginError("Serverfejl, prøv venligst igen.");
    }
  };

  const shakeAnimation = {
    shake: {
      x: [0, -20, 20, -20, 20, 0],
      transition: { duration: 0.5 },
    },
  };
  const spinnerAnimation = {
    rotate: 360,
    transition: {
      loop: Infinity,
      ease: "linear",
      duration: 1,
    },
  };

  return (
    <article>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <motion.input
          {...register("brugernavn", { required: true })}
          placeholder="brugernavn"
          className={`pl-[22px] w-[335px] h-[50px] bg-[#FBFBFB] ${
            errors.brugernavn ? "border-red-500" : "border-[#5e1e63]"
          } focus:outline-none`}
          disabled={loading}
          variants={shakeAnimation}
          animate={errors.brugernavn ? "shake" : undefined}
          onClick={() => resetField("brugernavn")}
        />

        <motion.input
          {...register("adgangskode", { required: true })}
          type="password"
          placeholder="adgangskode"
          className={`pl-[22px] w-[335px] h-[50px] bg-[#FBFBFB] border ${
            errors.adgangskode ? "border-red-500" : "border-[#D4D4D4]"
          } focus:outline-none`}
          disabled={loading}
          variants={shakeAnimation}
          animate={errors.adgangskode ? "shake" : undefined}
          onClick={() => resetField("adgangskode")}
        />

        <div className="flex justify-center ">
          <button
            type="submit"
            className="text-[#E5E5E5] py-2 px-4 rounded-lg w-[250px] h-[54px] text-lg bg-[#5E2E53] flex justify-center items-center relative"
            disabled={loading}
          >
            {loading ? (
              <>
                <motion.svg
                  animate={spinnerAnimation}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 animate-spin mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </motion.svg>
                Logger ind...
              </>
            ) : (
              "Log ind"
            )}
          </button>

          {loginError && <ToastBesked besked={loginError} />}
        </div>
      </form>
    </article>
  );
};

export default LoginForm;
