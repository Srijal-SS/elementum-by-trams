import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface FeatureSplitProps {
  reverse?: boolean;
  title: React.ReactNode;
  description: string;
  buttonText: string;
  imageUrl: string;
}

const FeatureSplit = ({ reverse = false, title, description, buttonText, imageUrl }: FeatureSplitProps) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
      <div
        className={`flex flex-col items-center gap-10 sm:gap-14 lg:gap-16 ${
          reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
        }`}
      >
        <motion.div
          className="flex-1 max-w-lg w-full text-center lg:text-left"
          initial={{ x: reverse ? 50 : -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-new-gerbil text-[clamp(1.8rem,5vw,2.8rem)] leading-tight tracking-tight mb-5">
            {title}
          </h2>
          <p className="text-text-muted leading-relaxed mb-7 text-sm sm:text-base">{description}</p>
          <button className="group inline-flex items-center gap-2 font-semibold border-b-2 border-black pb-1 cursor-pointer hover:opacity-70 transition-opacity text-sm sm:text-base">
            {buttonText}
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>

        <motion.div
          className="flex-1 flex justify-center items-center w-full"
          initial={{ x: reverse ? -50 : 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
            <img
              src={imageUrl}
              alt="Feature"
              className="w-full h-full object-cover rounded-full shadow-2xl relative z-10"
            />
            {!reverse ? (
              <div className="absolute w-28 h-28 sm:w-36 sm:h-36 bg-accent-pink rounded-2xl -top-4 -right-4 rotate-12 z-0 opacity-80" />
            ) : (
              <div
                className="absolute z-0"
                style={{
                  bottom: '-24px',
                  right: '16px',
                  width: 0,
                  height: 0,
                  borderLeft: '56px solid transparent',
                  borderRight: '56px solid transparent',
                  borderBottom: '96px solid #FF6B6B',
                  opacity: 0.8,
                  transform: 'rotate(-12deg)',
                }}
              />
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureSplit;
