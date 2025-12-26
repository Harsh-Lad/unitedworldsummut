"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const categories = ["All", "Conferences", "Networking", "Ceremonies", "Exhibitions"];

const galleryImages = [
  { id: 1, title: "Opening Ceremony 2024", category: "Ceremonies", src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80" },
  { id: 2, title: "Panel Discussion", category: "Conferences", src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80" },
  { id: 3, title: "Networking Session", category: "Networking", src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80" },
  { id: 4, title: "Exhibition Hall", category: "Exhibitions", src: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=80" },
  { id: 5, title: "Award Ceremony", category: "Ceremonies", src: "https://images.unsplash.com/photo-1559223607-a43c990c692c?w=800&q=80" },
  { id: 6, title: "Keynote Speech", category: "Conferences", src: "https://images.unsplash.com/photo-1558008258-3256797b43f3?w=800&q=80" },
  { id: 7, title: "Business Meetup", category: "Networking", src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80" },
  { id: 8, title: "Product Showcase", category: "Exhibitions", src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80" },
  { id: 9, title: "Gala Dinner", category: "Ceremonies", src: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80" },
  { id: 10, title: "Workshop Session", category: "Conferences", src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80" },
  { id: 11, title: "VIP Reception", category: "Networking", src: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&q=80" },
  { id: 12, title: "Innovation Display", category: "Exhibitions", src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const handlePrevious = () => {
    if (selectedImage === null) return;
    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex].id);
  };

  const handleNext = () => {
    if (selectedImage === null) return;
    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex].id);
  };

  const selectedImageData = galleryImages.find((img) => img.id === selectedImage);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-navy relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80"
            alt="Gallery"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Events <span className="text-gold-500">Gallery</span>
            </h1>
            <p className="text-lg text-gray-300">
              Explore moments captured from our summits, conferences, and global
              gatherings
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-white">
        <Container>
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "primary" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.03 }}
                  className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group"
                  onClick={() => setSelectedImage(image.id)}
                >
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />

                  {/* Hover Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-navy-900/70 flex flex-col items-center justify-center p-4 transition-all duration-300"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      className="w-12 h-12 rounded-full bg-gold-500 flex items-center justify-center mb-3"
                    >
                      <ZoomIn size={20} className="text-navy-900" />
                    </motion.div>
                    <span className="text-white font-medium text-center text-sm">
                      {image.title}
                    </span>
                    <span className="text-gold-400 text-xs mt-1">
                      {image.category}
                    </span>
                  </motion.div>

                  {/* Shine effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-linear-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </Container>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && selectedImageData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-navy-900/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 text-white hover:bg-gold-500 hover:text-navy-900 transition-colors flex items-center justify-center"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </motion.button>

            {/* Navigation Arrows */}
            <motion.button
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
              className="absolute left-4 md:left-8 w-12 h-12 rounded-full bg-white/10 text-white hover:bg-gold-500 hover:text-navy-900 transition-colors flex items-center justify-center"
              onClick={(e) => {
                e.stopPropagation();
                handlePrevious();
              }}
            >
              <ChevronLeft size={28} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
              className="absolute right-4 md:right-8 w-12 h-12 rounded-full bg-white/10 text-white hover:bg-gold-500 hover:text-navy-900 transition-colors flex items-center justify-center"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
            >
              <ChevronRight size={28} />
            </motion.button>

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImageData.src}
                alt={selectedImageData.title}
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-navy-900 via-navy-900/50 to-transparent p-6">
                <h3 className="text-white text-xl font-bold">
                  {selectedImageData.title}
                </h3>
                <p className="text-gold-400 text-sm">
                  {selectedImageData.category}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
