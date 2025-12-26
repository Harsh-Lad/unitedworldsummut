import Link from "next/link";
import { Mail, MapPin, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import { navigation, siteConfig, socialLinks } from "@/lib/constants";
import Container from "@/components/ui/Container";

const iconMap: Record<string, typeof Linkedin> = {
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-white">
      {/* Main Footer */}
      <div className="py-16 border-b border-navy-700">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-gold-500 rounded-lg flex items-center justify-center text-navy-900 font-bold text-xl">
                  U
                </div>
                <div>
                  <span className="text-white font-bold text-lg">United</span>
                  <span className="text-gold-500 font-bold text-lg ml-1">
                    World Summit
                  </span>
                </div>
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {siteConfig.description}
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = iconMap[social.icon];
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center text-gray-400 hover:bg-gold-500 hover:text-navy-900 transition-all duration-300"
                      aria-label={social.name}
                    >
                      {Icon && <Icon size={18} />}
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-400 hover:text-gold-500 transition-colors text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Summit Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">
                Summit 2026
              </h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <span className="text-gold-500">1000+</span> Global Attendees
                </li>
                <li>
                  <span className="text-gold-500">19</span> Industry Sectors
                </li>
                <li>
                  <span className="text-gold-500">34</span> Round Tables
                </li>
                <li>
                  <span className="text-gold-500">100+</span> Countries
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">
                Contact Us
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin
                    size={18}
                    className="text-gold-500 mt-1 flex-shrink-0"
                  />
                  <span className="text-gray-400 text-sm">
                    {siteConfig.location}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail
                    size={18}
                    className="text-gold-500 mt-1 flex-shrink-0"
                  />
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-gray-400 hover:text-gold-500 transition-colors text-sm"
                  >
                    {siteConfig.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Bar */}
      <div className="py-6">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} {siteConfig.name}. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-500">
              <Link href="#" className="hover:text-gold-500 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-gold-500 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
