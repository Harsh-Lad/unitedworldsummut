"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    alt: "Summit 2024 Opening",
  },
  {
    src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&q=80",
    alt: "Networking Session",
  },
  {
    src: "https://images.unsplash.com/photo-1559223607-a43c990c692c?w=600&q=80",
    alt: "Awards Gala",
  },
  {
    src: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
    alt: "Delegate Dinner",
  },
  {
    src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&q=80",
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
              className="text-gold-600 text-sm tracking-[0.15em] uppercase mb-4"
            >
              Gallery
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-navy-900"
            >
              Moments from Past Summits
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link
              href="/gallery"
              className="group inline-flex items-center gap-2 text-navy-900 font-semibold hover:text-gold-600 transition-colors"
            >
              View all photos
              <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
            <div className="absolute inset-0 bg-linear-to-t from-navy-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
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
