"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageTransition({ children }) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      <div key={pathname}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 0.1, duration: 0.8, ease: "easeInOut" },
          }}
          className="h-screen w-screen fixed bg-[#0E4D55] top-0 pointer-events-none"
        />
        {children}
      </div>
    </AnimatePresence>
  );
}
