"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  Calendar,
  ArrowLeft,
  Share2,
  Linkedin,
  Twitter,
  Facebook,
  FileText,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

const blogPosts = [
  {
    id: 1,
    title: "Conference, Meetings & MOU Signing Ceremony",
    excerpt:
      "A landmark event bringing together global leaders for strategic partnerships and agreements that will shape the future of international business.",
    content: `
      <p>The United World Summit recently hosted a landmark Conference, Meetings, and MOU Signing Ceremony that brought together influential leaders from across the globe. This event marked a significant milestone in our mission to foster international partnerships and drive global business success.</p>

      <h2>Key Highlights</h2>
      <p>The ceremony featured the signing of multiple Memoranda of Understanding between organizations spanning various sectors, including technology, finance, agriculture, and sustainable development. These agreements lay the foundation for collaborative initiatives that will benefit communities worldwide.</p>

      <h2>Distinguished Attendees</h2>
      <p>The event was attended by government officials, business leaders, and innovators from over 50 countries. The diverse gathering reflected the summit's commitment to inclusive dialogue and cross-cultural collaboration.</p>

      <h2>Looking Forward</h2>
      <p>The partnerships forged during this ceremony will continue to evolve, creating new opportunities for economic growth and sustainable development. We remain committed to facilitating meaningful connections that drive positive change on a global scale.</p>
    `,
    date: "2024-12-15",
    category: "Events",
    slug: "conference-mou-signing",
    author: "United World Summit Team",
  },
  {
    id: 2,
    title: "Conference, Meetings Vision 2030",
    excerpt:
      "Exploring the future of sustainable development aligned with UAE Vision 2030 objectives and global transformation goals.",
    content: `
      <p>Our Vision 2030 Conference brought together thought leaders and policymakers to discuss the alignment of global business practices with the UAE's ambitious Vision 2030 framework.</p>

      <h2>Vision 2030 Pillars</h2>
      <p>The discussions centered around key pillars including economic diversification, knowledge-based economy development, and sustainable practices that will shape the future of the region and beyond.</p>

      <h2>Strategic Initiatives</h2>
      <p>Participants shared insights on implementing strategies that align with both national visions and global sustainable development goals, creating a roadmap for inclusive growth.</p>

      <h2>Collaborative Outcomes</h2>
      <p>The conference resulted in several collaborative initiatives aimed at accelerating progress toward Vision 2030 objectives while maintaining focus on environmental sustainability and social responsibility.</p>
    `,
    date: "2024-12-10",
    category: "Vision",
    slug: "vision-2030-conference",
    author: "United World Summit Team",
  },
  {
    id: 3,
    title: "Supporting Sustainable Development Goals",
    excerpt:
      "How United World Summit is driving progress towards the UN Sustainable Development Goals through strategic initiatives.",
    content: `
      <p>The United World Summit is deeply committed to supporting the United Nations Sustainable Development Goals (SDGs). Our initiatives are designed to create measurable impact across multiple goal areas.</p>

      <h2>Our SDG Focus Areas</h2>
      <p>We prioritize goals related to economic growth, industry innovation, gender equality, and partnerships for achieving these objectives. Our programs are tailored to address these critical areas through collaborative action.</p>

      <h2>Measurable Impact</h2>
      <p>Through our summits and ongoing initiatives, we've facilitated partnerships that have contributed to job creation, women's empowerment, and sustainable business practices across multiple regions.</p>

      <h2>Future Commitments</h2>
      <p>We continue to evolve our approach, seeking new ways to amplify our impact and engage more stakeholders in the collective effort to achieve the SDGs by 2030.</p>
    `,
    date: "2024-12-05",
    category: "Impact",
    slug: "sustainable-development-goals",
    author: "United World Summit Team",
  },
];

const relatedPosts = blogPosts.slice(0, 3);

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = blogPosts.find((p) => p.slug === slug) || blogPosts[0];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-navy">
        <Container size="narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center text-gray-400 hover:text-gold-500 transition-colors mb-8"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Blog
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <Badge variant="gold">{post.category}</Badge>
              <span className="text-gray-400 flex items-center gap-2">
                <Calendar size={16} />
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>

            <h1 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {post.title}
            </h1>

            <p className="text-lg text-gray-300">{post.excerpt}</p>
          </motion.div>
        </Container>
      </section>

      {/* Featured Image */}
      <section className="bg-white">
        <Container size="narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="-mt-16 mb-12"
          >
            <div className="aspect-video rounded-2xl bg-navy-800 overflow-hidden flex items-center justify-center">
              <FileText size={80} className="text-gold-500/30" />
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Content */}
      <section className="py-12 bg-white">
        <Container size="narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="prose prose-lg max-w-none"
          >
            <div
              className="text-gray-700 leading-relaxed space-y-6 [&>h2]:font-[family-name:var(--font-playfair)] [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-navy-900 [&>h2]:mt-10 [&>h2]:mb-4 [&>p]:text-gray-600"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </motion.div>

          {/* Author & Share */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-navy-800 flex items-center justify-center text-gold-500 font-bold">
                U
              </div>
              <div>
                <p className="font-medium text-navy-900">{post.author}</p>
                <p className="text-sm text-gray-500">Author</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-gray-500 flex items-center gap-2">
                <Share2 size={18} />
                Share
              </span>
              <div className="flex gap-2">
                {[Linkedin, Twitter, Facebook].map((Icon, index) => (
                  <button
                    key={index}
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gold-500 hover:text-navy-900 transition-colors"
                  >
                    <Icon size={18} />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Related Posts */}
      <section className="py-24 bg-off-white">
        <Container>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-navy-900 text-center mb-12"
          >
            Related Articles
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {relatedPosts
              .filter((p) => p.slug !== slug)
              .slice(0, 3)
              .map((relatedPost, index) => (
                <motion.article
                  key={relatedPost.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={`/blog/${relatedPost.slug}`}>
                    <Card variant="bordered" className="h-full group">
                      <div className="aspect-video rounded-xl bg-navy-800 mb-6 overflow-hidden flex items-center justify-center">
                        <FileText size={40} className="text-gold-500/30" />
                      </div>
                      <Badge variant="navy" className="mb-4">
                        {relatedPost.category}
                      </Badge>
                      <h3 className="text-lg font-bold text-navy-900 group-hover:text-gold-600 transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                    </Card>
                  </Link>
                </motion.article>
              ))}
          </div>
        </Container>
      </section>
    </>
  );
}
