"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

const blogPosts = [
  {
    id: 1,
    title: "Conference, Meetings & MOU Signing Ceremony",
    excerpt:
      "A landmark event bringing together global leaders for strategic partnerships and agreements.",
    date: "2024-12-15",
    category: "Events",
    slug: "conference-mou-signing",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
  },
  {
    id: 2,
    title: "Conference, Meetings Vision 2030",
    excerpt:
      "Exploring the future of sustainable development aligned with UAE Vision 2030 objectives.",
    date: "2024-12-10",
    category: "Vision",
    slug: "vision-2030-conference",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&q=80",
  },
  {
    id: 3,
    title: "Supporting Sustainable Development Goals",
    excerpt:
      "How United World Summit is driving progress towards the UN Sustainable Development Goals.",
    date: "2024-12-05",
    category: "Impact",
    slug: "sustainable-development-goals",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
  },
];

export default function BlogPreview() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <Container>
        <SectionHeader
          title="Latest News & Insights"
          subtitle="Stay updated with the latest developments and success stories"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Link href={`/blog/${post.slug}`}>
                <Card variant="bordered" className="h-full group" glow>
                  {/* Image */}
                  <div className="aspect-video rounded-xl mb-6 overflow-hidden relative">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                      className="relative w-full h-full"
                    >
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </motion.div>
                    {/* Category badge overlay */}
                    <div className="absolute top-4 left-4">
                      <Badge variant="gold">{post.category}</Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Calendar size={14} />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </div>

                    <h3 className="text-xl font-bold text-navy-900 group-hover:text-gold-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>

                    <motion.span
                      className="inline-flex items-center text-gold-600 font-medium text-sm"
                      whileHover={{ x: 5 }}
                    >
                      Read More
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="ml-1"
                      >
                        <ArrowRight size={16} />
                      </motion.span>
                    </motion.span>
                  </div>
                </Card>
              </Link>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link href="/blog">
            <Button variant="secondary" size="lg" className="group">
              View All Articles
              <ArrowRight
                size={20}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </Button>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
