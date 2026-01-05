"use client";

import Container from "@/components/ui/Container";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const galleryImages = [
  {
    src: "/gallery/7.webp",
    alt: "Summit Opening",
  },
  {
    src: "/gallery/3.webp",
    alt: "Networking Session",
  },
  {
    src: "/gallery/5.webp",
    alt: "Awards Gala",
  },
  {
    src: "/gallery/2.webp",
    alt: "Delegate Dinner",
  },
  {
    src: "/gallery/4.webp",
    alt: "Panel Discussion",
  },
];

export default function GalleryPreview() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gold-500 text-sm tracking-[0.15em] uppercase mb-4"
            >
              Gallery
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl font-bold text-brown-950"
            >
              Moments from the Summit
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link
              href="/gallery"
              className="group inline-flex items-center gap-2 text-brown-950 font-semibold hover:text-gold-600 transition-colors"
            >
              View all photos
              <ArrowUpRight
                size={18}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </Link>
          </motion.div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {/* Large - spans 2 cols, 2 rows */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="col-span-2 row-span-2 relative overflow-hidden group aspect-square"
          >
            <Image
              src={galleryImages[0].src}
              alt={galleryImages[0].alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-brown-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <p className="absolute bottom-4 left-4 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
              {galleryImages[0].alt}
            </p>
          </motion.div>

          {/* Top right */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="col-span-1 relative overflow-hidden group aspect-square"
          >
            <Image
              src={galleryImages[1].src}
              alt={galleryImages[1].alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </motion.div>

          {/* Top right corner */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="col-span-1 relative overflow-hidden group aspect-square"
          >
            <Image
              src={galleryImages[2].src}
              alt={galleryImages[2].alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </motion.div>

          {/* Wide bottom right - spans 2 cols */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="col-span-2 relative overflow-hidden group aspect-2/1"
          >
            <Image
              src={galleryImages[3].src}
              alt={galleryImages[3].alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
