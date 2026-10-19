"use client";

import BookingForm from "@/components/dubai/BookingForm";
import Container from "@/components/ui/Container";
import { attendance, dubaiSummit, formatINR } from "@/lib/dubai-summit";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  BarChart3,
  Calendar,
  Check,
  CirclePlay,
  Compass,
  Globe,
  GraduationCap,
  Handshake,
  Hotel,
  Landmark,
  Lightbulb,
  MapPin,
  Mic,
  Plane,
  Radio,
  Star,
  Ticket,
  Trophy,
  Tv,
  User,
  Users,
} from "lucide-react";
import Image from "next/image";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6 },
};

const stakeholders = [
  { name: "Government & Public Service", icon: Landmark },
  { name: "Business & Industry", icon: Handshake },
  { name: "Innovation & Entrepreneurship", icon: Lightbulb },
  { name: "Academia & Healthcare", icon: GraduationCap },
  { name: "Media, Arts & Social Activism", icon: Mic },
];

const institutions = ["United Nations", "African Union", "European Union", "BRICS"];

const overview = [
  {
    icon: BarChart3,
    title: "Bharat Uday",
    text: "A distinguished platform celebrating India's journey of growth, progress and transformation, bringing together visionary leaders, accomplished professionals and changemakers contributing to India's evolution into a Viksit Bharat.",
  },
  {
    icon: Users,
    title: "The Dubai Edition",
    text: "United Gate One convenes the United Economic Summit 2026 in Dubai: a high-level strategic forum for dialogue, international engagement, sustainable economic growth and cross-border collaboration.",
  },
  {
    icon: Globe,
    title: "Global Participation",
    text: "Representatives associated with the United Nations, African Union, European Union and BRICS, alongside diplomats, economists, policymakers, business leaders and intellectuals.",
  },
  {
    icon: Handshake,
    title: "Partnerships & Pathways",
    text: "A platform to exchange perspectives, share expertise, build strategic partnerships and identify actionable pathways for inclusive and sustainable development.",
  },
];

const dubaiFrames = [
  { src: "/dubai/burj-al-arab.webp", title: "Burj Al Arab", sub: "Jumeirah coastline", className: "md:col-span-2 md:row-span-2" },
  { src: "/dubai/museum-of-the-future.webp", title: "Museum of the Future", sub: "Sheikh Zayed Road", className: "" },
  { src: "/dubai/downtown-palms.webp", title: "Downtown Dubai", sub: "Burj Khalifa district", className: "md:row-span-2" },
  { src: "/dubai/dubai-frame.webp", title: "Dubai Frame", sub: "Zabeel Park", className: "md:col-span-1" },
];

const objectives = [
  {
    icon: Trophy,
    title: "Honour Achievers",
    text: "Recognise outstanding leaders, entrepreneurs, innovators and changemakers whose contributions have strengthened India's economic, social and institutional development.",
  },
  {
    icon: Users,
    title: "Share Journeys",
    text: "Leadership interactions and panel discussions highlighting the journeys, philosophies, challenges and aspirations of individuals shaping India's progress on the global stage.",
  },
  {
    icon: Star,
    title: "Inspire What's Next",
    text: "Celebrate excellence, encourage innovation, promote responsible leadership and inspire the next generation to create lasting value for society and the economy.",
  },
];

const discussionAreas = [
  "Legacy and Institutional Vision",
  "Vision for United World Summit 2027",
  "Addis Ababa as a Strategic Venue",
  "Building Global Partnerships",
  "From Dialogue to Action",
  "India's Role in the Global Economy",
];

const mediaFacts = [
  {
    icon: User,
    title: "Leadership & Editorial Excellence",
    text: "Led by Founder & Editor-in-Chief Dr. Jagdeesh Chandra (Former IAS, Former CEO of ETV Network, part of Network18, and Former CEO of Zee Network).",
  },
  {
    icon: Users,
    title: "National Conclaves & Campaigns",
    text: "80+ multi-city conclaves and campaigns engaging leaders, policymakers, thought leaders, influencers and Bollywood personalities.",
  },
  {
    icon: CirclePlay,
    title: "Digital Reach",
    text: "3.64 million YouTube subscribers, 890,000+ Instagram followers and a growing audience across social platforms.",
  },
  {
    icon: Radio,
    title: "Distribution & Brand Associations",
    text: "On major DTH and 12 prominent CTV platforms. Associated with MSIL, MoUPI, TVS, Tata Mutual Funds, Patanjali, Paytm, Reliance, Adani, SBI, CII and others.",
  },
];

const packageCards = [
  { src: "/dubai/flight.webp", icon: Plane, title: "Return Air Ticket", text: "Return economy airfare from India to Dubai." },
  { src: "/dubai/hotel-pool.webp", icon: Hotel, title: "2 Nights / 3 Days Stay", text: "Accommodation at a 4 or 5 star hotel in Dubai." },
  { src: "/dubai/desert-caravan.webp", icon: Compass, title: "Dubai Tour & Desert Safari", text: "A guided Dubai city tour and an evening in the Arabian desert." },
  { src: "/dubai/conference.webp", icon: Ticket, title: "Summit Entry", text: "Entry to the United Economic Summit 2026, Dubai." },
];

const desertStrip = [
  { src: "/dubai/desert-4x4.webp", title: "Across the Dunes" },
  { src: "/dubai/desert-falcon.webp", title: "Desert Heritage" },
  { src: "/dubai/desert-fire-show.webp", title: "Evenings Under the Stars" },
];

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <motion.p
      {...fadeInUp}
      className={`inline-flex items-center gap-3 text-xs tracking-[0.25em] uppercase mb-4 ${
        light ? "text-gold-300" : "text-gold-600"
      }`}
    >
      <span className={`h-px w-8 ${light ? "bg-gold-300" : "bg-gold-500"}`} />
      {children}
    </motion.p>
  );
}

function SectionTitle({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <motion.h2
      {...fadeInUp}
      transition={{ duration: 0.6, delay: 0.05 }}
      className={`font-(family-name:--font-good-times) text-xl md:text-2xl lg:text-3xl font-bold leading-tight mb-6 ${
        light ? "text-white" : "text-brown-950"
      }`}
    >
      {children}
    </motion.h2>
  );
}

export default function DubaiSummitContent() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative min-h-[100svh] flex items-end bg-black overflow-hidden">
        <motion.div
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.4, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src="/dubai/hero.webp"
            alt="Dubai skyline with Burj Khalifa at dusk"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-brown-950/20 to-transparent" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-500 via-gold-300 to-gold-500" />

        <Container className="relative z-10 pt-44 pb-40 md:pb-44">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-8"
            >
              <span className="w-2 h-2 bg-gold-400 rounded-full animate-[pulse_2s_ease-in-out_infinite]" />
              <span className="text-gold-200 text-[11px] font-semibold tracking-[0.2em] uppercase">
                Delegate bookings open · {dubaiSummit.edition}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="font-(family-name:--font-good-times) text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.05] mb-6"
            >
              United Economic
              <br />
              Summit <span className="text-gold-400">2026</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-white/80 text-base md:text-lg max-w-xl mb-8 leading-relaxed"
            >
              {dubaiSummit.theme}. A global platform for dialogue, partnership and sustainable growth in the heart
              of Dubai.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 px-4 py-2.5 rounded-full text-white text-sm">
                <Calendar size={16} className="text-gold-400" /> {dubaiSummit.dateLabel}
              </span>
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 px-4 py-2.5 rounded-full text-white text-sm">
                <MapPin size={16} className="text-gold-400" /> {dubaiSummit.city}
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row sm:items-center gap-5"
            >
              <a
                href="#book"
                className="font-(family-name:--font-good-times) group inline-flex items-center justify-center gap-3 bg-gold-500 text-brown-950 px-8 py-4 font-semibold hover:bg-gold-400 transition-colors rounded-sm shadow-xl shadow-black/30"
              >
                Book Your Delegate Package
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#package" className="text-white/80 hover:text-white text-sm transition-colors">
                <span className="font-(family-name:--font-good-times) text-gold-300">
                  {formatINR(dubaiSummit.pricePerDelegate)}
                </span>{" "}
                per delegate · see what&apos;s included
              </a>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ─── STATS (overlapping hero) ─── */}
      <section className="relative z-20 -mt-24 md:-mt-28">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="grid grid-cols-2 lg:grid-cols-4 bg-white rounded-2xl shadow-2xl shadow-black/15 overflow-hidden"
          >
            {attendance.map((a, i) => (
              <div
                key={a.label}
                className={`p-6 md:p-8 text-center border-gray-100 ${i % 2 === 0 ? "border-r" : ""} ${
                  i < 3 ? "lg:border-r" : "lg:border-r-0"
                } ${i < 2 ? "border-b lg:border-b-0" : ""}`}
              >
                <p
                  className={`font-(family-name:--font-good-times) font-bold text-brown-950 ${
                    /^[0-9,]+$/.test(a.value) ? "text-3xl md:text-4xl" : "text-xs sm:text-base md:text-lg lg:text-xl"
                  }`}
                >
                  {a.value}
                </p>
                <p className="text-gray-500 text-[11px] uppercase tracking-wider mt-2">{a.label}</p>
              </div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* ─── ORGANISER + MEDIA PARTNER ─── */}
      <section className="pt-14 pb-10 bg-white">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
            <div className="flex flex-col items-center gap-2">
              <span className="text-gray-400 text-[10px] uppercase tracking-widest">Organised by</span>
              <Image src="/dubai/ugo-logo.png" alt="United Gate One" width={345} height={176} className="h-20 w-auto mix-blend-multiply" />
            </div>
            <div className="hidden sm:block w-px h-16 bg-gray-200" />
            <div className="flex flex-col items-center gap-2">
              <span className="text-gray-400 text-[10px] uppercase tracking-widest">Media Partner & Bharat Uday Platform</span>
              <Image src="/dubai/bharat24-logo.png" alt="Bharat 24, Vision of New India" width={266} height={116} className="h-16 w-auto" />
            </div>
          </div>
        </Container>
      </section>

      {/* ─── 1. EXECUTIVE OVERVIEW ─── */}
      <section className="py-24 bg-white">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <Eyebrow>01 · Executive Overview</Eyebrow>
              <SectionTitle>
                A High-Level Forum
                <br />
                <span className="text-brown-950/40">in the Heart of Dubai</span>
              </SectionTitle>
              <div className="space-y-6 mt-8">
                {overview.map((item, i) => (
                  <motion.div
                    key={item.title}
                    {...fadeInUp}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="flex gap-5"
                  >
                    <div className="flex-shrink-0 w-11 h-11 rounded-full bg-brown-950 flex items-center justify-center ring-4 ring-gold-100">
                      <item.icon size={18} className="text-gold-400" />
                    </div>
                    <div>
                      <h3 className="font-(family-name:--font-good-times) text-sm font-semibold text-brown-950 mb-1.5">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div {...fadeInUp} className="lg:col-span-6 relative">
              <div className="relative aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/mr-sachin-katarnawre.jpeg"
                  alt="Mr. Sachin Katarnawre, CMD, United Gate One, at the UN Economic Commission for Africa, Addis Ababa"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-[center_30%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <p className="text-gold-300 text-[11px] uppercase tracking-widest mb-3">Institutional representation</p>
                  <div className="flex flex-wrap gap-2">
                    {institutions.map((name) => (
                      <span
                        key={name}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/15 backdrop-blur-md border border-white/20 text-white text-xs rounded-full"
                      >
                        <Globe size={12} className="text-gold-300" />
                        {name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hidden md:block absolute -top-6 -right-6 w-40 h-40 rounded-2xl overflow-hidden border-4 border-white shadow-xl">
                <Image src="/dubai/skyline-sunset.webp" alt="Dubai skyline at sunset" fill sizes="160px" className="object-cover" />
              </div>
            </motion.div>
          </div>

          <motion.div {...fadeInUp} className="mt-16 pt-10 border-t border-gray-100">
            <p className="text-gray-400 text-xs uppercase tracking-widest mb-5 text-center">Who takes part</p>
            <div className="flex flex-wrap justify-center gap-3">
              {stakeholders.map((s) => (
                <span
                  key={s.name}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-off-white border border-gold-100 text-brown-950 text-xs font-medium rounded-full"
                >
                  <s.icon size={14} className="text-gold-600" />
                  {s.name}
                </span>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ─── DUBAI IN FRAMES ─── */}
      <section className="py-24 bg-off-white">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <Eyebrow>The Host City</Eyebrow>
              <SectionTitle>
                Dubai,
                <span className="text-gold-600"> Where the World Meets</span>
              </SectionTitle>
            </div>
            <motion.p {...fadeInUp} className="text-gray-600 max-w-md text-sm leading-relaxed md:mb-6">
              A global crossroads of trade, diplomacy and ambition, and a natural home for a summit connecting India
              with the world.
            </motion.p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-3 md:gap-4 md:h-[560px]">
            {dubaiFrames.map((f, i) => (
              <motion.figure
                key={f.title}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className={`group relative overflow-hidden rounded-xl md:aspect-auto ${
                  i === 0 || i === 3 ? "col-span-2 aspect-[16/10]" : "aspect-[4/5]"
                } ${f.className}`}
              >
                <Image
                  src={f.src}
                  alt={f.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <figcaption className="absolute bottom-0 left-0 p-4 md:p-5">
                  <p className="font-(family-name:--font-good-times) text-white text-xs md:text-sm">{f.title}</p>
                  <p className="text-white/60 text-[11px] mt-0.5">{f.sub}</p>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── 2. CORE OBJECTIVE (image background) ─── */}
      <section className="relative py-28 overflow-hidden">
        <Image src="/dubai/skyline-sunset.webp" alt="" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90" />
        <Container className="relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Eyebrow light>02 · Core Objective</Eyebrow>
            <SectionTitle light>
              Recognition <span className="text-gold-400">of Excellence</span>
            </SectionTitle>
            <motion.p {...fadeInUp} className="inline-flex items-center gap-2 text-gold-100/80 text-sm">
              <Award size={16} className="text-gold-400" /> Bharat Uday honours at the summit
            </motion.p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {objectives.map((o, i) => (
              <motion.div
                key={o.title}
                {...fadeInUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white/[0.07] backdrop-blur-md border border-white/15 rounded-2xl p-7 hover:bg-white/[0.12] transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-gold-500 flex items-center justify-center mb-5">
                  <o.icon size={20} className="text-brown-950" />
                </div>
                <h3 className="font-(family-name:--font-good-times) text-sm text-white mb-3">{o.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{o.text}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── 3. SPECIAL FEATURE ─── */}
      <section className="py-24 bg-white">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div {...fadeInUp} className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] max-w-md mx-auto overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/mr-sachin-katarnawre.jpeg"
                  alt="Mr. Sachin Katarnawre"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 80vw, 35vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                <div className="absolute bottom-0 p-6">
                  <p className="font-(family-name:--font-good-times) text-white text-base">Mr. Sachin Katarnawre</p>
                  <p className="text-gold-300 text-xs mt-1">Chairman & Managing Director, United Gate One</p>
                </div>
              </div>
              <div className="hidden md:flex absolute -bottom-5 right-4 lg:-right-5 bg-gold-500 text-brown-950 px-5 py-3 rounded-full shadow-lg items-center gap-2">
                <Mic size={16} />
                <span className="font-(family-name:--font-good-times) text-xs font-bold">One-to-One Session</span>
              </div>
            </motion.div>
            <div className="lg:col-span-7">
              <Eyebrow>03 · Special Feature</Eyebrow>
              <SectionTitle>
                One-to-One Leadership
                <br />
                <span className="text-gold-600">Conversation</span>
              </SectionTitle>
              <motion.p {...fadeInUp} className="text-gray-600 leading-relaxed mb-8">
                An exclusive conversation on the vision, strategic direction and international aspirations of United
                Gate One, with particular emphasis on the proposed United World Summit in Addis Ababa, Ethiopia, on 1st
                &amp; 2nd April 2027: its strategic rationale, global outreach and potential to bring international
                stakeholders together for dialogue, cooperation and shared progress.
              </motion.p>
              <p className="text-gray-400 text-xs uppercase tracking-widest mb-4">Key discussion areas</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {discussionAreas.map((area, i) => (
                  <motion.div
                    key={area}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-3 bg-off-white border border-gray-100 px-4 py-3 rounded-lg"
                  >
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-brown-950 text-gold-300 text-xs font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                    <span className="text-brown-950 text-sm">{area}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── 4. MEDIA PARTNER ─── */}
      <section className="py-24 bg-off-white">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <Eyebrow>04 · Official Media Partner</Eyebrow>
              <motion.div {...fadeInUp} className="mb-6">
                <Image src="/dubai/bharat24-logo.png" alt="Bharat 24" width={266} height={116} className="h-20 w-auto mb-4" />
                <p className="font-(family-name:--font-good-times) text-brown-950/60 text-xs md:text-sm">
                  Jahan Tak Bharat, Wahan Tak Bharat 24
                </p>
              </motion.div>
              <motion.p {...fadeInUp} className="text-gray-600 leading-relaxed mb-6">
                A national news and media platform bringing India&apos;s stories to audiences with clarity,
                credibility and speed. A network of 2,000+ reporters across states and districts delivers more than
                1,000 news stories daily.
              </motion.p>
              <motion.div
                {...fadeInUp}
                className="flex gap-4 items-start bg-white border border-gold-100 rounded-xl p-5"
              >
                <Tv size={20} className="text-gold-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-700 leading-relaxed">
                  As Media Partner, Bharat 24 will amplify the summit&apos;s key discussions, leadership perspectives
                  and broader objectives, subject to the agreed media partnership arrangements.
                </p>
              </motion.div>
            </div>
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              {mediaFacts.map((f, i) => (
                <motion.div
                  key={f.title}
                  {...fadeInUp}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="p-6 rounded-xl border border-gray-100 bg-white hover:shadow-lg hover:shadow-gold-500/5 transition-shadow"
                >
                  <div className="w-10 h-10 rounded-lg bg-brown-950 flex items-center justify-center mb-4">
                    <f.icon size={18} className="text-gold-400" />
                  </div>
                  <h3 className="font-(family-name:--font-good-times) text-xs font-semibold text-brown-950 mb-2">
                    {f.title}
                  </h3>
                  <p className="text-gray-600 text-xs leading-relaxed">{f.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ─── 5. DELEGATE PACKAGE ─── */}
      <section id="package" className="py-24 bg-brown-950 relative overflow-hidden scroll-mt-24">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-3xl" />
        <Container className="relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
            <div>
              <Eyebrow light>05 · Delegate Package</Eyebrow>
              <SectionTitle light>
                Everything Covered,
                <br />
                <span className="text-gold-400">Door to Desert</span>
              </SectionTitle>
            </div>
            <motion.div {...fadeInUp} className="lg:text-right lg:mb-6">
              <p className="font-(family-name:--font-good-times) text-4xl md:text-5xl font-bold text-gold-400">
                {formatINR(dubaiSummit.pricePerDelegate)}
              </p>
              <p className="text-white/60 text-sm mt-2">{dubaiSummit.priceNote}</p>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {packageCards.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group bg-white rounded-2xl overflow-hidden"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-3 left-3 w-10 h-10 rounded-full bg-white/90 backdrop-blur flex items-center justify-center">
                    <item.icon size={18} className="text-brown-950" />
                  </div>
                  <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-gold-500 flex items-center justify-center">
                    <Check size={14} className="text-brown-950" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-(family-name:--font-good-times) text-sm font-semibold text-brown-950 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Desert strip */}
          <div className="mt-16 grid grid-cols-3 gap-3 md:gap-5">
            {desertStrip.map((d, i) => (
              <motion.figure
                key={d.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative overflow-hidden rounded-xl aspect-[3/4] ${i === 1 ? "md:-translate-y-6" : ""}`}
              >
                <Image src={d.src} alt={d.title} fill sizes="33vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <figcaption className="absolute bottom-0 p-3 md:p-5 font-(family-name:--font-good-times) text-white text-[10px] md:text-sm">
                  {d.title}
                </figcaption>
              </motion.figure>
            ))}
          </div>

          <motion.div {...fadeInUp} className="mt-12 flex justify-center">
            <a
              href="#book"
              className="font-(family-name:--font-good-times) group inline-flex items-center gap-3 bg-gold-500 text-brown-950 px-8 py-4 font-semibold hover:bg-gold-400 transition-colors rounded-sm"
            >
              Book Now
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </Container>
      </section>

      {/* ─── BOOKING ─── */}
      <section id="book" className="py-24 bg-off-white scroll-mt-24">
        <Container>
          <div className="text-center mb-12">
            <Eyebrow>Delegate Registration</Eyebrow>
            <SectionTitle>Book Your Place in Dubai</SectionTitle>
            <motion.p {...fadeInUp} className="text-gray-600 max-w-xl mx-auto">
              Complete your details and pay securely online. Your booking confirmation arrives by email immediately
              after payment.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            <motion.aside
              {...fadeInUp}
              className="hidden lg:block lg:col-span-4 relative rounded-2xl overflow-hidden min-h-[520px]"
            >
              <Image src="/dubai/burj-al-arab.webp" alt="Burj Al Arab, Dubai" fill sizes="33vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/0" />
              <div className="absolute bottom-0 p-8">
                <p className="text-gold-300 text-[11px] uppercase tracking-widest mb-2">Your package</p>
                <p className="font-(family-name:--font-good-times) text-white text-2xl mb-5">
                  {formatINR(dubaiSummit.pricePerDelegate)}
                  <span className="text-white/60 text-xs"> / delegate</span>
                </p>
                <ul className="space-y-2.5">
                  {packageCards.map((p) => (
                    <li key={p.title} className="flex items-center gap-3 text-white/85 text-sm">
                      <Check size={14} className="text-gold-400 flex-shrink-0" /> {p.title}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-5 border-t border-white/15 space-y-2 text-white/70 text-xs">
                  <p className="flex items-center gap-2">
                    <Calendar size={13} className="text-gold-400" /> {dubaiSummit.dateLabel}
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPin size={13} className="text-gold-400" /> {dubaiSummit.city}
                  </p>
                </div>
              </div>
            </motion.aside>
            <div className="lg:col-span-8">
              <BookingForm />
            </div>
          </div>
        </Container>
      </section>

      {/* ─── 6. ROAD AHEAD ─── */}
      <section className="relative py-32 overflow-hidden">
        <Image src="/dubai/addis-ababa.webp" alt="Addis Ababa skyline" fill sizes="100vw" className="object-cover object-[center_45%]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/10" />
        <Container className="relative z-10">
          <div className="max-w-2xl">
            <Eyebrow light>06 · Road Ahead</Eyebrow>
            <SectionTitle light>
              Towards United World Summit 2027
              <br />
              <span className="text-gold-400">UNECA, Addis Ababa · 1st &amp; 2nd April 2027</span>
            </SectionTitle>
            <motion.p {...fadeInUp} className="text-white/75 leading-relaxed mb-10">
              Building on the Dubai edition, the United World Summit at the United Nations Economic Commission for Africa (UNECA), Addis Ababa, on 1st &amp; 2nd April 2027 will
              provide an additional platform for strengthening international partnerships, fostering cross-border
              economic engagement and connecting emerging opportunities with global stakeholders.
            </motion.p>
            <motion.p
              {...fadeInUp}
              className="font-(family-name:--font-good-times) text-gold-300 text-sm md:text-base border-l-2 border-gold-400 pl-4"
            >
              Together for a Stronger India and a Prosperous World
            </motion.p>
          </div>
        </Container>
      </section>
    </>
  );
}
