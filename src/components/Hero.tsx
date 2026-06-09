import { motion } from 'framer-motion';

const desktopAvatars = [
  { id: 1, top: '18%', left: '7%', size: 68, img: 'https://i.pravatar.cc/150?u=a042581f4e29026024d' },
  { id: 2, top: '10%', right: '10%', size: 80, img: 'https://i.pravatar.cc/150?u=a042581f4e29026704d' },
  { id: 3, top: '65%', left: '10%', size: 90, img: 'https://i.pravatar.cc/150?u=a04258a2462d826712d' },
  { id: 4, top: '68%', right: '8%', size: 70, img: 'https://i.pravatar.cc/150?u=a048581f4e29026701d' },
  { id: 5, top: '85%', left: '44%', size: 85, img: 'https://i.pravatar.cc/150?u=a042581f4e29026702d' },
];

const tabletAvatars = [
  { id: 1, top: '14%', left: '6%', size: 68, img: 'https://i.pravatar.cc/150?u=a042581f4e29026024d' },
  { id: 2, top: '56%', left: '6%', size: 72, img: 'https://i.pravatar.cc/150?u=a042581f4e29026704d' },
  { id: 3, top: '14%', right: '6%', size: 68, img: 'https://i.pravatar.cc/150?u=a048581f4e29026701d' },
  { id: 4, top: '65%', left: '85%', size: 76, img: 'https://i.pravatar.cc/150?u=a042581f4e29026702d' },
];

const AvatarLayer = ({ avatars, delayBase = 0 }: { avatars: typeof desktopAvatars, delayBase?: number }) => (
  <>
    {avatars.map((avatar, index) => (
      <motion.div
        key={avatar.id}
        className="absolute rounded-full overflow-hidden border-4 border-white shadow-xl pointer-events-auto cursor-pointer"
        style={{
          top: avatar.top,
          left: avatar.left,
          right: avatar.right,
          width: avatar.size,
          height: avatar.size,
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: delayBase + index * 0.1, type: 'spring', bounce: 0.4 }}
        whileHover={{ scale: 1.12, y: -6 }}
      >
        <img src={avatar.img} alt={`Avatar ${avatar.id}`} className="w-full h-full object-cover" />
      </motion.div>
    ))}
  </>
);

const Hero = () => {
  return (
    <section className="relative min-h-[83svh] flex items-center justify-center text-center px-4 mb-5 sm:px-6 py-16 sm:py-20 overflow-hidden">

      <div className="relative z-10 max-w-3xl w-full">
        <motion.h1
          className="font-new-gerbil text-[clamp(2.2rem,7vw,4.5rem)] leading-[1.1] tracking-tight mb-5 sm:mb-6"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          The <span className="underline-orange">thinkers</span> and{' '}
          <br />
          doers were <span className="highlight-pink">changing</span>
          <br />
          the <span className="highlight-green">status Quo</span> with
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg text-text-muted leading-relaxed max-w-xl mx-auto px-2"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We are a team of strategists, designers communicators, researchers. Togeather,
          we belive that progress only happens when you refuse to play things safe.
        </motion.p>
      </div>

      <div className="absolute inset-0 pointer-events-none z-20 hidden md:block lg:hidden">
        <AvatarLayer avatars={tabletAvatars} delayBase={0.3} />
      </div>

      <motion.div
        className="absolute bottom-65 -translate-y-1/2 right-[22%] pointer-events-none z-0 hidden lg:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <svg viewBox="0 0 300 300" className="w-35 h-35 scale-x-[-1] rotate-55">
          <path
            d="M 210 30 A 120 120 0 1 0 120 260 L 210 30"
            fill="url(#heroGrad)"
          />
          <defs>
            <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#9333ea" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      <div className="absolute inset-0 pointer-events-none z-20 hidden lg:block">
        <AvatarLayer avatars={desktopAvatars} delayBase={0.4} />
      </div>
    </section>
  );
};

export default Hero;
