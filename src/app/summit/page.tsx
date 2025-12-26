"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  Users,
  Target,
  Globe,
  Briefcase,
  Leaf,
  Heart,
  CheckCircle,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

const summitDetails = {
  date: "2026",
  location: "Dubai, UAE",
  attendees: "1000+",
  countries: "100+",
  sectors: "19",
  roundTables: "34",
};

const agenda = [
  {
    title: "Creating Employment",
    description:
      "Fostering job creation through strategic partnerships and economic initiatives across global markets.",
    icon: Briefcase,
  },
  {
    title: "Advance Agricultural",
    description:
      "Promoting sustainable agricultural practices and food security through innovation and collaboration.",
    icon: Leaf,
  },
  {
    title: "Women Empowerment",
    description:
      "Championing gender equality and women's leadership in business and policy-making.",
    icon: Heart,
  },
];

const sdgs = [
  "No Poverty",
  "Zero Hunger",
  "Good Health",
  "Quality Education",
  "Gender Equality",
  "Clean Energy",
  "Economic Growth",
  "Industry Innovation",
];

export default function SummitPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-gold-500 rounded-full filter blur-[150px]" />
        </div>
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Badge variant="gold" className="mb-6">
              <Calendar size={14} className="mr-2" />
              Coming in {summitDetails.date}
            </Badge>
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              United World Summit{" "}
              <span className="text-gold-500">2026</span>
            </h1>
            <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
              A Global Gathering for Innovation, Sustainability, and Digital
              Transformation aligned with the United Nations Sustainable
              Development Goals and UAE Vision 2030.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin size={20} className="text-gold-500" />
                <span>{summitDetails.location}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Users size={20} className="text-gold-500" />
                <span>{summitDetails.attendees} Attendees</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Globe size={20} className="text-gold-500" />
                <span>{summitDetails.countries} Countries</span>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-navy-800">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: summitDetails.attendees, label: "Attendees" },
              { value: summitDetails.sectors, label: "Industry Sectors" },
              { value: summitDetails.roundTables, label: "Round Tables" },
              { value: summitDetails.countries, label: "Countries" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-gold-500 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Agenda Section */}
      <section className="py-24 bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Summit Agenda
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Key themes driving our discussions and initiatives for global
              transformation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {agenda.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <Card variant="bordered" className="h-full text-center group">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-navy-900 flex items-center justify-center mb-6 group-hover:bg-gold-500 transition-colors duration-300">
                    <item.icon
                      size={28}
                      className="text-gold-500 group-hover:text-navy-900 transition-colors duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* SDGs Section */}
      <section className="py-24 bg-off-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-gold-600 font-medium text-sm uppercase tracking-wider">
                Global Alignment
              </span>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-navy-900 mt-4 mb-6">
                Supporting Sustainable Development Goals
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                The United World Summit is committed to driving progress toward
                the United Nations Sustainable Development Goals. Our
                initiatives and partnerships are designed to create measurable
                impact across these critical global objectives.
              </p>
              <div className="flex flex-wrap gap-3">
                {sdgs.map((sdg, index) => (
                  <Badge key={index} variant="navy">
                    {sdg}
                  </Badge>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card variant="navy" className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  UAE Vision 2030 Alignment
                </h3>
                <div className="space-y-4">
                  {[
                    "Diversified Knowledge Economy",
                    "World-Class Healthcare",
                    "First-Rate Education System",
                    "Sustainable Environment",
                    "Safe Public & Fair Judiciary",
                    "Competitive & Resilient Economy",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle
                        size={20}
                        className="text-gold-500 mt-1 flex-shrink-0"
                      />
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-gold">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-navy-900 mb-6">
              Be Part of the Summit 2026
            </h2>
            <p className="text-lg text-navy-800/80 mb-10">
              Register your interest to attend the United World Summit 2026 and
              join global leaders in shaping the future of business and
              development.
            </p>
            <Button
              variant="secondary"
              size="lg"
              className="bg-navy-900 hover:bg-navy-800"
            >
              Register Your Interest
            </Button>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
