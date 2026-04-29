import Container from "@/components/ui/Container";
import { navigation, siteConfig } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brown-950 border-t border-white/5">
      <Container>
        <div className="py-16">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Brand */}
            <div className="lg:col-span-5">
              <Link href="/" className="inline-block mb-6 group">
                <Image
                  src={"/main.png"}
                  alt="United World Summit"
                  width={180}
                  height={45}
                  className="h-20 w-auto rounded-full transition-opacity group-hover:opacity-80 bg-white p-1"
                />
              </Link>
              <p className="text-white/40 text-sm max-w-sm leading-relaxed">
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
                      className="text-white/40 text-sm hover:text-gold-400 transition-colors"
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
              <div className="space-y-3 text-white/40 text-sm">
                {/* <p>{siteConfig.location}</p> */}
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
        <div className="py-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs">
            &copy; {currentYear} United World Summit. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="text-white/30 text-xs hover:text-gold-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <p className="font-(family-name:--font-good-times) text-white/20 text-[10px] tracking-widest uppercase">
              Organised by United Gate One
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
