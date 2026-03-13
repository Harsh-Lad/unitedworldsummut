"use client";

import Container from "@/components/ui/Container";
import { motion } from "framer-motion";
import {
  ArrowRight,
  MapPin,
  Calendar,
  Users,
  Globe,
  BarChart3,
  Briefcase,
  Sprout,
  UserCheck,
  GraduationCap,
  Repeat,
  Building2,
  HeartPulse,
  UtensilsCrossed,
  Fuel,
  Mountain,
  Landmark,
  HardHat,
  Stethoscope,
  BookOpen,
  Tv,
  Wifi,
  Trees,
  Gem,
  Hotel,
  Factory,
  Truck,
  Zap,
  Home,
  Sparkles,
  Award,
  Handshake,
  Shield,
  Heart,
  Target,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const agenda = [
  {
    number: "01",
    title: "Creating Employment",
    description:
      "Fostering job creation through strategic partnerships and economic initiatives across global markets.",
    icon: Briefcase,
  },
  {
    number: "02",
    title: "Advance Agricultural",
    description:
      "Promoting sustainable agricultural practices and food security through innovation and collaboration.",
    icon: Sprout,
  },
  {
    number: "03",
    title: "Women Empowerment",
    description:
      "Championing gender equality and women's leadership in business and policy-making.",
    icon: UserCheck,
  },
  {
    number: "04",
    title: "Education & Fintech",
    description:
      "Bridging the gap between education systems and financial technology for inclusive economic growth.",
    icon: GraduationCap,
  },
  {
    number: "05",
    title: "Exchange Technology",
    description:
      "Facilitating technology transfer and knowledge exchange between developed and emerging markets.",
    icon: Repeat,
  },
  {
    number: "06",
    title: "Setting-up Infrastructure",
    description:
      "Building resilient infrastructure to support sustainable development in emerging economies.",
    icon: Building2,
  },
  {
    number: "07",
    title: "Healthcare & Pharmaceutical",
    description:
      "Advancing healthcare systems and pharmaceutical innovation for improved global health outcomes.",
    icon: HeartPulse,
  },
  {
    number: "08",
    title: "Food & Commodities",
    description:
      "Strengthening food supply chains and commodity markets for global food security.",
    icon: UtensilsCrossed,
  },
];

const sectors = [
  { name: "Oil & Gas", icon: Fuel },
  { name: "Mining & Metals", icon: Mountain },
  { name: "Banking & Capital Markets", icon: Landmark },
  { name: "Engineering & Construction", icon: HardHat },
  { name: "Healthcare", icon: Stethoscope },
  { name: "Education", icon: BookOpen },
  { name: "Media & Entertainment", icon: Tv },
  { name: "ICT", icon: Wifi },
  { name: "Natural Resources", icon: Trees },
  { name: "Fashion & Cosmetics", icon: Gem },
  { name: "Leisure & Hospitality", icon: Hotel },
  { name: "Capital Projects & Infrastructure", icon: Building2 },
  { name: "Industrial Manufacturing", icon: Factory },
  { name: "Transportation & Logistics", icon: Truck },
  { name: "Electric Vehicle", icon: Zap },
  { name: "Real Estate", icon: Home },
];

const keynoteTopics = [
  "Product Development",
  "Productivity & Branding",
  "Business Administration",
  "Business Law",
  "Project Management",
  "Public-Private Partnerships",
  "Risk Management",
  "Sales & Marketing",
  "Corporate Communications",
  "Business Leadership",
  "Corporate Governance",
  "AI & Retail",
  "B2B Ecommerce",
  "Big Data Analysis",
  "Blockchain & Cloud Security",
];

const sdgNames = [
  "No Poverty",
  "Zero Hunger",
  "Good Health & Well-Being",
  "Quality Education",
  "Gender Equality",
  "Clean Water & Sanitation",
  "Affordable & Clean Energy",
  "Decent Work & Economic Growth",
  "Industry, Innovation & Infrastructure",
  "Reduced Inequalities",
  "Sustainable Cities & Communities",
  "Responsible Consumption & Production",
  "Climate Action",
  "Life Below Water",
  "Life on Land",
  "Peace, Justice & Strong Institutions",
  "Partnerships for the Goals",
];

const stats = [
  { value: "500+", label: "Attendees", icon: Users },
  { value: "19", label: "Industry Sectors", icon: BarChart3 },
  { value: "34", label: "Round Tables", icon: Target },
  { value: "100+", label: "Countries", icon: Globe },
];

export default function SummitPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative pt-44 pb-24 bg-brown-950 overflow-hidden">
        {/* Background image overlay */}
        <div className="absolute inset-0">
          <Image
            src="/conference.jpg"
            alt="Summit Conference"
            fill
            className="object-cover opacity-15"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brown-950/60 via-brown-950/80 to-brown-950" />
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500" />
        <div className="absolute top-20 right-10 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gold-500/3 rounded-full blur-3xl" />

        <Container>
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-5 py-2 bg-gold-500/10 border border-gold-500/20 rounded-full mb-8"
            >
              <span className="w-2 h-2 bg-gold-400 rounded-full animate-[pulse_2s_ease-in-out_infinite]" />
              <span className="text-gold-400 text-xs font-semibold tracking-widest uppercase">
                A CSR, ESG & SDGs Campaign
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="font-(family-name:--font-good-times) text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
            >
              United World Summit
              <br />
              <span className="text-gold-400">2026</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gold-100/80 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              The agenda-setting Summit for international business and global
              leaders. A platform where corporates and policymakers leverage to
              interact with stakeholders in sectors and geographies of strategic
              importance.
            </motion.p>

            {/* Date & Venue Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 bg-white/5 backdrop-blur-sm border border-white/10 px-8 py-5 rounded-lg mb-12"
            >
              <div className="flex items-center gap-3">
                <Calendar size={18} className="text-gold-400" />
                <span className="text-white font-semibold">
                  7th August 2026
                </span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-white/20" />
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-gold-400" />
                <span className="text-white/90 text-sm">
                  United Nations Economic Commission of Africa, Addis Ababa
                </span>
              </div>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="text-center"
                >
                  <stat.icon
                    size={20}
                    className="text-gold-400 mx-auto mb-2"
                  />
                  <p className="font-(family-name:--font-good-times) text-xl md:text-2xl font-bold text-white">
                    {stat.value}
                  </p>
                  <p className="text-gold-200/60 text-xs uppercase tracking-wider mt-1">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ─── ORGANISED BY ─── */}
      <section className="py-6 bg-brown-900 border-t border-brown-800">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <span className="text-gold-200/50 text-xs uppercase tracking-widest">
              Organised by
            </span>
            <div className="flex items-center gap-3">
              <Image
                src="/main.png"
                alt="United Gate One"
                width={36}
                height={36}
                className="rounded"
              />
              <div>
                <p className="font-(family-name:--font-good-times) text-white text-sm font-semibold">
                  United Gate One
                </p>
                <p className="text-gold-200/40 text-[10px] tracking-[0.2em] uppercase">
                  Mumbai, Dubai, Europe, Africa
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── THE OBJECTIVE ─── */}
      <section className="py-24 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <motion.p
                {...fadeInUp}
                className="text-gold-600 text-xs tracking-[0.2em] uppercase mb-4"
              >
                The Objective
              </motion.p>
              <motion.h2
                {...fadeInUp}
                transition={{ delay: 0.05 }}
                className="font-(family-name:--font-good-times) text-lg md:text-xl lg:text-2xl font-bold text-brown-950 leading-tight mb-6"
              >
                Empowering Leaders.
                <br />
                <span className="text-brown-950/40">Shaping the Future.</span>
              </motion.h2>
              <motion.p
                {...fadeInUp}
                transition={{ delay: 0.1 }}
                className="text-gray-600 leading-relaxed mb-6"
              >
                The objective of United World Summit 2026 is to encourage,
                acknowledge and reward the contribution of Entrepreneurs,
                High-officials, Administrative Officers, Celebrities, and Sports
                Personalities towards the society.
              </motion.p>
              <motion.p
                {...fadeInUp}
                transition={{ delay: 0.15 }}
                className="text-gray-600 leading-relaxed mb-8"
              >
                A Networking Event where the most powerful minds across the world
                come together to create endless opportunities through
                Conferences, Meetings & MOU Signing Ceremonies.
              </motion.p>

              {/* Highlight features */}
              <motion.div
                {...fadeInUp}
                transition={{ delay: 0.2 }}
                className="space-y-4"
              >
                {[
                  {
                    icon: Award,
                    text: "Recognize and felicitate senior leaders and achievers in Sustainability & Digital Economic Transformation",
                  },
                  {
                    icon: Sparkles,
                    text: "Award youth and women innovators in the space of technology acceleration",
                  },
                  {
                    icon: Handshake,
                    text: "Conference, Meetings & MOU Signing Ceremony with global delegates",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-gold-50 rounded-lg flex items-center justify-center">
                      <item.icon size={18} className="text-gold-600" />
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed pt-2">
                      {item.text}
                    </p>
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.15 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <Image
                  src="/summit.jpg"
                  alt="United World Summit Conference"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brown-950/60 via-transparent to-transparent" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-brown-950 p-6 rounded-xl shadow-2xl">
                <p className="font-(family-name:--font-good-times) text-3xl font-bold text-gold-400">
                  250+
                </p>
                <p className="text-white/60 text-xs uppercase tracking-wider mt-1">
                  Thought Leaders
                </p>
              </div>
              {/* Top right badge */}
              <div className="absolute -top-4 -right-4 bg-gold-500 px-4 py-2 rounded-full shadow-lg">
                <p className="font-(family-name:--font-good-times) text-brown-950 text-xs font-bold">
                  1st Edition
                </p>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ─── AGENDA ─── */}
      <section className="py-24 bg-off-white">
        <Container>
          <div className="text-center mb-16">
            <motion.p
              {...fadeInUp}
              className="text-gold-600 text-xs tracking-[0.2em] uppercase mb-4"
            >
              Summit Agenda
            </motion.p>
            <motion.h2
              {...fadeInUp}
              transition={{ delay: 0.05 }}
              className="font-(family-name:--font-good-times) text-lg md:text-xl lg:text-2xl font-bold text-brown-950 leading-tight"
            >
              Eight Pillars of Progress
            </motion.h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {agenda.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="group relative bg-white p-6 rounded-xl border border-gray-100 hover:border-gold-300 hover:shadow-lg hover:shadow-gold-500/5 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gold-400/40 text-xs font-mono">
                    {item.number}
                  </span>
                  <div className="w-10 h-10 rounded-lg bg-gold-50 group-hover:bg-gold-100 flex items-center justify-center transition-colors">
                    <item.icon
                      size={18}
                      className="text-gold-600"
                    />
                  </div>
                </div>
                <h3 className="font-(family-name:--font-good-times) text-sm font-semibold text-brown-950 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── SECTORS IN FOCUS ─── */}
      <section className="py-24 bg-brown-950">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4">
              <motion.p
                {...fadeInUp}
                className="text-gold-500/60 text-xs tracking-[0.2em] uppercase mb-4"
              >
                Industry Coverage
              </motion.p>
              <motion.h2
                {...fadeInUp}
                transition={{ delay: 0.05 }}
                className="font-(family-name:--font-good-times) text-lg md:text-xl font-bold text-white leading-tight mb-6"
              >
                19 Sectors
                <br />
                <span className="text-gold-400">in Focus</span>
              </motion.h2>
              <motion.p
                {...fadeInUp}
                transition={{ delay: 0.1 }}
                className="text-gray-400 text-sm leading-relaxed"
              >
                From oil & gas to electric vehicles, the summit covers the full
                spectrum of industries driving economic transformation across
                Asian and African markets.
              </motion.p>
            </div>

            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {sectors.map((sector, index) => (
                  <motion.div
                    key={sector.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.03 }}
                    className="group flex items-center gap-3 bg-white/5 border border-white/10 hover:border-gold-500/30 hover:bg-white/10 px-4 py-3 rounded-lg transition-all duration-200 cursor-default"
                  >
                    <sector.icon
                      size={16}
                      className="text-gold-400/60 group-hover:text-gold-400 transition-colors flex-shrink-0"
                    />
                    <span className="text-white/70 group-hover:text-white text-xs transition-colors">
                      {sector.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── KEYNOTES FOR ASIAN & AFRICAN MARKETS ─── */}
      <section className="py-24 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <motion.p
                {...fadeInUp}
                className="text-gold-600 text-xs tracking-[0.2em] uppercase mb-4"
              >
                Keynotes & Discussions
              </motion.p>
              <motion.h2
                {...fadeInUp}
                transition={{ delay: 0.05 }}
                className="font-(family-name:--font-good-times) text-lg md:text-xl font-bold text-brown-950 leading-tight mb-6"
              >
                Keynotes for Asian
                <br />& African Markets
              </motion.h2>
              <motion.p
                {...fadeInUp}
                transition={{ delay: 0.1 }}
                className="text-gray-600 leading-relaxed"
              >
                From product development to blockchain security, our keynote
                sessions bring together thought leaders to address the most
                pressing business challenges and opportunities in emerging
                markets.
              </motion.p>
            </div>

            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.1 }}
              className="flex flex-wrap gap-2"
            >
              {keynoteTopics.map((topic, i) => (
                <motion.span
                  key={topic}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03 }}
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-off-white border border-gray-100 text-gray-700 text-xs rounded-full hover:border-gold-300 hover:bg-gold-50 transition-colors cursor-default"
                >
                  <ChevronRight size={12} className="text-gold-500" />
                  {topic}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ─── SDGs ─── */}
      <section className="py-24 bg-off-white">
        <Container>
          <div className="text-center mb-16">
            <motion.p
              {...fadeInUp}
              className="text-gold-600 text-xs tracking-[0.2em] uppercase mb-4"
            >
              Global Alignment
            </motion.p>
            <motion.h2
              {...fadeInUp}
              transition={{ delay: 0.05 }}
              className="font-(family-name:--font-good-times) text-lg md:text-xl lg:text-2xl font-bold text-brown-950 leading-tight mb-6"
            >
              Supporting UN Sustainable
              <br />
              Development Goals
            </motion.h2>
            <motion.p
              {...fadeInUp}
              transition={{ delay: 0.1 }}
              className="text-gray-600 max-w-2xl mx-auto leading-relaxed"
            >
              Our initiatives and partnerships are designed to create measurable
              impact across all 17 critical global objectives, driving progress
              toward a more sustainable and equitable world.
            </motion.p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-3">
            {sdgNames.map((name, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className="group relative overflow-hidden rounded-lg cursor-default transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-${String(index + 1).padStart(2, "0")}.jpg`}
                  alt={`SDG ${index + 1}: ${name}`}
                  className="w-full h-auto"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── VISION 2030 ─── */}
      <section className="py-24 bg-brown-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
        <Container>
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <motion.p
                {...fadeInUp}
                className="text-gold-500/60 text-xs tracking-[0.2em] uppercase mb-4"
              >
                Global Vision
              </motion.p>
              <motion.h2
                {...fadeInUp}
                transition={{ delay: 0.05 }}
                className="font-(family-name:--font-good-times) text-lg md:text-xl font-bold text-white leading-tight mb-6"
              >
                Vision 2030
                <br />
                <span className="text-gold-400">Alignment</span>
              </motion.h2>
              <motion.p
                {...fadeInUp}
                transition={{ delay: 0.1 }}
                className="text-gray-400 leading-relaxed mb-8"
              >
                Get involved in 2030 Vision today. Join 2030 Vision, a
                multi-stakeholder community of the tech industry and its
                partners, as we aim to build better technology collaborations for
                the Global Goals.
              </motion.p>
              <motion.div
                {...fadeInUp}
                transition={{ delay: 0.15 }}
                className="space-y-4"
              >
                {[
                  "Diversified Knowledge Economy",
                  "World-Class Healthcare Systems",
                  "First-Rate Education for All",
                  "Sustainable Environment & Resources",
                  "Competitive & Resilient Economy",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 bg-gold-500 rounded-full" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            <div>
              <motion.p
                {...fadeInUp}
                className="text-gold-500/60 text-xs tracking-[0.2em] uppercase mb-4"
              >
                Regional Focus
              </motion.p>
              <motion.h2
                {...fadeInUp}
                transition={{ delay: 0.05 }}
                className="font-(family-name:--font-good-times) text-lg md:text-xl font-bold text-white leading-tight mb-6"
              >
                African Union
                <br />
                <span className="text-gold-400">Agenda 2063</span>
              </motion.h2>
              <motion.p
                {...fadeInUp}
                transition={{ delay: 0.1 }}
                className="text-gray-400 leading-relaxed mb-8"
              >
                Hosted at the UNECA headquarters in Addis Ababa, this summit
                aligns with the African Union&apos;s vision for an integrated,
                prosperous and peaceful Africa.
              </motion.p>
              <motion.div
                {...fadeInUp}
                transition={{ delay: 0.15 }}
                className="space-y-4"
              >
                {[
                  {
                    icon: Target,
                    text: "Inclusive Growth & Sustainable Development",
                  },
                  {
                    icon: Globe,
                    text: "Continental Integration & Infrastructure",
                  },
                  {
                    icon: Shield,
                    text: "Democratic Governance & Human Rights",
                  },
                  { icon: Heart, text: "Peace, Security & Stability" },
                  {
                    icon: Sparkles,
                    text: "Cultural Identity & Shared Values",
                  },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                      <item.icon size={14} className="text-gold-400" />
                    </div>
                    <span className="text-gray-300 text-sm">{item.text}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── DISTINGUISHED INVITEES ─── */}
      <section className="py-24 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              {...fadeInUp}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl order-2 lg:order-1"
            >
              <Image
                src="/gallery/5.webp"
                alt="Distinguished global gathering"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brown-950/50 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex gap-6">
                  {[
                    { label: "Heads of State", sub: "& Government" },
                    { label: "Cabinet Ministers", sub: "& Chief Ministers" },
                    { label: "Senior Government", sub: "Representatives" },
                  ].map((item) => (
                    <div key={item.label}>
                      <p className="text-white text-xs font-semibold">
                        {item.label}
                      </p>
                      <p className="text-white/50 text-[10px]">{item.sub}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <div className="order-1 lg:order-2">
              <motion.p
                {...fadeInUp}
                className="text-gold-600 text-xs tracking-[0.2em] uppercase mb-4"
              >
                A Global Gathering
              </motion.p>
              <motion.h2
                {...fadeInUp}
                transition={{ delay: 0.05 }}
                className="font-(family-name:--font-good-times) text-lg md:text-xl lg:text-2xl font-bold text-brown-950 leading-tight mb-6"
              >
                Distinguished
                <br />
                <span className="text-brown-950/40">Invitees</span>
              </motion.h2>
              <motion.div
                {...fadeInUp}
                transition={{ delay: 0.1 }}
                className="space-y-4 text-gray-600 leading-relaxed"
              >
                <p>
                  The United World Summit 2026 is poised to be a truly
                  unparalleled gathering of global decision-makers, reflecting a
                  commitment from every corner of the world to shaping our shared
                  economic future.
                </p>
                <p>
                  We are immensely honored to welcome the participation of a
                  truly exceptional roster of leaders and visionaries, each a
                  pivotal figure in their respective nations and international
                  spheres.
                </p>
                <p>
                  Alongside distinguished Heads of State and Government, we will
                  also welcome Cabinet Ministers, Chief Ministers, and senior
                  government representatives from a diverse array of countries,
                  further enriching the depth and breadth of our discussions.
                </p>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative py-24 bg-brown-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brown-950/50 to-transparent" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

        <Container>
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <motion.p
              {...fadeInUp}
              className="text-gold-400/60 text-xs tracking-[0.2em] uppercase mb-6"
            >
              Summit 2026
            </motion.p>
            <motion.h2
              {...fadeInUp}
              transition={{ delay: 0.05 }}
              className="font-(family-name:--font-good-times) text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight mb-6"
            >
              Attendance is by
              <br />
              invitation only
            </motion.h2>
            <motion.p
              {...fadeInUp}
              transition={{ delay: 0.1 }}
              className="text-gold-100/60 mb-10 max-w-xl mx-auto"
            >
              Submit your interest and our team will review your application
              within 48 hours. Your invitation and registration remain fully
              valid.
            </motion.p>
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.15 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href="/contact"
                className="font-(family-name:--font-good-times) group inline-flex items-center gap-3 bg-gold-500 text-brown-950 px-8 py-4 font-semibold hover:bg-gold-400 transition-colors rounded-sm"
              >
                Request an Invitation
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <a
                href="mailto:info@unitedgateone.com"
                className="text-gold-300/60 hover:text-gold-300 text-sm transition-colors"
              >
                or email info@unitedgateone.com
              </a>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  );
}
