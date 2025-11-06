import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[80vh] overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle gradient overlays for depth */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/90" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />

      <div className="relative container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center rounded-full border border-black/10 bg-white/70 backdrop-blur px-3 py-1 text-sm text-gray-700 shadow-sm">
            Futuristic websites, built for conversions
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
            We design and build modern websites that feel alive
          </h1>
          <p className="mt-5 text-lg md:text-xl text-gray-600">
            From concept to launch, we craft blazing-fast, SEO-friendly experiences with delightful interactions and a clean, minimalist aesthetic.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl bg-black text-white px-6 py-3 font-semibold shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-black/20 transition"
            >
              Start a project
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-xl bg-white text-gray-900 px-6 py-3 font-semibold shadow-sm border border-black/10 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black/10 transition"
            >
              Explore services
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
