"use client"

import { useState } from 'react'; // Importer useState hook
import { motion } from 'framer-motion';

const Button = ({ title, onClick, animate }) => {
  // Tilføj en tilstand for at spore om knappen skal være deaktiveret
  const [isDisabled, setIsDisabled] = useState(animate);

  // Definer animationsopsætningen med tilføjelse af onAnimationComplete
  const animationProps = animate
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 1.5, delay: 1.5 },
        onAnimationComplete: () => setIsDisabled(false) // Aktiver knappen når animationen er færdig
      }
    : {}; // Hvis ikke 'animate', så ingen animation og knappen er ikke deaktiveret fra starten

  return (
    <motion.div {...animationProps}>
      <button
        disabled={isDisabled} // Brug isDisabled tilstand til at kontrollere om knappen er deaktiveret
        className={`text-white py-2 px-4 rounded-lg w-[250px]  ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        style={{
          backgroundColor: "#5E2E53",
          borderRadius: "10px",
          fontSize: "18px",
        }}
        onClick={onClick}
      >
        {title}
      </button>
    </motion.div>
  );
};

export default Button;

