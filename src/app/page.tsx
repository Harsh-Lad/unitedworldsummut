import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import AboutPreview from "@/components/sections/AboutPreview";
import Highlights from "@/components/sections/Highlights";
import Sectors from "@/components/sections/Sectors";
import GalleryPreview from "@/components/sections/GalleryPreview";
import BlogPreview from "@/components/sections/BlogPreview";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <AboutPreview />
      <Highlights />
      <Sectors />
      <GalleryPreview />
      <BlogPreview />
      <CTA />
    </>
  );
}
