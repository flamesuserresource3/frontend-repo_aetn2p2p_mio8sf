import { motion } from 'framer-motion';
import { Rocket, Sparkles, Smartphone, Gauge } from 'lucide-react';

const services = [
  {
    icon: Rocket,
    title: 'Custom Website Design',
    desc: 'Conversion-focused designs tailored to your brand with a minimalist, modern aesthetic.'
  },
  {
    icon: Smartphone,
    title: 'Responsive Development',
    desc: 'Lightning-fast, accessible experiences that look perfect on every device.'
  },
  {
    icon: Gauge,
    title: 'Performance & SEO',
    desc: 'Core Web Vitals, on-page SEO, and semantic structure baked in from day one.'
  },
  {
    icon: Sparkles,
    title: 'Micro‑interactions',
    desc: 'Delightful animations and 3D touches that elevate your brand without distraction.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 text-center"
        >
          What we do
        </motion.h2>
        <p className="mt-4 text-gray-600 text-center max-w-2xl mx-auto">
          A focused set of services to ship impactful websites quickly and reliably.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="h-12 w-12 rounded-xl bg-black text-white flex items-center justify-center shadow">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
