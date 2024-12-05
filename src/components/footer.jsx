"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function FooterComponent() {
  return (
    <motion.footer
      className="border-t"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <motion.p
            className="text-center text-sm leading-loose md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Built by MERN Master. The source code is available on{" "}
            <Link
              href="#"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </Link>
            .
          </motion.p>
        </div>
        <motion.p
          className="text-center text-sm md:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          © {new Date().getFullYear()} MERN Master. All rights reserved.
        </motion.p>
      </div>
    </motion.footer>
  );
}
