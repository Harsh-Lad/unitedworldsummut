import AboutPreview from "@/components/sections/AboutPreview";
import CTA from "@/components/sections/CTA";
import GalleryPreview from "@/components/sections/GalleryPreview";
import Hero from "@/components/sections/Hero";
import Highlights from "@/components/sections/Highlights";
import Sectors from "@/components/sections/Sectors";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <Highlights />
      <Sectors />
      <GalleryPreview />
      {/* <BlogPreview /> */}
      <CTA />
    </>
  );
}
