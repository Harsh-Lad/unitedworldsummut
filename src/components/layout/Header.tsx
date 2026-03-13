"use client";

import Container from "@/components/ui/Container";
import { navigation } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

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
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-brown-950/98 backdrop-blur-md py-2 shadow-lg shadow-brown-950/20"
          : "bg-brown-950 py-3",
      )}
    >
      <Container>
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group">
            <figure className="flex items-center gap-x-3">
              <Image
                src={"/main.png"}
                alt="United World Summit"
                width={200}
                height={200}
                className="h-20 xl:h-24 w-auto transition-transform group-hover:scale-105 bg-white p-1 rounded-full"
                priority
              />
              <figcaption className="font-(family-name:--font-good-times) text-gold-400 text-xs md:text-sm font-bold tracking-wide">
                United World Summit
              </figcaption>
            </figure>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navigation
              .filter((nav) => nav.name !== "Contact")
              .map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "font-(family-name:--font-good-times) text-xs font-bold transition-colors duration-200",
                    pathname === item.href
                      ? "text-gold-400"
                      : "text-white/80 hover:text-gold-400",
                  )}
                >
                  {item.name}
                </Link>
              ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="font-(family-name:--font-good-times) text-xs font-bold text-brown-950 bg-gold-400 px-6 py-3 hover:bg-gold-300 transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gold-400 hover:text-gold-300 transition-colors"
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
            className="lg:hidden absolute top-full left-0 right-0 bg-brown-950 border-t border-white/5 shadow-xl"
          >
            <Container>
              <div className="py-6 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "block py-3 font-(family-name:--font-good-times) text-sm font-medium transition-colors",
                      pathname === item.href
                        ? "text-gold-400"
                        : "text-white/80 hover:text-gold-400",
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
