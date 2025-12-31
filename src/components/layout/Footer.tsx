import Link from "next/link";
import Image from "next/image";
import { navigation, siteConfig } from "@/lib/constants";
import Container from "@/components/ui/Container";
import logo from "../../../public/logo.png"

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 border-t border-navy-800">
      <Container>
        <div className="py-16">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Brand */}
            <div className="lg:col-span-5">
              <Link href="/" className="inline-block mb-6">
                <Image
                  src={logo}
                  alt="United World Summit"
                  width={180}
                  height={45}
                  className="h-24 w-auto"
                />
              </Link>
              <p className="text-gray-500 max-w-sm leading-relaxed">
                Connecting global leaders, fostering collaboration,
                and driving sustainable development across borders.
              </p>
            </div>

            {/* Links */}
            <div className="lg:col-span-3">
              <p className="text-gray-500 text-sm uppercase tracking-wider mb-4">
                Navigate
              </p>
              <ul className="space-y-3">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="lg:col-span-4">
              <p className="text-gray-500 text-sm uppercase tracking-wider mb-4">
                Contact
              </p>
              <div className="space-y-3 text-gray-400">
                <p>{siteConfig.location}</p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="block hover:text-green-500 transition-colors"
                >
                  {siteConfig.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-6 border-t border-navy-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            &copy; {currentYear} United World Summit
          </p>
          <div className="flex gap-8 text-sm text-gray-600">
            <Link href="#" className="hover:text-gray-400 transition-colors">
              Privacy
            </Link>
            <Link href="#" className="hover:text-gray-400 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
