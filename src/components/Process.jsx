import { motion } from 'framer-motion';

const steps = [
  { step: '01', title: 'Discovery', desc: 'We align on goals, audience, and success metrics to set a clear direction.' },
  { step: '02', title: 'Design', desc: 'Wireframes to high-fidelity visuals, ensuring clarity and brand consistency.' },
  { step: '03', title: 'Build', desc: 'Component-driven development with clean, scalable code and animations.' },
  { step: '04', title: 'Launch', desc: 'QA, performance tuning, and SEO checks to ship confidently.' }
];

export default function Process() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 text-center"
        >
          Our process
        </motion.h2>
        <p className="mt-4 text-gray-600 text-center max-w-2xl mx-auto">
          A transparent, streamlined workflow that keeps you in the loop at every stage.
        </p>

        <ol className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(({ step, title, desc }, i) => (
            <motion.li
              key={step}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm"
            >
              <div className="text-sm font-mono text-gray-500">{step}</div>
              <h3 className="mt-2 text-xl font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{desc}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
