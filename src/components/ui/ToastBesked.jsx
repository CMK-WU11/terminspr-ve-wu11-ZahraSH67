"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const ToastBesked = ({ besked }) => {
  const [toastBesked, setToastBesked] = useState(null);

  useEffect(() => {
    if (besked) {
      setToastBesked(besked);
      const timer = setTimeout(() => setToastBesked(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [besked]);

  return (
    <div>
      <AnimatePresence>
        {toastBesked && (
          <motion.div
            initial={{ opacity: 0, y: -50 }} // Starter lidt ovenfor synsfeltet
            animate={{ opacity: 1, y: 0 }} // Glider ind til sin startposition
            exit={{ opacity: 0, y: -50 }} // Glider op og bliver gennemsigtig
            transition={{ duration: 0.5, ease: "easeInOut" }} // Glat transition
            className="fixed top-0 left-5 transform -translate-x-1/2 bg-red-500 text-white text-sm font-medium py-2 px-4 rounded-md shadow-lg z-50" // Gør stilen mere neutral og integreret
            style={{ maxWidth: "90%", width: "auto" }} // Sikrer, at boksen ikke er for bred og passer til de fleste skærmstørrelser
          >
            {toastBesked}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ToastBesked;
