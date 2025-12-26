"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ZoomIn } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
    alt: "Summit Conference",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&q=80",
    alt: "Networking Event",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&q=80",
    alt: "Panel Discussion",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1559223607-a43c990c692c?w=400&q=80",
    alt: "Award Ceremony",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=400&q=80",
    alt: "Exhibition Hall",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&q=80",
    alt: "Gala Dinner",
  },
];

export default function GalleryPreview() {
  return (
    <section className="py-24 bg-off-white overflow-hidden">
      <Container>
        <SectionHeader
          title="Events Gallery"
          subtitle="Moments captured from our previous summits and global gatherings"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer ${
                index === 0 || index === 5 ? "aspect-[4/5]" : "aspect-square"
              }`}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="relative w-full h-full"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </motion.div>

              {/* Hover Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-navy-900/70 flex flex-col items-center justify-center transition-all duration-300"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileHover={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="w-12 h-12 rounded-full bg-gold-500 flex items-center justify-center mb-3"
                >
                  <ZoomIn size={20} className="text-navy-900" />
                </motion.div>
                <span className="text-white font-medium text-sm text-center px-4">
                  {image.alt}
                </span>
              </motion.div>

              {/* Shine effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-linear-to-r from-transparent via-white/20 to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link href="/gallery">
            <Button variant="secondary" size="lg" className="group">
              View Full Gallery
              <ArrowRight
                size={20}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </Button>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
