"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  CheckCircle,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { siteConfig, socialLinks } from "@/lib/constants";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const iconMap: Record<string, typeof Linkedin> = {
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
};

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form submitted:", data);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

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
              Get in <span className="text-gold-500">Touch</span>
            </h1>
            <p className="text-lg text-gray-300">
              Have questions about the United World Summit? We&apos;d love to hear
              from you. Reach out and let&apos;s start a conversation.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-navy-900 mb-8">
                Contact Information
              </h2>

              <div className="space-y-6">
                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-navy-900 flex items-center justify-center flex-shrink-0">
                    <MapPin size={22} className="text-gold-500" />
                  </div>
                  <div>
                    <h3 className="font-medium text-navy-900 mb-1">Location</h3>
                    <p className="text-gray-600">{siteConfig.location}</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-navy-900 flex items-center justify-center flex-shrink-0">
                    <Mail size={22} className="text-gold-500" />
                  </div>
                  <div>
                    <h3 className="font-medium text-navy-900 mb-1">Email</h3>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-gray-600 hover:text-gold-600 transition-colors"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-navy-900 flex items-center justify-center flex-shrink-0">
                    <Phone size={22} className="text-gold-500" />
                  </div>
                  <div>
                    <h3 className="font-medium text-navy-900 mb-1">Phone</h3>
                    <p className="text-gray-600">+971 XX XXX XXXX</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-10">
                <h3 className="font-medium text-navy-900 mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  {socialLinks.map((social) => {
                    const Icon = iconMap[social.icon];
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        className="w-10 h-10 rounded-full bg-navy-900 flex items-center justify-center text-gold-500 hover:bg-gold-500 hover:text-navy-900 transition-all duration-300"
                        aria-label={social.name}
                      >
                        {Icon && <Icon size={18} />}
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <Card variant="bordered" className="p-8">
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-navy-900 mb-8">
                  Send Us a Message
                </h2>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle
                      size={64}
                      className="mx-auto text-green-500 mb-4"
                    />
                    <h3 className="text-xl font-bold text-navy-900 mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-gray-600">
                      Thank you for reaching out. We&apos;ll get back to you shortly.
                    </p>
                  </motion.div>
                ) : (
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Name */}
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-navy-900 mb-2"
                        >
                          Your Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          {...register("name")}
                          className={`w-full px-4 py-3 rounded-xl border ${
                            errors.name
                              ? "border-red-500"
                              : "border-gray-200"
                          } focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent`}
                          placeholder="John Doe"
                        />
                        {errors.name && (
                          <p className="mt-1 text-sm text-red-500">
                            {errors.name.message}
                          </p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-navy-900 mb-2"
                        >
                          Email Address
                        </label>
                        <input
                          id="email"
                          type="email"
                          {...register("email")}
                          className={`w-full px-4 py-3 rounded-xl border ${
                            errors.email
                              ? "border-red-500"
                              : "border-gray-200"
                          } focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent`}
                          placeholder="john@example.com"
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-500">
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-navy-900 mb-2"
                      >
                        Subject
                      </label>
                      <input
                        id="subject"
                        type="text"
                        {...register("subject")}
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.subject
                            ? "border-red-500"
                            : "border-gray-200"
                        } focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent`}
                        placeholder="How can we help?"
                      />
                      {errors.subject && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.subject.message}
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-navy-900 mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        {...register("message")}
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.message
                            ? "border-red-500"
                            : "border-gray-200"
                        } focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent resize-none`}
                        placeholder="Tell us more about your inquiry..."
                      />
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    {/* Submit */}
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full sm:w-auto"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="animate-spin mr-2">
                            <Send size={18} />
                          </span>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send size={18} className="ml-2" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </Card>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Map Section */}
      <section className="h-96 bg-navy-800 flex items-center justify-center">
        <div className="text-center">
          <MapPin size={48} className="mx-auto text-gold-500/50 mb-4" />
          <p className="text-gray-400">Map integration placeholder</p>
          <p className="text-gray-500 text-sm">Dubai, UAE</p>
        </div>
      </section>
    </>
  );
}
