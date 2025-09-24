import React from "react";
import { motion } from "framer-motion";

export default function AnimatedGlobe() {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      style={{
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }}
    >
      <motion.circle
        cx="12"
        cy="12"
        r="10"
        animate={{
          pathLength: [0.5, 1, 0.5],
          rotate: 360,
        }}
        transition={{
          pathLength: {
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          },
          rotate: {
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      />

      <motion.path
        d="M12 2a14.5 14.5 0 0 0 0 20"
        animate={{
          pathLength: [0, 1, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.path
        d="M12 2a14.5 14.5 0 0 1 0 20"
        animate={{
          pathLength: [0, 1, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.path
        d="M2 12h20"
        animate={{
          pathLength: [0, 1, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />

      <motion.path
        d="M12 2v20"
        animate={{
          pathLength: [0, 1, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </motion.svg>
  );
}
