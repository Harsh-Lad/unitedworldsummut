"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { navigation } from "@/lib/constants";
import Container from "@/components/ui/Container";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-navy-900/95 backdrop-blur-sm py-4"
          : "bg-transparent py-6"
      )}
    >
      <Container>
        <nav className="flex items-center justify-between">
          {/* Logo - text only, cleaner */}
          <Link href="/" className="group">
            <span className="text-white text-lg tracking-tight">
              United
            </span>
            <span className="text-gold-500 text-lg tracking-tight ml-1">
              World Summit
            </span>
          </Link>

          {/* Desktop Navigation - minimal */}
          <div className="hidden lg:flex items-center gap-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm transition-colors",
                  pathname === item.href
                    ? "text-gold-500"
                    : "text-gray-400 hover:text-white"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA - simple text link */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="text-sm text-white hover:text-gold-400 transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-gold-500 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-navy-900 border-t border-navy-800"
          >
            <Container>
              <div className="py-6 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "block py-3 text-base transition-colors",
                      pathname === item.href
                        ? "text-gold-500"
                        : "text-gray-400 hover:text-white"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  className="block py-3 text-base text-gold-500"
                >
                  Contact
                </Link>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
