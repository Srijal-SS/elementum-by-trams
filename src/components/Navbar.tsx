import { motion } from 'framer-motion';

const navItems = ['Home', 'Studio', 'Services', 'Contact', "FAQ's"];

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-sm border-b border-black/5">
      <motion.nav
        className="max-w-7xl mx-auto px-4 sm:px-6 py-2 sm:py-4 flex items-center justify-between"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="inline-flex items-center gap-3 font-syne-mono text-xl sm:text-4xl p-0 m-0 font-bold tracking-tight">
          <img src="/icon1.png" className='w-10 h-10 object-contain bg-gray-200 rounded-[50%]' alt="Logo" />
          Elementum
        </div>

        <ul className="hidden md:flex items-center gap-8 lg:gap-10">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="relative text-sm font-medium text-black group transition-colors hover:text-gray-500"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-orange transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center" />
      </motion.nav>
    </header>
  );
};

export default Navbar;
