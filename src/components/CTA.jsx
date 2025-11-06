import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />

          <div className="relative p-10 md:p-16">
            <motion.h3
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold"
            >
              Ready to build something remarkable?
            </motion.h3>
            <p className="mt-3 text-white/80 max-w-2xl">
              Tell us about your goals, and we’ll propose a tailored plan with timelines, pricing, and visual direction.
            </p>

            <motion.form
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              onSubmit={(e) => e.preventDefault()}
              className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                required
              />
              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                required
              />
              <button
                type="submit"
                className="rounded-xl bg-white text-gray-900 font-semibold px-6 py-3 hover:bg-gray-100 transition"
              >
                Get proposal
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}
