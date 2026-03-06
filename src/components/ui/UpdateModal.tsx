"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, AlertTriangle } from "lucide-react";
import { useState, useEffect } from "react";

export default function UpdateModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("summit-update-dismissed");
    if (!dismissed) {
      const timer = setTimeout(() => setIsOpen(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("summit-update-dismissed", "true");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={handleClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-brown-950/70 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative w-full max-w-lg bg-white shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Gold accent top bar */}
            <div className="h-1.5 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400" />

            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-1.5 text-brown-950/40 hover:text-brown-950 hover:bg-brown-950/5 rounded-full transition-colors"
              aria-label="Close update modal"
            >
              <X size={20} />
            </button>

            {/* Content */}
            <div className="px-8 pt-8 pb-6">
              {/* Badge */}
              <div className="flex items-center gap-2 mb-5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gold-500/10 text-gold-600 text-xs font-semibold uppercase tracking-wider rounded-full">
                  <AlertTriangle size={13} />
                  Important Update
                </span>
              </div>

              {/* Heading */}
              <h2 className="font-(family-name:--font-good-times) text-xl sm:text-2xl font-bold text-brown-950 mb-5 leading-tight">
                Important Update on Summit 2026
              </h2>

              {/* Divider */}
              <div className="h-px bg-brown-950/10 mb-5" />

              {/* Body */}
              <div className="space-y-4 text-sm text-brown-700 leading-relaxed">
                <p>Dear Delegates</p>
                <p>
                  Due to the evolving geopolitical situation in the region, the
                  United World Summit 2026 has been temporarily placed on hold as
                  a precautionary measure. We want to emphasize —{" "}
                  <strong className="text-brown-950 font-semibold">
                    the summit is NOT canceled.
                  </strong>
                </p>
                <p>
                  Our team is actively finalizing an alternative venue in a
                  secure and accessible location, and we expect to share
                  confirmed details very shortly.
                </p>
                <p>
                  Your invitation and registration remain fully valid. We are as
                  committed as ever to bringing together 1,200+ leaders from 100+
                  countries to shape the future of global development.
                </p>
                <p className="text-brown-950 font-medium">
                  Thank you for your patience and continued trust.
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="px-8 pb-8 pt-2">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleClose}
                className="font-(family-name:--font-good-times) w-full bg-gold-500 text-brown-950 py-3.5 text-sm font-semibold hover:bg-gold-400 transition-colors"
              >
                Acknowledged
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
