import Container from "@/components/ui/Container";
import { navigation, siteConfig } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo1.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brown-950 border-t border-brown-800">
      <Container>
        <div className="py-16">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Brand */}
            <div className="lg:col-span-5">
              <Link href="/" className="inline-block mb-6 group">
                <Image
                  src={logo}
                  alt="United World Summit"
                  width={180}
                  height={45}
                  className="h-24 w-auto rounded-full transition-opacity group-hover:opacity-80"
                />
              </Link>
              <p className="text-gold-200 text-xs md:text-sm max-w-sm leading-relaxed">
                Connecting global leaders, fostering collaboration, and
                advancing sustainable development across borders.
              </p>
            </div>

            {/* Links */}
            <div className="lg:col-span-3">
              <p className="font-(family-name:--font-good-times) text-white text-xs tracking-wider mb-4 font-semibold">
                Navigate
              </p>
              <ul className="space-y-3">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gold-100 text-xs md:text-sm hover:text-gold-400 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="lg:col-span-4">
              <p className="font-(family-name:--font-good-times) text-white text-xs tracking-wider mb-4 font-semibold">
                Contact
              </p>
              <div className="space-y-3 text-gold-100 text-xs md:text-sm">
                <p>{siteConfig.location}</p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="block hover:text-gold-400 transition-colors"
                >
                  {siteConfig.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-6 border-t border-brown-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white text-xs">
            &copy; {currentYear} United World Summit
          </p>
        </div>
      </Container>
    </footer>
  );
}
