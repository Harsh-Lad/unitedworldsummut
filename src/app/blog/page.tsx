"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, ArrowRight, FileText, Search } from "lucide-react";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

const categories = ["All", "Events", "Vision", "Impact", "News"];

const blogPosts = [
  {
    id: 1,
    title: "Conference, Meetings & MOU Signing Ceremony",
    excerpt:
      "A landmark event bringing together global leaders for strategic partnerships and agreements that will shape the future of international business.",
    date: "2024-12-15",
    category: "Events",
    slug: "conference-mou-signing",
    featured: true,
  },
  {
    id: 2,
    title: "Conference, Meetings Vision 2030",
    excerpt:
      "Exploring the future of sustainable development aligned with UAE Vision 2030 objectives and global transformation goals.",
    date: "2024-12-10",
    category: "Vision",
    slug: "vision-2030-conference",
    featured: true,
  },
  {
    id: 3,
    title: "Supporting Sustainable Development Goals",
    excerpt:
      "How United World Summit is driving progress towards the UN Sustainable Development Goals through strategic initiatives.",
    date: "2024-12-05",
    category: "Impact",
    slug: "sustainable-development-goals",
    featured: true,
  },
  {
    id: 4,
    title: "Global Business Opportunities in Asian Markets",
    excerpt:
      "Analyzing emerging opportunities and strategic partnerships in rapidly growing Asian markets for 2025.",
    date: "2024-11-28",
    category: "News",
    slug: "asian-markets-opportunities",
    featured: false,
  },
  {
    id: 5,
    title: "Women in Leadership: Breaking Barriers",
    excerpt:
      "Celebrating the achievements of women leaders and exploring initiatives to promote gender equality in business.",
    date: "2024-11-20",
    category: "Impact",
    slug: "women-in-leadership",
    featured: false,
  },
  {
    id: 6,
    title: "Digital Transformation Summit Highlights",
    excerpt:
      "Key takeaways from our digital transformation summit featuring industry leaders and technology innovators.",
    date: "2024-11-15",
    category: "Events",
    slug: "digital-transformation-summit",
    featured: false,
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

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-navy">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              News & <span className="text-gold-500">Insights</span>
            </h1>
            <p className="text-lg text-gray-300">
              Stay updated with the latest developments, success stories, and
              insights from the United World Summit
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Blog Section */}
      <section className="py-24 bg-white">
        <Container>
          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-12">
            {/* Search */}
            <div className="relative w-full md:w-80">
              <Search
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "primary" : "outline"}
                  size="sm"
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/blog/${post.slug}`}>
                  <Card variant="bordered" className="h-full group">
                    {/* Image Placeholder */}
                    <div className="aspect-video rounded-xl bg-navy-800 mb-6 overflow-hidden flex items-center justify-center">
                      <FileText size={40} className="text-gold-500/30" />
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Badge variant="navy">{post.category}</Badge>
                        <span className="text-gray-400 text-sm flex items-center gap-1">
                          <Calendar size={14} />
                          {new Date(post.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-navy-900 group-hover:text-gold-600 transition-colors line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-gray-600 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <span className="inline-flex items-center text-gold-600 font-medium text-sm group-hover:gap-2 transition-all">
                        Read More
                        <ArrowRight
                          size={16}
                          className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity"
                        />
                      </span>
                    </div>
                  </Card>
                </Link>
              </motion.article>
            ))}
          </div>

          {/* No Results */}
          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <FileText size={48} className="mx-auto text-gray-300 mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No articles found
              </h3>
              <p className="text-gray-400">
                Try adjusting your search or filter criteria
              </p>
            </motion.div>
          )}
        </Container>
      </section>
    </>
  );
}
