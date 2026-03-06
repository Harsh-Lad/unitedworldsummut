import AboutPreview from "@/components/sections/AboutPreview";
import CTA from "@/components/sections/CTA";
import GalleryPreview from "@/components/sections/GalleryPreview";
import Hero from "@/components/sections/Hero";
import Highlights from "@/components/sections/Highlights";
import Sectors from "@/components/sections/Sectors";
import UpdateModal from "@/components/ui/UpdateModal";

export default function Home() {
  return (
    <>
      <UpdateModal />
      <Hero />
      <AboutPreview />
      <Highlights />
      <Sectors />
      <GalleryPreview />
      <CTA />
    </>
  );
}
