"use client";

import Container from "@/components/ui/Container";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const posts = [
  {
    title: "MOU Signing Ceremony Marks New Chapter in Global Trade",
    date: "Dec 2024",
    slug: "conference-mou-signing",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    featured: true,
  },
  {
    title: "Vision 2030: Aligning Summit Goals with UAE's Future",
    date: "Dec 2024",
    slug: "vision-2030-conference",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&q=80",
    featured: false,
  },
  {
    title: "How the Summit Advances UN Sustainable Development Goals",
    date: "Nov 2024",
    slug: "sustainable-development-goals",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    featured: false,
  },
];

export default function BlogPreview() {
  const [featured, ...rest] = posts;

  return (
    <section className="py-28 bg-off-white">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gold-500 text-sm tracking-[0.15em] mb-4"
            >
              News & Insights
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-(family-name:--font-good-times) text-lg md:text-xl font-bold text-brown-950"
            >
              Latest News & Insights
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link
              href="/blog"
              className="font-(family-name:--font-good-times) group inline-flex items-center gap-2 text-brown-950 font-semibold hover:text-gold-600 transition-colors"
            >
              All articles
              <ArrowUpRight
                size={18}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </Link>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Featured post - larger */}
          <motion.article
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link href={`/blog/${featured.slug}`} className="group block">
              <div className="aspect-3/2 relative overflow-hidden mb-6">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <p className="text-gray-500 text-sm mb-2">{featured.date}</p>
              <h3 className="font-(family-name:--font-good-times) text-base md:text-lg font-semibold text-brown-950 group-hover:text-gold-600 transition-colors leading-tight">
                {featured.title}
              </h3>
            </Link>
          </motion.article>

          {/* Other posts - stacked */}
          <div className="space-y-8">
            {rest.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link href={`/blog/${post.slug}`} className="flex gap-6">
                  <div className="w-32 h-24 relative flex-shrink-0 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="128px"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-gray-500 text-sm mb-1">{post.date}</p>
                    <h3 className="font-(family-name:--font-good-times) text-base md:text-lg font-semibold text-brown-950 group-hover:text-gold-600 transition-colors leading-snug line-clamp-2">
                      {post.title}
                    </h3>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
