"use client";

import Container from "@/components/ui/Container";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const categories = ["All", "Conferences", "Networking", "Ceremonies"];

const galleryImages = [
  {
    id: 1,
    title: "Gallery Image 1",
    category: "Ceremonies",
    src: "/gallery/1.webp",
  },
  {
    id: 2,
    title: "Gallery Image 2",
    category: "Conferences",
    src: "/gallery/2.webp",
  },
  {
    id: 3,
    title: "Gallery Image 3",
    category: "Networking",
    src: "/gallery/3.webp",
  },
  {
    id: 4,
    title: "Gallery Image 4",
    category: "Conferences",
    src: "/gallery/4.webp",
  },
  {
    id: 5,
    title: "Gallery Image 5",
    category: "Ceremonies",
    src: "/gallery/5.webp",
  },
  {
    id: 6,
    title: "Gallery Image 6",
    category: "Conferences",
    src: "/gallery/6.webp",
  },
  {
    id: 7,
    title: "Gallery Image 7",
    category: "Networking",
    src: "/gallery/7.webp",
  },
  {
    id: 8,
    title: "Gallery Image 8",
    category: "Ceremonies",
    src: "/gallery/8.webp",
  },
  {
    id: 9,
    title: "Gallery Image 9",
    category: "Conferences",
    src: "/gallery/9.webp",
  },
  {
    id: 10,
    title: "Gallery Image 10",
    category: "Networking",
    src: "/gallery/10.webp",
  },
  {
    id: 11,
    title: "Gallery Image 11",
    category: "Conferences",
    src: "/gallery/11.webp",
  },
  {
    id: 12,
    title: "Gallery Image 12",
    category: "Ceremonies",
    src: "/gallery/12.webp",
  },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const handlePrevious = useCallback(() => {
    if (selectedImage === null) return;
    const currentIndex = filteredImages.findIndex(
      (img) => img.id === selectedImage
    );
    const prevIndex =
      (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex].id);
  }, [selectedImage, filteredImages]);

  const handleNext = useCallback(() => {
    if (selectedImage === null) return;
    const currentIndex = filteredImages.findIndex(
      (img) => img.id === selectedImage
    );
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex].id);
  }, [selectedImage, filteredImages]);

  const selectedImageData = galleryImages.find(
    (img) => img.id === selectedImage
  );

  // Keyboard navigation for lightbox
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      if (e.key === "Escape") setSelectedImage(null);
      if (e.key === "ArrowLeft") handlePrevious();
      if (e.key === "ArrowRight") handleNext();
    },
    [selectedImage, handlePrevious, handleNext]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <>
      {/* Hero */}
      <section className="pt-52 pb-16 bg-brown-900">
        <Container>
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-gold-500 text-sm tracking-[0.2em] uppercase mb-6 font-black"
            >
              Gallery
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight"
            >
              Moments from
              <br />
              our summits
            </motion.h1>
          </div>
        </Container>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-white">
        <Container>
          {/* Filter */}
          <div className="flex flex-wrap gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-sm transition-colors ${
                  activeCategory === category
                    ? "bg-brown-900 text-white"
                    : "text-gray-600 hover:text-brown-900"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="relative aspect-square overflow-hidden cursor-pointer group"
                  onClick={() => setSelectedImage(image.id)}
                >
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-brown-950/0 group-hover:bg-brown-950/40 transition-colors" />
                  <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    {/* <p className="text-white text-sm font-medium">
                      {image.title}
                    </p> */}
                    <p className="text-gray-300 text-xs">{image.category}</p>
                  </div>
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
            className="fixed inset-0 z-50 bg-brown-950/95 flex items-center justify-center p-2 sm:p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              aria-label="Close lightbox"
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-white hover:text-gold-500 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </button>

            <button
              aria-label="Previous image"
              className="absolute left-2 sm:left-4 md:left-8 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-white hover:text-gold-500 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                handlePrevious();
              }}
            >
              <ChevronLeft size={32} />
            </button>

            <button
              aria-label="Next image"
              className="absolute right-2 sm:right-4 md:right-8 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-white hover:text-gold-500 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
            >
              <ChevronRight size={32} />
            </button>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-5xl aspect-video overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImageData.src}
                alt={selectedImageData.title}
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-brown-950 to-transparent p-6">
                <h3 className="text-white text-base md:text-lg font-semibold">
                  {selectedImageData.title}
                </h3>
                <p className="text-gray-400 text-sm">
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
