"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle } from "lucide-react";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/lib/constants";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

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
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form submitted:", data);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-navy-900">
        <Container>
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-gold-500 text-sm tracking-[0.2em] uppercase mb-6"
            >
              Contact
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              Get in touch
            </motion.h1>
          </div>
        </Container>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Info */}
            <div className="lg:col-span-4">
              <div className="space-y-8">
                <div>
                  <p className="text-gray-500 text-sm uppercase tracking-wider mb-2">
                    Location
                  </p>
                  <p className="text-navy-900">{siteConfig.location}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm uppercase tracking-wider mb-2">
                    Email
                  </p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-navy-900 hover:text-gold-600 transition-colors"
                  >
                    {siteConfig.email}
                  </a>
                </div>
                <div>
                  <p className="text-gray-500 text-sm uppercase tracking-wider mb-2">
                    Response Time
                  </p>
                  <p className="text-navy-900">Within 48 hours</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-8">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <CheckCircle size={48} className="mx-auto text-green-500 mb-4" />
                  <h3 className="text-xl font-semibold text-navy-900 mb-2">
                    Message sent
                  </h3>
                  <p className="text-gray-600">
                    We&apos;ll get back to you within 48 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm text-gray-600 mb-2"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        {...register("name")}
                        className={`w-full px-0 py-3 border-b ${
                          errors.name ? "border-red-500" : "border-gray-200"
                        } focus:outline-none focus:border-navy-900 transition-colors bg-transparent`}
                        placeholder="Your name"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm text-gray-600 mb-2"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        {...register("email")}
                        className={`w-full px-0 py-3 border-b ${
                          errors.email ? "border-red-500" : "border-gray-200"
                        } focus:outline-none focus:border-navy-900 transition-colors bg-transparent`}
                        placeholder="your@email.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm text-gray-600 mb-2"
                    >
                      Company (optional)
                    </label>
                    <input
                      id="company"
                      type="text"
                      {...register("company")}
                      className="w-full px-0 py-3 border-b border-gray-200 focus:outline-none focus:border-navy-900 transition-colors bg-transparent"
                      placeholder="Your company"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm text-gray-600 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      {...register("message")}
                      className={`w-full px-0 py-3 border-b ${
                        errors.message ? "border-red-500" : "border-gray-200"
                      } focus:outline-none focus:border-navy-900 transition-colors bg-transparent resize-none`}
                      placeholder="Tell us about your inquiry..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-3 bg-gold-500 text-navy-900 px-8 py-4 font-semibold hover:bg-gold-400 transition-colors disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send size={18} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* Map placeholder */}
      <section className="h-80 bg-off-white flex items-center justify-center">
        <p className="text-gray-400">Dubai, United Arab Emirates</p>
      </section>
    </>
  );
}
