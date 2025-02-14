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
          variants={containerVariants} 
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
