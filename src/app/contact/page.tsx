"use client";

import Container from "@/components/ui/Container";
import { siteConfig } from "@/lib/constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { CheckCircle, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

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
              Contact
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight"
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
                  <p className="text-brown-900">{siteConfig.location}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm uppercase tracking-wider mb-2">
                    Email
                  </p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-brown-900 hover:text-gold-600 transition-colors"
                  >
                    {siteConfig.email}
                  </a>
                </div>
                <div>
                  <p className="text-gray-500 text-sm uppercase tracking-wider mb-2">
                    Response Time
                  </p>
                  <p className="text-brown-900">Within 48 hours</p>
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
                  <CheckCircle
                    size={48}
                    className="mx-auto text-gold-500 mb-4"
                  />
                  <h3 className="text-base md:text-lg font-semibold text-brown-900 mb-2">
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
                        } focus:outline-none focus:border-brown-800 transition-colors bg-transparent`}
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
                        } focus:outline-none focus:border-brown-800 transition-colors bg-transparent`}
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
                      className="w-full px-0 py-3 border-b border-gray-200 focus:outline-none focus:border-brown-800 transition-colors bg-transparent"
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
                      } focus:outline-none focus:border-brown-800 transition-colors bg-transparent resize-none`}
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
                    className="inline-flex items-center gap-3 bg-gold-500 text-brown-950 px-8 py-4 font-semibold hover:bg-gold-400 transition-colors disabled:opacity-50"
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

      {/* Map */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1944279990926!2d55.27037407537706!3d25.197195777673056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xff45e502e1ceb7e2!2sBurj%20Khalifa!5e0!3m2!1sen!2sae!4v1736086340031!5m2!1sen!2sae"
        title="United World Summit office - Burj Khalifa, Dubai"
        className="min-h-[50svh] w-full"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
}
