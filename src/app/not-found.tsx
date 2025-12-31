"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-navy">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto text-center"
        >
          {/* 404 Number */}
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <span className="text-[150px] md:text-[200px] font-bold text-gradient-gold leading-none">
              404
            </span>
          </motion.div>

          <h1 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-white mb-4">
            Page Not Found
          </h1>
          <p className="text-gray-400 text-lg mb-10">
            Sorry, the page you are looking for doesn&apos;t exist or has been moved.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button variant="primary" size="lg" className="group">
                <Home size={20} className="mr-2" />
                Back to Home
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.history.back()}
            >
              <ArrowLeft size={20} className="mr-2" />
              Go Back
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

