import { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, Layers, Briefcase, Phone, HelpCircle } from 'lucide-react';

const navItems = [
  { label: 'Home',     href: '#home',     icon: Home },
  { label: 'Studio',   href: '#studio',   icon: Layers },
  { label: 'Services', href: '#services', icon: Briefcase },
  { label: 'Contact',  href: '#contact',  icon: Phone },
  { label: "FAQ's",    href: '#faqs',     icon: HelpCircle },
];

const BottomNav = () => {
  const [active, setActive] = useState('Home');

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md border-t border-black/8 pb-safe">
      <ul className="flex items-stretch justify-around h-16">
        {navItems.map(({ label, href, icon: Icon }) => {
          const isActive = active === label;
          return (
            <li key={label} className="flex-1">
              <a
                href={href}
                onClick={() => setActive(label)}
                className="flex flex-col items-center justify-center gap-0.5 h-full w-full transition-colors"
              >
                <motion.div
                  animate={{ y: isActive ? -2 : 0 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                >
                  <Icon
                    size={22}
                    strokeWidth={isActive ? 2.2 : 1.6}
                    className={isActive ? 'text-purple-700' : 'text-black'}
                  />
                </motion.div>
                <span
                  className={`text-[10px] font-medium leading-none transition-colors ${
                    isActive ? 'text-purple-700' : 'text-black'
                  }`}
                >
                  {label}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="bottom-nav-dot"
                    className="w-1 h-1 rounded-full bg-purple-700 mt-0.5"
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default BottomNav;
