import { motion } from 'framer-motion';

const Footer = () => {
  const footerLinks = [
    {
      title: 'Company',
      links: ['Home', 'About', 'Services', 'Blog'],
      hrefs: ['#home', '#about', '#services', '#blog'],
    },
    {
      title: 'Terms & Policies',
      links: ['Privacy Policy', 'Terms & Conditions', 'Disclaimer', 'Copyright'],
      hrefs: ['#privacy', '#terms', '#disclaimer', '#copyright'],
    },
    {
      title: 'Follow Us',
      links: ['Instagram', 'LinkedIn', 'Youtube', 'Twitter'],
      hrefs: ['https://www.instagram.com/srijal_srivastava_ss/', 'https://www.linkedin.com/in/srijal-srivastava-014010369', '#youtube', '#twitter'],
    },
  ];

  return (
    <footer className="bg-footer-green overflow-hidden">

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-16 sm:pt-20 pb-12 sm:pb-16 text-center">
        <motion.h2
          className="font-new-gerbil text-[clamp(2rem,5vw,3.5rem)] leading-tight tracking-tight mb-3 sm:mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Subscribe to
          <br />
          our newsletter
        </motion.h2>
        <p className="text-text-muted mb-6 sm:mb-8 text-sm sm:text-base">
          To check your daily operation and more updates from
        </p>
        <motion.button
          className="bg-black text-white px-8 sm:px-10 py-3.5 sm:py-4 rounded-full cursor-pointer font-semibold text-sm tracking-wide hover:bg-gray-800 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Subscribe Now
        </motion.button>

        <hr className="mt-12 sm:mt-16 border-black/10" />

        <div className="absolute top-1/2 -translate-y-1/2 right-0 pointer-events-none hidden md:block">
          <svg viewBox="0 0 300 300" className="w-40 h-40">
            <path
              d="M 210 30 A 120 120 0 1 0 120 260 L 210 30"
              fill="url(#grad)"
            />
            <defs>
              <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#9333ea" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-10 sm:pb-12">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="font-semibold font-new-gerbil text-sm mb-4 sm:mb-6">{col.title}</h4>
              <ul className="flex flex-col gap-2 sm:gap-3">
                {col.links.map((link, i) => (
                  <li key={link}>
                    <a
                      href={col.hrefs[i]}
                      target="_blank"
                      className="text-xs sm:text-sm text-text-muted hover:text-black transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="font-semibold font-new-gerbil text-sm mb-4 sm:mb-6">Contact Us</h4>
            <ul className="flex flex-col gap-2 sm:gap-3 text-xs sm:text-sm text-text-muted">
              <li className="leading-relaxed">Newton School of Technology, Rishihood University<br />Sonipat, 13101 (Delhi NCR)</li>
              <li>+91 9565200819</li>
              <li>contact@elementum.com</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-black/5 text-center py-4 sm:py-5 text-xs text-text-muted px-4">
        &copy; 2026 Elementum. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
