"use client";

import Container from "@/components/ui/Container";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const categories = ["All", "Events", "Vision", "Impact"];

const blogPosts = [
  {
    title: "MOU Signing Ceremony Marks New Chapter in Global Trade",
    excerpt:
      "A landmark event bringing together global leaders for strategic partnerships and agreements that will shape the future of international business.",
    date: "Dec 2024",
    category: "Events",
    slug: "conference-mou-signing",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    featured: true,
  },
  {
    title: "Vision 2030: Aligning Summit Goals with UAE's Future",
    excerpt:
      "Exploring sustainable development aligned with UAE Vision 2030 objectives and global transformation goals.",
    date: "Dec 2024",
    category: "Vision",
    slug: "vision-2030-conference",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&q=80",
  },
  {
    title: "How the Summit Advances UN Sustainable Development Goals",
    excerpt:
      "Driving progress towards critical global objectives through strategic initiatives and partnerships.",
    date: "Nov 2024",
    category: "Impact",
    slug: "sustainable-development-goals",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
  },
  {
    title: "Global Business Opportunities in Asian Markets",
    excerpt:
      "Analyzing emerging opportunities and strategic partnerships in rapidly growing Asian markets.",
    date: "Nov 2024",
    category: "Events",
    slug: "asian-markets-opportunities",
    image:
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600&q=80",
  },
  {
    title: "Women in Leadership: Breaking Barriers",
    excerpt:
      "Celebrating achievements of women leaders and initiatives to promote gender equality in business.",
    date: "Oct 2024",
    category: "Impact",
    slug: "women-in-leadership",
    image:
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=600&q=80",
  },
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      activeCategory === "All" || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const [featured, ...rest] = filteredPosts;

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
              News & Insights
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight"
            >
              Latest updates
            </motion.h1>
          </div>
        </Container>
      </section>

      {/* Blog */}
      <section className="py-16 bg-white">
        <Container>
          {/* Filter & Search */}
          <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center mb-12">
            <div className="flex flex-wrap gap-4">
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

            <div className="relative w-full md:w-64">
              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 text-sm focus:outline-none focus:border-brown-800"
              />
            </div>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-500">No articles found</p>
            </div>
          ) : (
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Featured */}
              {featured && (
                <motion.article
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="lg:row-span-2"
                >
                  <Link href={`/blog/${featured.slug}`} className="group block">
                    <div className="aspect-4/3 relative overflow-hidden mb-6">
                      <Image
                        src={featured.image}
                        alt={featured.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                    <p className="text-gray-500 text-sm mb-2">
                      {featured.date} · {featured.category}
                    </p>
                    <h2 className="text-base md:text-lg font-semibold text-brown-900 group-hover:text-gold-600 transition-colors leading-tight mb-3">
                      {featured.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                      {featured.excerpt}
                    </p>
                  </Link>
                </motion.article>
              )}

              {/* Other posts */}
              <div className="space-y-8">
                {rest.map((post, index) => (
                  <motion.article
                    key={post.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={`/blog/${post.slug}`}
                      className="group flex gap-6"
                    >
                      <div className="w-32 h-24 relative shrink-0 overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="128px"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-gray-500 text-sm mb-1">
                          {post.date} · {post.category}
                        </p>
                        <h3 className="text-base md:text-lg font-semibold text-brown-900 group-hover:text-gold-600 transition-colors leading-snug line-clamp-2">
                          {post.title}
                        </h3>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
