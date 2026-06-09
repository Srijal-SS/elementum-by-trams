import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const offersList = [
  {
    id: 1,
    title: 'Collaborative & partnership',
    subtitle: 'Office of multiple human, humans',
  },
  {
    id: 2,
    title: 'We talk about our weight',
    subtitle: 'The Range / US Air Base digital environment',
  },
  {
    id: 3,
    title: 'Piloting digital confidence',
    subtitle: 'Global award minimal, studio, digital',
  },
];

const Offers = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-24">
      <motion.h2
        className="font-new-gerbil text-[clamp(2rem,5vw,3.5rem)] leading-tight tracking-tight mb-10 sm:mb-14 lg:mb-16"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        What we <span className="highlight-green">can</span>
        <br />
        <span className="underline-orange">offer you!</span>
      </motion.h2>

      <div className="flex flex-col">
        {offersList.map((offer, index) => (
          <motion.div
            key={offer.id}
            className="group flex items-center justify-between border-b border-gray-200 py-6 sm:py-8 cursor-pointer rounded-lg transition-all duration-300 hover:px-3 sm:hover:px-4 hover:bg-gray-50"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
          >
            <div className="flex flex-col gap-1 sm:gap-2 lg:flex-row lg:items-center lg:gap-12 flex-1 min-w-0 pr-4">
              <span className="text-xs sm:text-sm text-text-muted lg:w-52 shrink-0 leading-snug">
                {offer.subtitle}
              </span>
              <h3 className="font-new-gerbil text-[clamp(1.2rem,3vw,2.2rem)] font-normal leading-tight">
                {offer.title}
              </h3>
            </div>
            <ArrowRight
              size={20}
              className="text-gray-300 transition-all duration-300 group-hover:text-black group-hover:translate-x-2 shrink-0"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Offers;
