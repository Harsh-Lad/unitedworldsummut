"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Award,
  Users,
  Globe,
  Target,
  Eye,
  CheckCircle,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import { founderInfo, services } from "@/lib/constants";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-navy relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=80"
            alt="About Us"
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
              About <span className="text-gold-500">United World Summit</span>
            </h1>
            <p className="text-lg text-gray-300">
              A premier platform for global leaders, innovators, and
              entrepreneurs to connect, collaborate, and drive meaningful
              change.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Founder Section */}
      <section className="py-24 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="aspect-4/5 rounded-2xl overflow-hidden shadow-2xl relative"
              >
                <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80"
                  alt={founderInfo.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="absolute -bottom-6 -right-6 bg-gold-500 text-navy-900 rounded-2xl p-6 shadow-xl"
              >
                <div className="text-4xl font-bold">{founderInfo.experience}</div>
                <div className="text-sm font-medium">Years Experience</div>
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-gold-600 font-medium text-sm uppercase tracking-wider">
                Our Founder
              </span>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-navy-900 mt-4 mb-6">
                {founderInfo.name}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {founderInfo.bio}
              </p>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-3 cursor-default"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <CheckCircle
                        size={20}
                        className="text-gold-500 mt-1 flex-shrink-0"
                      />
                    </motion.div>
                    <span className="text-gray-700">{service}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-off-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card variant="navy" className="h-full group">
                <motion.div
                  whileHover={{ rotate: 10 }}
                  className="w-16 h-16 rounded-2xl bg-gold-500 flex items-center justify-center mb-6"
                >
                  <Target size={28} className="text-navy-900" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  To create a dynamic platform that brings together global
                  leaders, entrepreneurs, and innovators to foster sustainable
                  economic growth, drive digital transformation, and promote
                  inclusive development across nations.
                </p>
              </Card>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card variant="navy" className="h-full group">
                <motion.div
                  whileHover={{ rotate: 10 }}
                  className="w-16 h-16 rounded-2xl bg-gold-500 flex items-center justify-center mb-6"
                >
                  <Eye size={28} className="text-navy-900" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  To become the world&apos;s most influential business summit,
                  recognized for catalyzing meaningful partnerships, driving
                  innovation, and shaping the future of global commerce in
                  alignment with the UN Sustainable Development Goals.
                </p>
              </Card>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Values */}
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
              Our Core Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide our work and define our commitment to
              excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Excellence",
                description:
                  "We strive for the highest standards in everything we do, delivering exceptional experiences and outcomes.",
              },
              {
                icon: Users,
                title: "Collaboration",
                description:
                  "We believe in the power of partnerships and collective action to achieve transformative results.",
              },
              {
                icon: Globe,
                title: "Global Impact",
                description:
                  "We are committed to creating lasting positive change that transcends borders and benefits communities worldwide.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -10 }}
              >
                <Card variant="bordered" className="text-center h-full" glow>
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 mx-auto rounded-2xl bg-navy-900 flex items-center justify-center mb-6"
                  >
                    <value.icon size={28} className="text-gold-500" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-navy-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
